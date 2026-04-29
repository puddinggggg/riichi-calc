export const TILE_GROUPS = [
  {
    key: 'man',
    label: '만수',
    tiles: [
      { id: '1m', label: '1만', unicode: '🀇', order: 11, terminal: true },
      { id: '2m', label: '2만', unicode: '🀈', order: 12 },
      { id: '3m', label: '3만', unicode: '🀉', order: 13 },
      { id: '4m', label: '4만', unicode: '🀊', order: 14 },
      { id: '5m', label: '5만', unicode: '🀋', order: 15 },
      { id: '6m', label: '6만', unicode: '🀌', order: 16 },
      { id: '7m', label: '7만', unicode: '🀍', order: 17 },
      { id: '8m', label: '8만', unicode: '🀎', order: 18 },
      { id: '9m', label: '9만', unicode: '🀏', order: 19, terminal: true },
    ],
  },
  {
    key: 'pin',
    label: '통수',
    tiles: [
      { id: '1p', label: '1통', unicode: '🀙', order: 21, terminal: true },
      { id: '2p', label: '2통', unicode: '🀚', order: 22 },
      { id: '3p', label: '3통', unicode: '🀛', order: 23 },
      { id: '4p', label: '4통', unicode: '🀜', order: 24 },
      { id: '5p', label: '5통', unicode: '🀝', order: 25 },
      { id: '6p', label: '6통', unicode: '🀞', order: 26 },
      { id: '7p', label: '7통', unicode: '🀟', order: 27 },
      { id: '8p', label: '8통', unicode: '🀠', order: 28 },
      { id: '9p', label: '9통', unicode: '🀡', order: 29, terminal: true },
    ],
  },
  {
    key: 'sou',
    label: '삭수',
    tiles: [
      { id: '1s', label: '1삭', unicode: '🀐', order: 31, terminal: true },
      { id: '2s', label: '2삭', unicode: '🀑', order: 32 },
      { id: '3s', label: '3삭', unicode: '🀒', order: 33 },
      { id: '4s', label: '4삭', unicode: '🀓', order: 34 },
      { id: '5s', label: '5삭', unicode: '🀔', order: 35 },
      { id: '6s', label: '6삭', unicode: '🀕', order: 36 },
      { id: '7s', label: '7삭', unicode: '🀖', order: 37 },
      { id: '8s', label: '8삭', unicode: '🀗', order: 38 },
      { id: '9s', label: '9삭', unicode: '🀘', order: 39, terminal: true },
    ],
  },
  {
    key: 'honor',
    label: '자패',
    tiles: [
      { id: 'east', label: '동', unicode: '🀀', order: 41, honor: true },
      { id: 'south', label: '남', unicode: '🀁', order: 42, honor: true },
      { id: 'west', label: '서', unicode: '🀂', order: 43, honor: true },
      { id: 'north', label: '북', unicode: '🀃', order: 44, honor: true },
      { id: 'white', label: '백', unicode: '🀆', order: 45, honor: true },
      { id: 'green', label: '발', unicode: '🀅', order: 46, honor: true },
      { id: 'red', label: '중', unicode: '🀄', order: 47, honor: true },
    ],
  },
];

export const TILE_LIST = TILE_GROUPS.flatMap((group) => group.tiles);
export const TILE_MAP = new Map(TILE_LIST.map((tile) => [tile.id, tile]));
export const KOKUSHI_IDS = TILE_LIST.filter((tile) => tile.terminal || tile.honor).map((tile) => tile.id);

export function sortTiles(tileIds) {
  return [...tileIds].sort((a, b) => (TILE_MAP.get(a)?.order || 0) - (TILE_MAP.get(b)?.order || 0));
}

export function countTiles(tileIds) {
  return tileIds.reduce((map, id) => {
    map[id] = (map[id] || 0) + 1;
    return map;
  }, {});
}

function isSevenPairs(tileIds) {
  if (tileIds.length !== 14) return false;
  const counts = Object.values(countTiles(tileIds));
  return counts.length === 7 && counts.every((count) => count === 2);
}

function isKokushi(tileIds) {
  if (tileIds.length !== 14) return false;
  const counts = countTiles(tileIds);
  return KOKUSHI_IDS.every((id) => counts[id] >= 1) && KOKUSHI_IDS.some((id) => counts[id] >= 2);
}

function canMakeMelds(counts) {
  const first = TILE_LIST.find((tile) => counts[tile.id] > 0);
  if (!first) return true;

  const id = first.id;
  if (counts[id] >= 3) {
    counts[id] -= 3;
    if (canMakeMelds(counts)) {
      counts[id] += 3;
      return true;
    }
    counts[id] += 3;
  }

  const suit = id.at(-1);
  const number = Number(id.slice(0, -1));
  if (['m', 'p', 's'].includes(suit) && number <= 7) {
    const a = `${number + 1}${suit}`;
    const b = `${number + 2}${suit}`;
    if ((counts[a] || 0) > 0 && (counts[b] || 0) > 0) {
      counts[id] -= 1;
      counts[a] -= 1;
      counts[b] -= 1;
      if (canMakeMelds(counts)) {
        counts[id] += 1;
        counts[a] += 1;
        counts[b] += 1;
        return true;
      }
      counts[id] += 1;
      counts[a] += 1;
      counts[b] += 1;
    }
  }

  return false;
}

function isStandardWin(tileIds) {
  if (tileIds.length !== 14) return false;
  const baseCounts = countTiles(tileIds);
  return TILE_LIST.some((tile) => {
    if ((baseCounts[tile.id] || 0) < 2) return false;
    const counts = { ...baseCounts };
    counts[tile.id] -= 2;
    return canMakeMelds(counts);
  });
}

export function isWinningHand(tileIds) {
  if (tileIds.length !== 14) return false;
  return isStandardWin(tileIds) || isSevenPairs(tileIds) || isKokushi(tileIds);
}

function canMakeMeldsExact(counts, neededMelds) {
  if (neededMelds < 0) return false;
  const first = TILE_LIST.find((tile) => counts[tile.id] > 0);
  if (!first) return neededMelds === 0;
  if (neededMelds === 0) return false;

  const id = first.id;
  if (counts[id] >= 3) {
    counts[id] -= 3;
    if (canMakeMeldsExact(counts, neededMelds - 1)) {
      counts[id] += 3;
      return true;
    }
    counts[id] += 3;
  }

  const suit = id.at(-1);
  const number = Number(id.slice(0, -1));
  if (['m', 'p', 's'].includes(suit) && number <= 7) {
    const a = `${number + 1}${suit}`;
    const b = `${number + 2}${suit}`;
    if ((counts[a] || 0) > 0 && (counts[b] || 0) > 0) {
      counts[id] -= 1;
      counts[a] -= 1;
      counts[b] -= 1;
      if (canMakeMeldsExact(counts, neededMelds - 1)) {
        counts[id] += 1;
        counts[a] += 1;
        counts[b] += 1;
        return true;
      }
      counts[id] += 1;
      counts[a] += 1;
      counts[b] += 1;
    }
  }

  return false;
}

function isStandardWinWithFixedMelds(concealedTileIds, fixedMeldCount) {
  const neededMelds = 4 - fixedMeldCount;
  if (neededMelds < 0) return false;
  if (concealedTileIds.length !== neededMelds * 3 + 2) return false;

  const baseCounts = countTiles(concealedTileIds);
  return TILE_LIST.some((tile) => {
    if ((baseCounts[tile.id] || 0) < 2) return false;
    const counts = { ...baseCounts };
    counts[tile.id] -= 2;
    return canMakeMeldsExact(counts, neededMelds);
  });
}

export function getWaitingTilesWithFixedMelds(concealedTileIds, fixedMeldCount = 0) {
  const neededMelds = 4 - fixedMeldCount;
  if (neededMelds < 0) return [];
  if (concealedTileIds.length !== neededMelds * 3 + 1) return [];

  const counts = countTiles(concealedTileIds);
  return TILE_LIST.filter((tile) => {
    if ((counts[tile.id] || 0) >= 4) return false;
    return isStandardWinWithFixedMelds([...concealedTileIds, tile.id], fixedMeldCount);
  });
}

export function getWaitingTiles(tileIds) {
  if (tileIds.length !== 13) return [];
  const counts = countTiles(tileIds);
  return TILE_LIST.filter((tile) => (counts[tile.id] || 0) < 4 && isWinningHand([...tileIds, tile.id]));
}
