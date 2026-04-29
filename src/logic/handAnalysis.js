import { TILE_LIST, TILE_MAP, countTiles, KOKUSHI_IDS, isWinningHand } from './tiles';
import { YAKU_LIST } from './riichiData';
import { calcHan, calcScore } from './score';

const yakuById = new Map(YAKU_LIST.map((yaku) => [yaku.id, yaku]));
const suits = ['m', 'p', 's'];
const dragonIds = ['white', 'green', 'red'];
const windIds = ['east', 'south', 'west', 'north'];
const greenIds = new Set(['2s', '3s', '4s', '6s', '8s', 'green']);

function isNumberTile(id) {
  return /^[1-9][mps]$/.test(id);
}

function tileNumber(id) {
  return Number(id.slice(0, -1));
}

function tileSuit(id) {
  return id.at(-1);
}

function isTerminalOrHonor(id) {
  const tile = TILE_MAP.get(id);
  return Boolean(tile?.terminal || tile?.honor);
}

function normalizeFixedMelds(options) {
  return (options.fixedMelds || []).map((meld) => ({
    type: meld.type,
    tiles: [...meld.tiles],
    open: Boolean(meld.open),
    kan: Boolean(meld.kan),
    fixed: true,
  }));
}

function isSevenPairs(tileIds) {
  if (tileIds.length !== 14) return false;
  const values = Object.values(countTiles(tileIds));
  return values.length === 7 && values.every((count) => count === 2);
}

function isKokushi(tileIds) {
  if (tileIds.length !== 14) return false;
  const counts = countTiles(tileIds);
  return KOKUSHI_IDS.every((id) => counts[id] >= 1) && KOKUSHI_IDS.some((id) => counts[id] >= 2);
}

function isChuuren(tileIds, options) {
  if (!options.isClosed || tileIds.length !== 14) return false;
  if (normalizeFixedMelds(options).length > 0) return false;
  if (tileIds.some((id) => !isNumberTile(id))) return false;
  const suitSet = new Set(tileIds.map(tileSuit));
  if (suitSet.size !== 1) return false;
  const counts = countTiles(tileIds);
  const suit = [...suitSet][0];
  const required = { 1: 3, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 3 };
  return Object.entries(required).every(([number, requiredCount]) => (counts[`${number}${suit}`] || 0) >= requiredCount);
}

function isRyuiso(tileIds) {
  return tileIds.length === 14 && tileIds.every((id) => greenIds.has(id));
}

function isTsuiso(tileIds) {
  return tileIds.length === 14 && tileIds.every((id) => TILE_MAP.get(id)?.honor);
}

function isChinroto(tileIds) {
  return tileIds.length === 14 && tileIds.every((id) => isNumberTile(id) && isTerminalOrHonor(id));
}

function getGlobalYakuman(tileIds, options) {
  const counts = countTiles(tileIds);
  const yaku = [];

  if (normalizeFixedMelds(options).length === 0 && isKokushi(tileIds)) yaku.push({ id: 'kokushi', count: 1 });
  if (isChuuren(tileIds, options)) yaku.push({ id: 'chuuren', count: 1 });
  if (isRyuiso(tileIds)) yaku.push({ id: 'ryuiso', count: 1 });
  if (isTsuiso(tileIds)) yaku.push({ id: 'tsuiso', count: 1 });
  if (isChinroto(tileIds)) yaku.push({ id: 'chinroto', count: 1 });
  if (dragonIds.every((id) => (counts[id] || 0) >= 3)) yaku.push({ id: 'daisangen', count: 1 });

  const windTriplets = windIds.filter((id) => (counts[id] || 0) >= 3).length;
  const windPairs = windIds.filter((id) => (counts[id] || 0) >= 2).length;
  if (windTriplets === 4) yaku.push({ id: 'daisushi', count: 1 });
  else if (windTriplets === 3 && windPairs >= 4) yaku.push({ id: 'shosushi', count: 1 });

  if (Number(options.kanCount || 0) >= 4) yaku.push({ id: 'suukantsu', count: 1 });

  return yaku;
}

function cloneCounts(counts) {
  return Object.fromEntries(TILE_LIST.map((tile) => [tile.id, counts[tile.id] || 0]));
}

function removeTilesFromCounts(counts, tileIds) {
  const next = { ...counts };
  for (const id of tileIds) {
    next[id] = (next[id] || 0) - 1;
    if (next[id] < 0) return null;
  }
  return next;
}

function findMeldArrangements(counts, neededMelds, melds = [], limit = 160) {
  if (melds.length > neededMelds) return [];
  const first = TILE_LIST.find((tile) => counts[tile.id] > 0);
  if (!first) return melds.length === neededMelds ? [melds] : [];
  if (melds.length === neededMelds) return [];

  const results = [];
  const id = first.id;

  if (counts[id] >= 3) {
    counts[id] -= 3;
    results.push(...findMeldArrangements(counts, neededMelds, [...melds, { type: 'triplet', tiles: [id, id, id], open: false, fixed: false }], limit));
    counts[id] += 3;
  }

  if (isNumberTile(id) && tileNumber(id) <= 7) {
    const suit = tileSuit(id);
    const a = `${tileNumber(id) + 1}${suit}`;
    const b = `${tileNumber(id) + 2}${suit}`;
    if ((counts[a] || 0) > 0 && (counts[b] || 0) > 0) {
      counts[id] -= 1;
      counts[a] -= 1;
      counts[b] -= 1;
      results.push(...findMeldArrangements(counts, neededMelds, [...melds, { type: 'sequence', tiles: [id, a, b], open: false, fixed: false }], limit));
      counts[id] += 1;
      counts[a] += 1;
      counts[b] += 1;
    }
  }

  return results.slice(0, limit);
}

function getStandardArrangements(tileIds, fixedMelds = []) {
  const baseCounts = cloneCounts(countTiles(tileIds));
  let countsWithoutFixed = baseCounts;
  for (const meld of fixedMelds) {
    countsWithoutFixed = removeTilesFromCounts(countsWithoutFixed, meld.tiles);
    if (!countsWithoutFixed) return [];
  }

  const neededMelds = 4 - fixedMelds.length;
  if (neededMelds < 0) return [];

  const remainingCount = Object.values(countsWithoutFixed).reduce((sum, count) => sum + count, 0);
  if (remainingCount !== neededMelds * 3 + 2) return [];

  const arrangements = [];
  TILE_LIST.forEach((tile) => {
    if ((countsWithoutFixed[tile.id] || 0) < 2) return;
    const counts = { ...countsWithoutFixed };
    counts[tile.id] -= 2;
    const meldGroups = findMeldArrangements(counts, neededMelds);
    meldGroups.forEach((melds) => {
      arrangements.push({ pair: tile.id, melds: [...fixedMelds, ...melds] });
    });
  });

  return arrangements;
}

function hasYakuhai(id, options) {
  return dragonIds.includes(id) || id === options.roundWind || id === options.seatWind;
}

function getSequenceBaseNumber(meld) {
  return Math.min(...meld.tiles.map(tileNumber));
}

function isTwoSidedWait(meld, winningTileId) {
  if (!winningTileId || meld.type !== 'sequence' || !meld.tiles.includes(winningTileId)) return false;
  const suit = tileSuit(meld.tiles[0]);
  if (tileSuit(winningTileId) !== suit) return false;

  const base = getSequenceBaseNumber(meld);
  const winNumber = tileNumber(winningTileId);

  if (winNumber === base + 1) return false; // 간짱
  if (base === 1 && winNumber === 3) return false; // 변짱 1-2 대기
  if (base === 7 && winNumber === 7) return false; // 변짱 8-9 대기

  return winNumber === base || winNumber === base + 2;
}

function getWaitFu(arrangement, winningTileId) {
  if (!winningTileId) return 0;

  const winningSequences = arrangement.melds.filter((meld) => meld.type === 'sequence' && meld.tiles.includes(winningTileId));

  // 같은 패가 머리와 슌쯔 양쪽에 모두 들어갈 수 있는 형태는
  // 실제 화료패를 가장 유리한 몸통에 붙인 후보도 함께 고려해야 합니다.
  // 예: 111222333m 789p 9p 에서 9p 화료는 99p 단기처럼 보일 수 있지만,
  // 7p8p9p의 양면 대기로 처리하면 핑후가 성립합니다.
  if (winningSequences.some((meld) => isTwoSidedWait(meld, winningTileId))) return 0;
  if (winningSequences.length > 0) return 2;
  if (arrangement.pair === winningTileId) return 2;

  return 0;
}

function isClosedTriplet(meld, options) {
  if (meld.type !== 'triplet') return false;
  if (meld.open) return false;
  if (options.winType === 'ron' && meld.tiles.includes(options.winningTileId)) return false;
  return true;
}

function analyzeArrangement(tileIds, arrangement, options) {
  const yaku = [];
  const melds = arrangement.melds;
  const sequences = melds.filter((meld) => meld.type === 'sequence');
  const triplets = melds.filter((meld) => meld.type === 'triplet');
  const closedTriplets = triplets.filter((meld) => isClosedTriplet(meld, options));
  const globalYakuman = getGlobalYakuman(tileIds, options);

  if (globalYakuman.length > 0) {
    return { yaku: globalYakuman, fu: 0, arrangement, yakuman: true };
  }

  if (options.isClosed && triplets.length === 4 && closedTriplets.length === 4) {
    return { yaku: [{ id: 'suuankou', count: 1 }], fu: 0, arrangement, yakuman: true };
  }

  const allSimples = tileIds.every((id) => isNumberTile(id) && !isTerminalOrHonor(id));
  if (allSimples) yaku.push({ id: 'tanyao', count: 1 });

  if (options.isClosed && options.winType === 'tsumo') yaku.push({ id: 'menzenTsumo', count: 1 });
  if (options.isClosed && options.riichiStatus === 'riichi') yaku.push({ id: 'riichi', count: 1 });
  if (options.isClosed && options.riichiStatus === 'doubleRiichi') yaku.push({ id: 'doubleRiichi', count: 1 });

  const yakuhaiCount = triplets.filter((meld) => hasYakuhai(meld.tiles[0], options)).length;
  if (yakuhaiCount > 0) yaku.push({ id: 'yakuhai', count: yakuhaiCount });

  if (triplets.length === 4) yaku.push({ id: 'toitoi', count: 1 });
  if (closedTriplets.length >= 3) yaku.push({ id: 'sananko', count: 1 });
  if (Number(options.kanCount || 0) >= 3) yaku.push({ id: 'sanKantsu', count: 1 });

  const suitSet = new Set(tileIds.filter(isNumberTile).map(tileSuit));
  const hasHonor = tileIds.some((id) => TILE_MAP.get(id)?.honor);
  if (suitSet.size === 1 && hasHonor) yaku.push({ id: 'honitsu', count: 1 });
  if (suitSet.size === 1 && !hasHonor) yaku.push({ id: 'chinitsu', count: 1 });

  const sequenceKeys = sequences.map((meld) => meld.tiles.map((id) => tileNumber(id)).join('-') + tileSuit(meld.tiles[0]));
  const sequenceCountMap = sequenceKeys.reduce((map, key) => {
    map.set(key, (map.get(key) || 0) + 1);
    return map;
  }, new Map());
  const duplicateSequenceCount = [...sequenceCountMap.values()].filter((count) => count >= 2).length;
  if (options.isClosed && duplicateSequenceCount >= 2) yaku.push({ id: 'ryanpeko', count: 1 });
  else if (options.isClosed && duplicateSequenceCount >= 1) yaku.push({ id: 'ipeiko', count: 1 });

  for (let n = 1; n <= 7; n += 1) {
    const hasAllSuits = suits.every((suit) => sequenceKeys.includes(`${n}-${n + 1}-${n + 2}${suit}`));
    if (hasAllSuits) {
      yaku.push({ id: 'sanshokuDoujun', count: 1 });
      break;
    }
  }

  for (const suit of suits) {
    if (sequenceKeys.includes(`1-2-3${suit}`) && sequenceKeys.includes(`4-5-6${suit}`) && sequenceKeys.includes(`7-8-9${suit}`)) {
      yaku.push({ id: 'ittsuu', count: 1 });
      break;
    }
  }

  const tripletKeys = triplets.map((meld) => meld.tiles[0]);
  for (let n = 1; n <= 9; n += 1) {
    const hasAllSuits = suits.every((suit) => tripletKeys.includes(`${n}${suit}`));
    if (hasAllSuits) {
      yaku.push({ id: 'sanshokuDouko', count: 1 });
      break;
    }
  }

  const allBlocksContainTerminalOrHonor = [arrangement.pair, ...melds.map((meld) => meld.tiles[0])].every((id, index) => {
    if (index === 0) return isTerminalOrHonor(id);
    const meld = melds[index - 1];
    return meld.tiles.some(isTerminalOrHonor);
  });
  if (allBlocksContainTerminalOrHonor && hasHonor) yaku.push({ id: 'chanta', count: 1 });
  if (allBlocksContainTerminalOrHonor && !hasHonor) yaku.push({ id: 'junchan', count: 1 });

  const waitFu = getWaitFu(arrangement, options.winningTileId);
  const isPinfu = sequences.length === 4 && !hasYakuhai(arrangement.pair, options) && waitFu === 0;
  if (isPinfu && options.isClosed) yaku.push({ id: 'pinfu', count: 1 });

  let fu = 20;
  if (options.winType === 'ron' && options.isClosed) fu += 10;
  if (options.winType === 'tsumo' && !isPinfu) fu += 2;
  if (hasYakuhai(arrangement.pair, options)) fu += 2;
  fu += waitFu;
  triplets.forEach((meld) => {
    const baseFu = isTerminalOrHonor(meld.tiles[0]) ? 8 : 4;
    const multiplier = meld.open ? 0.5 : 1;
    fu += baseFu * multiplier;
  });

  if (isPinfu && options.isClosed && options.winType === 'tsumo') fu = 20;
  else if (fu < 30) fu = 30;

  return { yaku, fu: Math.ceil(fu / 10) * 10, arrangement };
}

function withKnownYakuName(yakuItems) {
  return yakuItems
    .filter((item) => yakuById.has(item.id))
    .map((item) => ({ ...item, name: yakuById.get(item.id).name }));
}

function scoreCandidate(yaku, fu, options) {
  const han = calcHan({
    selectedYaku: yaku,
    yakuList: YAKU_LIST,
    isClosed: options.isClosed,
    doraCount: options.doraCount,
    uraDoraCount: options.uraDoraCount,
    akaDoraCount: options.akaDoraCount,
  });
  const result = calcScore({ ...options, han, fu });
  return { han, result };
}

export function analyzeHandForScore(tileIds, options) {
  const fixedMelds = normalizeFixedMelds(options);
  if (tileIds.length !== 14) {
    return { error: '14장을 선택해야 점수를 계산할 수 있습니다.' };
  }
  if (fixedMelds.length === 0 && !isWinningHand(tileIds)) {
    return { error: '현재 선택한 14장은 완성패가 아닙니다.' };
  }

  const candidates = [];
  const globalYakuman = getGlobalYakuman(tileIds, options);
  if (globalYakuman.length > 0) {
    candidates.push({ yaku: withKnownYakuName(globalYakuman), fu: 0, yakuman: true });
  }

  if (fixedMelds.length === 0 && isSevenPairs(tileIds)) {
    const yaku = [];
    if (options.isClosed && options.winType === 'tsumo') yaku.push({ id: 'menzenTsumo', count: 1 });
    if (options.isClosed && options.riichiStatus === 'riichi') yaku.push({ id: 'riichi', count: 1 });
    if (options.isClosed && options.riichiStatus === 'doubleRiichi') yaku.push({ id: 'doubleRiichi', count: 1 });
    if (tileIds.every((id) => isNumberTile(id) && !isTerminalOrHonor(id))) yaku.push({ id: 'tanyao', count: 1 });
    candidates.push({ yaku: withKnownYakuName(yaku), fu: 25 });
  }

  getStandardArrangements(tileIds, fixedMelds).forEach((arrangement) => {
    const analyzed = analyzeArrangement(tileIds, arrangement, options);
    candidates.push({ ...analyzed, yaku: withKnownYakuName(analyzed.yaku) });
  });

  if (candidates.length === 0) return { error: '점수 계산 가능한 조합을 찾지 못했습니다.' };

  const scored = candidates.map((candidate) => {
    if (candidate.yakuman) {
      const yakumanCount = Math.max(1, candidate.yaku.length);
      const result = calcScore({ ...options, han: 13 * yakumanCount, fu: 40 });
      return { ...candidate, han: 13 * yakumanCount, result };
    }
    const { han, result } = scoreCandidate(candidate.yaku, candidate.fu, options);
    return { ...candidate, han, result };
  });

  const valid = scored.filter((item) => !item.result.error);
  if (valid.length === 0) {
    const doraOnlyHan = Number(options.doraCount || 0) + Number(options.uraDoraCount || 0) + Number(options.akaDoraCount || 0);
    return {
      error: doraOnlyHan > 0 ? '도라만으로는 화료할 수 없습니다. 기본 역이 필요합니다.' : '인식된 역이 없습니다. 리치 등 수동 역이 필요한 손패일 수 있습니다.',
      candidates: scored,
    };
  }

  valid.sort((a, b) => (b.result.total || 0) - (a.result.total || 0) || b.han - a.han || b.fu - a.fu || b.yaku.length - a.yaku.length);
  const best = valid[0];
  const doraItems = [
    options.doraCount > 0 ? { name: '도라', count: Number(options.doraCount) } : null,
    options.uraDoraCount > 0 ? { name: '우라도라', count: Number(options.uraDoraCount) } : null,
    options.akaDoraCount > 0 ? { name: '적도라', count: Number(options.akaDoraCount) } : null,
  ].filter(Boolean);

  return { ...best, doraItems, candidates: valid, winningTileId: options.winningTileId || null };
}
