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

function getTripletLikeIds(counts) {
  return TILE_LIST.filter((tile) => (counts[tile.id] || 0) >= 3).map((tile) => tile.id);
}

function getPairIds(counts) {
  return TILE_LIST.filter((tile) => (counts[tile.id] || 0) >= 2).map((tile) => tile.id);
}

function getGlobalYakuman(tileIds, options) {
  const counts = countTiles(tileIds);
  const yaku = [];

  if (isKokushi(tileIds)) yaku.push({ id: 'kokushi', count: 1 });
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

function getFlushYaku(tileIds) {
  const suitSet = new Set(tileIds.filter(isNumberTile).map(tileSuit));
  const hasHonor = tileIds.some((id) => TILE_MAP.get(id)?.honor);
  const yaku = [];

  if (suitSet.size === 1 && hasHonor) yaku.push({ id: 'honitsu', count: 1 });
  if (suitSet.size === 1 && !hasHonor) yaku.push({ id: 'chinitsu', count: 1 });

  return yaku;
}

function cloneCounts(counts) {
  return Object.fromEntries(TILE_LIST.map((tile) => [tile.id, counts[tile.id] || 0]));
}

function findMeldArrangements(counts, melds = [], limit = 80) {
  if (melds.length > 4) return [];
  const first = TILE_LIST.find((tile) => counts[tile.id] > 0);
  if (!first) return [melds];

  const results = [];
  const id = first.id;

  if (counts[id] >= 3) {
    counts[id] -= 3;
    results.push(...findMeldArrangements(counts, [...melds, { type: 'triplet', tiles: [id, id, id] }], limit));
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
      results.push(...findMeldArrangements(counts, [...melds, { type: 'sequence', tiles: [id, a, b] }], limit));
      counts[id] += 1;
      counts[a] += 1;
      counts[b] += 1;
    }
  }

  return results.slice(0, limit);
}

function getStandardArrangements(tileIds) {
  const baseCounts = cloneCounts(countTiles(tileIds));
  const arrangements = [];

  TILE_LIST.forEach((tile) => {
    if ((baseCounts[tile.id] || 0) < 2) return;
    const counts = { ...baseCounts };
    counts[tile.id] -= 2;
    const meldGroups = findMeldArrangements(counts);
    meldGroups.forEach((melds) => {
      if (melds.length === 4) arrangements.push({ pair: tile.id, melds });
    });
  });

  return arrangements;
}

function countYakuhaiValue(tileId, options) {
  let count = 0;
  if (dragonIds.includes(tileId)) count += 1;
  if (tileId === options.roundWind) count += 1;
  if (tileId === options.seatWind) count += 1;
  return count;
}

function getPairFuDetails(tileId, options) {
  const details = [];
  if (dragonIds.includes(tileId)) details.push({ value: 2, label: '역패머리' });
  if (tileId === options.roundWind) details.push({ value: 2, label: '역패머리' });
  if (tileId === options.seatWind) details.push({ value: 2, label: '자풍패머리' });
  return details;
}

function getMeldFuLabel(tileId, meldType) {
  const prefix = isTerminalOrHonor(tileId) ? '요구패' : '중장패';
  if (meldType === 'kan') return `${prefix}명깡`;
  if (meldType === 'ankan') return `${prefix}암깡`;
  if (meldType === 'closedTriplet') return `${prefix}암각`;
  return `${prefix}밍커`;
}

function hasYakuhai(pairOrMeldId, options) {
  return countYakuhaiValue(pairOrMeldId, options) > 0;
}

function getFixedMeldTypesMap(fixedMelds = []) {
  const map = new Map();
  fixedMelds.forEach((meld) => {
    const tileId = meld.tileId || meld.tiles?.[0];
    if (!tileId) return;
    if (!map.has(tileId)) map.set(tileId, []);
    map.get(tileId).push(meld.type);
  });
  return map;
}

function takeFixedMeldType(fixedMeldTypesMap, tileId) {
  const list = fixedMeldTypesMap.get(tileId);
  if (!list || list.length === 0) return null;
  return list.shift();
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
  if (base === 1 && winNumber === 3) return false; // 1-2 대기
  if (base === 7 && winNumber === 7) return false; // 8-9 대기

  return winNumber === base || winNumber === base + 2;
}

function getWaitFuOptions(arrangement, winningTileId) {
  if (!winningTileId) {
    return { canTwoSided: false, canFuWait: false, fuWaitLabels: [] };
  }

  const fuWaitLabels = [];
  let canFuWait = false;

  // 같은 완성패라도 머리대기/양면/변짱/간짱 등 여러 해석이 가능할 수 있습니다.
  // 점수 계산에서는 가능한 해석 중 가장 유리한 쪽을 고르기 위해 후보를 모두 기록합니다.
  if (arrangement.pair === winningTileId) {
    canFuWait = true;
    fuWaitLabels.push('단기대기');
  }

  const winningSequences = arrangement.melds.filter((meld) => meld.type === 'sequence' && meld.tiles.includes(winningTileId));
  const canTwoSided = winningSequences.some((meld) => isTwoSidedWait(meld, winningTileId));
  const canClosedOrEdge = winningSequences.some((meld) => !isTwoSidedWait(meld, winningTileId));

  if (canClosedOrEdge) {
    canFuWait = true;
    fuWaitLabels.push('간짱/변짱대기');
  }

  return { canTwoSided, canFuWait, fuWaitLabels };
}

function canPlaceWinningTileOutsideTriplet(arrangement, winningTileId) {
  if (!winningTileId) return false;
  if (arrangement.pair === winningTileId) return true;
  return arrangement.melds.some((meld) => meld.type === 'sequence' && meld.tiles.includes(winningTileId));
}


function getFixedMeldFuMap(fixedMelds = []) {
  const map = new Map();
  fixedMelds
    .filter((meld) => ['pon', 'kan', 'ankan'].includes(meld.type))
    .forEach((meld) => {
      const tileId = meld.tileId || meld.tiles?.[0];
      if (!tileId) return;
      const isYaochu = isTerminalOrHonor(tileId);
      let fu = 0;
      if (meld.type === 'kan') fu = isYaochu ? 16 : 8; // 명깡
      else if (meld.type === 'ankan') fu = isYaochu ? 32 : 16; // 암깡
      else fu = isYaochu ? 4 : 2; // 명각(퐁)
      if (!map.has(tileId)) map.set(tileId, []);
      map.get(tileId).push({ type: meld.type, fu, label: getMeldFuLabel(tileId, meld.type) });
    });
  return map;
}

function takeFixedMeldFu(fixedMeldFuMap, tileId) {
  const list = fixedMeldFuMap.get(tileId);
  if (!list || list.length === 0) return null;
  return list.shift();
}

function analyzeArrangement(tileIds, arrangement, options) {
  const yaku = [];
  const counts = countTiles(tileIds);
  const melds = arrangement.melds;
  const sequences = melds.filter((meld) => meld.type === 'sequence');
  const triplets = melds.filter((meld) => meld.type === 'triplet');
  const yakumanYaku = [...getGlobalYakuman(tileIds, options)];

  const fixedMeldTypesForYakuman = getFixedMeldTypesMap(options.fixedMelds);
  const concealedTripletCountForYakuman = triplets.filter((meld) => {
    const fixedType = takeFixedMeldType(fixedMeldTypesForYakuman, meld.tiles[0]);
    if (fixedType === 'pon' || fixedType === 'kan') return false;
    if (fixedType === 'ankan') return true;
    return !(options.winType === 'ron' && meld.tiles[0] === options.winningTileId);
  }).length;

  if (options.isClosed && concealedTripletCountForYakuman === 4 && (options.winType === 'tsumo' || arrangement.pair === options.winningTileId)) {
    yakumanYaku.push({ id: 'suuankou', count: 1 });
  }

  if (yakumanYaku.length > 0) {
    return { yaku: yakumanYaku, fu: 0, arrangement, yakuman: true };
  }

  const allSimples = tileIds.every((id) => isNumberTile(id) && !isTerminalOrHonor(id));
  if (allSimples) yaku.push({ id: 'tanyao', count: 1 });

  if (options.isClosed && options.winType === 'tsumo') yaku.push({ id: 'menzenTsumo', count: 1 });

  if (options.isClosed && options.riichiStatus === 'riichi') yaku.push({ id: 'riichi', count: 1 });
  if (options.isClosed && options.riichiStatus === 'doubleRiichi') yaku.push({ id: 'doubleRiichi', count: 1 });

  const fixedMeldTypesForYaku = getFixedMeldTypesMap(options.fixedMelds);
  const tripletsWithFixedType = triplets.map((meld) => ({
    meld,
    fixedType: takeFixedMeldType(fixedMeldTypesForYaku, meld.tiles[0]),
  }));
  const canWinOutsideTriplet = canPlaceWinningTileOutsideTriplet(arrangement, options.winningTileId);

  const yakuhaiCount = tripletsWithFixedType.reduce(
    (sum, { meld }) => sum + countYakuhaiValue(meld.tiles[0], options),
    0,
  );
  if (yakuhaiCount > 0) yaku.push({ id: 'yakuhai', count: yakuhaiCount });

  const dragonTripletCount = triplets.filter((meld) => dragonIds.includes(meld.tiles[0])).length;
  const hasDragonPair = dragonIds.includes(arrangement.pair);
  if (dragonTripletCount === 2 && hasDragonPair) yaku.push({ id: 'shosangen', count: 1 });

  const concealedTripletCount = tripletsWithFixedType.filter(({ meld, fixedType }) => {
    if (fixedType === 'pon' || fixedType === 'kan') return false;
    if (fixedType === 'ankan') return true;

    // 론으로 완성된 커쯔는 부수/역 판정에서 명각 취급이므로 삼암각에 포함하지 않습니다.
    return !(options.winType === 'ron' && meld.tiles[0] === options.winningTileId && !canWinOutsideTriplet);
  }).length;

  if (triplets.length === 4) yaku.push({ id: 'toitoi', count: 1 });
  if (concealedTripletCount >= 3) yaku.push({ id: 'sananko', count: 1 });
  if (Number(options.kanCount || 0) >= 3) yaku.push({ id: 'sanKantsu', count: 1 });

  const hasHonor = tileIds.some((id) => TILE_MAP.get(id)?.honor);
  yaku.push(...getFlushYaku(tileIds));

  const sequenceKeys = sequences.map((meld) => meld.tiles.map((id) => tileNumber(id)).join('-') + tileSuit(meld.tiles[0]));
  const sequenceCountMap = sequenceKeys.reduce((map, key) => {
    map.set(key, (map.get(key) || 0) + 1);
    return map;
  }, new Map());
  const duplicateSequenceCount = [...sequenceCountMap.values()].filter((count) => count >= 2).length;
  if (options.isClosed && duplicateSequenceCount >= 2) {
    yaku.push({ id: 'ryanpeko', count: 1 });
  } else if (options.isClosed && duplicateSequenceCount >= 1) {
    yaku.push({ id: 'ipeiko', count: 1 });
  }

  for (let n = 1; n <= 7; n += 1) {
    const hasAllSuits = suits.every((suit) => sequenceKeys.includes(`${n}-${n + 1}-${n + 2}${suit}`));
    if (hasAllSuits) {
      yaku.push({ id: 'sanshokuDoujun', count: 1 });
      break;
    }
  }

  for (const suit of suits) {
    const hasIttsuu = sequenceKeys.includes(`1-2-3${suit}`)
      && sequenceKeys.includes(`4-5-6${suit}`)
      && sequenceKeys.includes(`7-8-9${suit}`);
    if (hasIttsuu) {
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

  const allTerminalOrHonor = tileIds.every(isTerminalOrHonor);
  if (allTerminalOrHonor) yaku.push({ id: 'honroutou', count: 1 });

  const allBlocksContainTerminalOrHonor = [arrangement.pair, ...melds.map((meld) => meld.tiles[0])].every((id, index) => {
    if (index === 0) return isTerminalOrHonor(id);
    const meld = melds[index - 1];
    return meld.tiles.some(isTerminalOrHonor);
  });
  if (!allTerminalOrHonor && allBlocksContainTerminalOrHonor && hasHonor) yaku.push({ id: 'chanta', count: 1 });
  if (!allTerminalOrHonor && allBlocksContainTerminalOrHonor && !hasHonor) yaku.push({ id: 'junchan', count: 1 });

  const waitFuOptions = getWaitFuOptions(arrangement, options.winningTileId);
  const canPinfuWait = waitFuOptions.canTwoSided;
  const isPinfu = options.isClosed
    && sequences.length === 4
    && !hasYakuhai(arrangement.pair, options)
    && canPinfuWait;
  if (isPinfu) yaku.push({ id: 'pinfu', count: 1 });

  // 핑후가 성립하는 해석이 있으면 양면대기 0부를 사용합니다.
  // 핑후가 아니면서 같은 패를 변짱/간짱/단기 등으로도 볼 수 있으면 2부를 붙여 더 높은 부수 후보로 계산합니다.
  const waitFu = isPinfu ? 0 : (waitFuOptions.canFuWait ? 2 : 0);

  const fuDetails = [{ value: 20, label: '기본' }];
  if (options.winType === 'ron' && options.isClosed) fuDetails.push({ value: 10, label: '멘젠론' });
  if (options.winType === 'tsumo' && !isPinfu) fuDetails.push({ value: 2, label: '쯔모' });
  fuDetails.push(...getPairFuDetails(arrangement.pair, options));
  if (waitFu > 0) fuDetails.push({ value: waitFu, label: waitFuOptions.fuWaitLabels[0] || '간짱/변짱/단기대기' });
  const fixedMeldFuMap = getFixedMeldFuMap(options.fixedMelds);
  triplets.forEach((meld) => {
    const tileId = meld.tiles[0];
    const fixedFu = takeFixedMeldFu(fixedMeldFuMap, tileId);
    if (fixedFu) {
      fuDetails.push({ value: fixedFu.fu, label: fixedFu.label });
      return;
    }

    // 손 안에서 완성된 커쯔는 기본적으로 암각으로 계산합니다.
    // 단, 론으로 커쯔가 완성된 경우에는 명각 부수로 계산합니다.
    const isRonCompletedTriplet = options.winType === 'ron' && tileId === options.winningTileId && !canWinOutsideTriplet;
    if (isRonCompletedTriplet) {
      fuDetails.push({ value: isTerminalOrHonor(tileId) ? 4 : 2, label: getMeldFuLabel(tileId, 'openTriplet') });
    } else {
      fuDetails.push({ value: isTerminalOrHonor(tileId) ? 8 : 4, label: getMeldFuLabel(tileId, 'closedTriplet') });
    }
  });
  let fu = fuDetails.reduce((sum, item) => sum + item.value, 0);
  const rawFu = fu;
  if (!isPinfu && fu < 30) fu = 30;

  return { yaku, fu, rawFu, fuDetails, arrangement };
}

function withKnownYakuName(yakuItems) {
  return yakuItems
    .filter((item) => yakuById.has(item.id))
    .map((item) => ({ ...item, name: yakuById.get(item.id).name }));
}

function scoreCandidate(tileIds, yaku, fu, options) {
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
  if (tileIds.length !== 14) {
    return { error: '14장을 선택해야 점수를 계산할 수 있습니다.' };
  }
  if (!isWinningHand(tileIds)) {
    return { error: '현재 선택한 14장은 완성패가 아닙니다.' };
  }

  const candidates = [];
  const globalYakuman = getGlobalYakuman(tileIds, options);
  if (globalYakuman.length > 0) {
    candidates.push({ yaku: withKnownYakuName(globalYakuman), fu: 0, yakuman: true });
  }

  if (isSevenPairs(tileIds)) {
    const yaku = [{ id: 'chiitoi', count: 1 }];
    if (options.isClosed && options.winType === 'tsumo') yaku.push({ id: 'menzenTsumo', count: 1 });
    if (options.isClosed && options.riichiStatus === 'riichi') yaku.push({ id: 'riichi', count: 1 });
    if (options.isClosed && options.riichiStatus === 'doubleRiichi') yaku.push({ id: 'doubleRiichi', count: 1 });
    if (tileIds.every((id) => isNumberTile(id) && !isTerminalOrHonor(id))) yaku.push({ id: 'tanyao', count: 1 });
    if (tileIds.every(isTerminalOrHonor)) yaku.push({ id: 'honroutou', count: 1 });
    yaku.push(...getFlushYaku(tileIds));
    candidates.push({ yaku: withKnownYakuName(yaku), fu: 25, rawFu: 25, fuDetails: [{ value: 25, label: '치또이츠 고정부' }] });
  }

  getStandardArrangements(tileIds).forEach((arrangement) => {
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
    const { han, result } = scoreCandidate(tileIds, candidate.yaku, candidate.fu, options);
    return { ...candidate, han, result: { ...result, rawFu: candidate.rawFu ?? candidate.fu, fuDetails: candidate.fuDetails || [] } };
  });

  const valid = scored.filter((item) => !item.result.error);
  if (valid.length === 0) {
    const doraOnlyHan = Number(options.doraCount || 0) + Number(options.uraDoraCount || 0) + Number(options.akaDoraCount || 0);
    return {
      error: doraOnlyHan > 0 ? '도라만으로는 화료할 수 없습니다. 기본 역이 필요합니다.' : '인식된 역이 없습니다. 리치 등 수동 역이 필요한 손패일 수 있습니다.',
      candidates: scored,
    };
  }

  valid.sort((a, b) => (b.result.total || 0) - (a.result.total || 0) || b.han - a.han || b.fu - a.fu);
  const best = valid[0];
  const doraItems = [
    options.doraCount > 0 ? { name: '도라', count: Number(options.doraCount) } : null,
    options.uraDoraCount > 0 ? { name: '우라도라', count: Number(options.uraDoraCount) } : null,
    options.akaDoraCount > 0 ? { name: '적도라', count: Number(options.akaDoraCount) } : null,
  ].filter(Boolean);

  return { ...best, doraItems, candidates: valid, winningTileId: options.winningTileId || null };
}
