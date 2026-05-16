const WIND_LABELS = {
  east: '동',
  south: '남',
  west: '서',
  north: '북',
};

const DIFFICULTY_LABELS = {
  easy: '초급',
  medium: '중급',
  hard: '고급',
};

const SUITS = ['m', 'p', 's'];
const WINDS = ['east', 'south', 'west', 'north'];
const DRAGONS = ['white', 'green', 'red'];
const HONORS = [...WINDS, ...DRAGONS];
const ROUND_SEATS = [
  ['east', 'east'],
  ['east', 'south'],
  ['east', 'west'],
  ['east', 'north'],
  ['south', 'east'],
  ['south', 'south'],
  ['south', 'west'],
  ['south', 'north'],
];
const WIN_TYPES = ['ron', 'ron', 'tsumo'];

const SCORE_PROFILES = {
  h1f30: {
    ronDealer: [1500],
    ronChild: [1000],
    tsumoDealer: [500],
    tsumoChild: [300, 500],
  },
  h2f30: {
    ronDealer: [2900],
    ronChild: [2000],
    tsumoDealer: [1000],
    tsumoChild: [500, 1000],
  },
  h3f30_tsumo4f20: {
    ronDealer: [5800],
    ronChild: [3900],
    tsumoDealer: [2600],
    tsumoChild: [1300, 2600],
  },
  h3f40: {
    ronDealer: [7700],
    ronChild: [5200],
    tsumoDealer: [2600],
    tsumoChild: [1300, 2600],
  },
  h4f30_tsumo4f40: {
    ronDealer: [11600],
    ronChild: [7700],
    tsumoDealer: [4000],
    tsumoChild: [2000, 4000],
  },
  mangan: {
    ronDealer: [12000],
    ronChild: [8000],
    tsumoDealer: [4000],
    tsumoChild: [2000, 4000],
  },
  haneman: {
    ronDealer: [18000],
    ronChild: [12000],
    tsumoDealer: [6000],
    tsumoChild: [3000, 6000],
  },
  baiman: {
    ronDealer: [24000],
    ronChild: [16000],
    tsumoDealer: [8000],
    tsumoChild: [4000, 8000],
  },
  sanbaiman: {
    ronDealer: [36000],
    ronChild: [24000],
    tsumoDealer: [12000],
    tsumoChild: [6000, 12000],
  },
};

function tile(num, suit) {
  return `${num}${suit}`;
}

function seq(start, suit) {
  return [tile(start, suit), tile(start + 1, suit), tile(start + 2, suit)];
}

function pair(id) {
  return [id, id];
}

function triplet(id) {
  return [id, id, id];
}

function suitAt(seed, offset = 0) {
  return SUITS[(seed + offset) % SUITS.length];
}

function numAt(seed, min, span) {
  return min + (seed % span);
}

function nextDoraIndicatorFor(doraTile) {
  const suit = doraTile.slice(-1);
  const number = Number(doraTile.slice(0, -1));
  if (SUITS.includes(suit) && Number.isFinite(number)) {
    return tile(number === 1 ? 9 : number - 1, suit);
  }

  const windIndex = WINDS.indexOf(doraTile);
  if (windIndex >= 0) return WINDS[(windIndex + WINDS.length - 1) % WINDS.length];

  const dragonIndex = DRAGONS.indexOf(doraTile);
  if (dragonIndex >= 0) return DRAGONS[(dragonIndex + DRAGONS.length - 1) % DRAGONS.length];

  return doraTile;
}

function noHitIndicator(seed) {
  return HONORS[seed % HONORS.length];
}

function meld(type, tileId, tiles) {
  return {
    type,
    tileId,
    tiles,
    isOpen: ['chi', 'pon', 'kan'].includes(type),
    isKan: ['kan', 'ankan'].includes(type),
  };
}

function scoreKey(playerType, winType) {
  if (winType === 'ron') return playerType === 'dealer' ? 'ronDealer' : 'ronChild';
  return playerType === 'dealer' ? 'tsumoDealer' : 'tsumoChild';
}

function applyHonba(payments, winType, honba) {
  const bonus = winType === 'ron' ? honba * 300 : honba * 100;
  return payments.map((point) => point + bonus);
}

function closedSequenceHand(seed, { tanyao = false, dora = false, uraDora = false } = {}) {
  const s0 = suitAt(seed, 0);
  const s1 = suitAt(seed, 1);
  const s2 = suitAt(seed, 2);
  const start = tanyao ? numAt(seed, 2, 5) : numAt(seed, 1, 5);
  const win = tile(start + 2, s0);
  const second = tanyao ? numAt(seed * 2 + 1, 2, 5) : numAt(seed * 2 + 1, 1, 5);
  const third = tanyao ? numAt(seed * 3 + 2, 2, 5) : numAt(seed * 3 + 2, 1, 5);
  const fourth = tanyao ? numAt(seed * 5 + 3, 2, 5) : numAt(seed * 5 + 3, 1, 5);
  const pairTile = tanyao ? tile(numAt(seed * 7 + 1, 2, 6), s2) : HONORS[(seed + 2) % HONORS.length];

  return {
    concealedTiles: [
      tile(start, s0),
      tile(start + 1, s0),
      ...seq(second, s1),
      ...seq(third, s2),
      ...seq(fourth, s0),
      ...pair(pairTile),
    ],
    winningTile: win,
    fixedMelds: [],
    doraIndicators: dora ? [nextDoraIndicatorFor(win)] : [],
    uraDoraIndicators: uraDora ? [noHitIndicator(seed + 4)] : [],
    kanDoraIndicators: [],
  };
}

function openYakuhaiHand(seed) {
  const s0 = suitAt(seed, 0);
  const s1 = suitAt(seed, 1);
  const s2 = suitAt(seed, 2);
  const start = numAt(seed, 1, 5);
  const win = tile(start + 2, s0);
  const dragon = DRAGONS[seed % DRAGONS.length];
  return {
    concealedTiles: [
      tile(start, s0),
      tile(start + 1, s0),
      ...seq(numAt(seed + 1, 1, 5), s1),
      ...seq(numAt(seed + 2, 1, 5), s2),
      ...pair(tile(numAt(seed + 3, 2, 7), s1)),
    ],
    winningTile: win,
    fixedMelds: [meld('pon', dragon, triplet(dragon))],
    doraIndicators: [],
    uraDoraIndicators: [],
    kanDoraIndicators: [],
  };
}

function openTanyaoHand(seed) {
  const s0 = suitAt(seed, 0);
  const s1 = suitAt(seed, 1);
  const s2 = suitAt(seed, 2);
  const start = numAt(seed, 2, 5);
  const win = tile(start + 2, s0);
  return {
    concealedTiles: [
      tile(start, s0),
      tile(start + 1, s0),
      ...seq(numAt(seed + 2, 2, 5), s1),
      ...seq(numAt(seed + 4, 2, 5), s2),
      ...pair(tile(numAt(seed + 6, 2, 6), s2)),
    ],
    winningTile: win,
    fixedMelds: [meld('chi', tile(2, s1), seq(2 + (seed % 3), s1))],
    doraIndicators: [nextDoraIndicatorFor(win)],
    uraDoraIndicators: [],
    kanDoraIndicators: [],
  };
}

function chitoitsuHand(seed) {
  const s0 = suitAt(seed, 0);
  const s1 = suitAt(seed, 1);
  const s2 = suitAt(seed, 2);
  const win = tile(numAt(seed + 4, 2, 7), s0);
  const pairs = [
    tile(numAt(seed, 1, 9), s0),
    tile(numAt(seed + 2, 1, 9), s1),
    tile(numAt(seed + 4, 1, 9), s2),
    tile(numAt(seed + 6, 1, 9), s0),
    HONORS[seed % HONORS.length],
    HONORS[(seed + 2) % HONORS.length],
  ].filter((id) => id !== win);

  while (pairs.length < 6) {
    const candidate = HONORS[(seed + pairs.length + 3) % HONORS.length];
    if (!pairs.includes(candidate) && candidate !== win) pairs.push(candidate);
  }

  return {
    concealedTiles: [...pairs.slice(0, 6).flatMap(pair), win],
    winningTile: win,
    fixedMelds: [],
    doraIndicators: [nextDoraIndicatorFor(pairs[0])],
    uraDoraIndicators: [noHitIndicator(seed + 3)],
    kanDoraIndicators: [],
  };
}

function toitoiHand(seed) {
  const s0 = suitAt(seed, 0);
  const s1 = suitAt(seed, 1);
  const s2 = suitAt(seed, 2);
  const win = tile(numAt(seed + 4, 2, 7), s0);
  const dragon = DRAGONS[seed % DRAGONS.length];
  return {
    concealedTiles: [
      win,
      win,
      ...triplet(tile(numAt(seed + 1, 2, 7), s1)),
      ...triplet(tile(numAt(seed + 3, 2, 7), s2)),
      ...pair(tile(numAt(seed + 5, 2, 7), s1)),
    ],
    winningTile: win,
    fixedMelds: [meld('pon', dragon, triplet(dragon))],
    doraIndicators: [],
    uraDoraIndicators: [],
    kanDoraIndicators: [],
  };
}

function honitsuHand(seed) {
  const suit = suitAt(seed, 0);
  const win = tile(numAt(seed + 6, 3, 7), suit);
  const dragon = DRAGONS[(seed + 1) % DRAGONS.length];
  return {
    concealedTiles: [
      ...seq(1 + (seed % 2), suit),
      ...seq(4 + (seed % 2), suit),
      ...triplet(tile(numAt(seed + 3, 2, 7), suit)),
      win,
    ],
    winningTile: win,
    fixedMelds: [meld('pon', dragon, triplet(dragon))],
    doraIndicators: [nextDoraIndicatorFor(win)],
    uraDoraIndicators: [],
    kanDoraIndicators: [],
  };
}

function ankanHand(seed) {
  const s0 = suitAt(seed, 0);
  const s1 = suitAt(seed, 1);
  const s2 = suitAt(seed, 2);
  const kanTile = tile(numAt(seed + 1, 2, 6), s0);
  const start = numAt(seed + 2, 2, 5);
  const win = tile(start + 2, s1);
  return {
    concealedTiles: [
      tile(start, s1),
      tile(start + 1, s1),
      ...seq(numAt(seed + 3, 2, 5), s2),
      ...seq(numAt(seed + 5, 2, 5), s1),
      ...pair(tile(numAt(seed + 7, 2, 6), s2)),
    ],
    winningTile: win,
    fixedMelds: [meld('ankan', kanTile, [kanTile, kanTile, kanTile, kanTile])],
    doraIndicators: [nextDoraIndicatorFor(win)],
    uraDoraIndicators: [noHitIndicator(seed + 1)],
    kanDoraIndicators: [nextDoraIndicatorFor(kanTile)],
  };
}

function chinitsuHand(seed) {
  const suit = suitAt(seed, 0);
  const win = tile(9 - (seed % 3), suit);
  const doraTile = tile(1 + (seed % 3), suit);
  return {
    concealedTiles: [
      ...triplet(doraTile),
      ...seq(2, suit),
      ...seq(4, suit),
      ...seq(6, suit),
      win,
    ].slice(0, 13),
    winningTile: win,
    fixedMelds: [],
    doraIndicators: [nextDoraIndicatorFor(doraTile)],
    uraDoraIndicators: [noHitIndicator(seed + 5)],
    kanDoraIndicators: [],
  };
}

const BLUEPRINTS = {
  easy: [
    {
      key: 'riichi-pinfu-dora',
      makeHand: (seed) => closedSequenceHand(seed, { dora: true, uraDora: true }),
      riichiStatus: 'riichi',
      han: { ron: 3, tsumo: 4 },
      fu: { ron: 30, tsumo: 20 },
      yaku: ['리치', '핑후', '도라 1'],
      fuDetails: ['멘젠론 10부', '핑후쯔모 20부'],
      score: SCORE_PROFILES.h3f30_tsumo4f20,
    },
    {
      key: 'open-yakuhai',
      makeHand: openYakuhaiHand,
      riichiStatus: 'none',
      han: { ron: 1, tsumo: 1 },
      fu: { ron: 30, tsumo: 30 },
      yaku: ['역패'],
      fuDetails: ['역패 퐁'],
      score: SCORE_PROFILES.h1f30,
    },
    {
      key: 'riichi-tanyao-pinfu',
      makeHand: (seed) => closedSequenceHand(seed, { tanyao: true, uraDora: true }),
      riichiStatus: 'riichi',
      han: { ron: 3, tsumo: 4 },
      fu: { ron: 30, tsumo: 20 },
      yaku: ['리치', '탕야오', '핑후'],
      fuDetails: ['멘젠론 10부', '핑후쯔모 20부'],
      score: SCORE_PROFILES.h3f30_tsumo4f20,
    },
    {
      key: 'open-tanyao-dora',
      makeHand: openTanyaoHand,
      riichiStatus: 'none',
      han: { ron: 2, tsumo: 2 },
      fu: { ron: 30, tsumo: 30 },
      yaku: ['탕야오', '도라 1'],
      fuDetails: ['부로 30부'],
      score: SCORE_PROFILES.h2f30,
    },
  ],
  medium: [
    {
      key: 'chitoitsu-dora',
      makeHand: chitoitsuHand,
      riichiStatus: 'riichi',
      han: { ron: 5, tsumo: 6 },
      fu: { ron: 25, tsumo: 25 },
      yaku: ['리치', '치또이츠', '도라 2'],
      fuDetails: ['치또이츠 고정부 25부'],
      score: SCORE_PROFILES.mangan,
    },
    {
      key: 'toitoi-yakuhai',
      makeHand: toitoiHand,
      riichiStatus: 'none',
      han: { ron: 3, tsumo: 3 },
      fu: { ron: 40, tsumo: 40 },
      yaku: ['또이또이', '역패'],
      fuDetails: ['커쯔 부수'],
      score: SCORE_PROFILES.h3f40,
    },
    {
      key: 'honitsu-yakuhai-dora',
      makeHand: honitsuHand,
      riichiStatus: 'none',
      han: { ron: 4, tsumo: 4 },
      fu: { ron: 30, tsumo: 40 },
      yaku: ['혼일색', '역패', '도라 1'],
      fuDetails: ['역패 퐁', '쯔모 40부'],
      score: SCORE_PROFILES.h4f30_tsumo4f40,
    },
  ],
  hard: [
    {
      key: 'ankan-tanyao-dora',
      makeHand: ankanHand,
      riichiStatus: 'riichi',
      han: { ron: 5, tsumo: 6 },
      fu: { ron: 50, tsumo: 40 },
      yaku: ['리치', '탕야오', '도라 1', '깡도라 1', '우라도라 1'],
      fuDetails: ['중장패 암깡 16부'],
      score: SCORE_PROFILES.mangan,
    },
    {
      key: 'chinitsu-dora',
      makeHand: chinitsuHand,
      riichiStatus: 'riichi',
      han: { ron: 10, tsumo: 11 },
      fu: { ron: 30, tsumo: 30 },
      yaku: ['리치', '청일색', '도라 3'],
      fuDetails: ['멘젠론 10부'],
      score: SCORE_PROFILES.sanbaiman,
    },
    {
      key: 'riichi-pinfu-baiman',
      makeHand: (seed) => closedSequenceHand(seed, { tanyao: true, dora: true, uraDora: true }),
      riichiStatus: 'riichi',
      han: { ron: 8, tsumo: 9 },
      fu: { ron: 30, tsumo: 20 },
      yaku: ['리치', '탕야오', '핑후', '도라 5'],
      fuDetails: ['멘젠론 10부', '핑후쯔모 20부'],
      score: SCORE_PROFILES.baiman,
    },
  ],
};

function blueprintPool(difficulty) {
  if (difficulty === 'easy') return BLUEPRINTS.easy;
  if (difficulty === 'medium') return [...BLUEPRINTS.easy, ...BLUEPRINTS.medium];
  return [...BLUEPRINTS.easy, ...BLUEPRINTS.medium, ...BLUEPRINTS.hard];
}

function buildProblem(difficulty, index, seed) {
  const blueprints = blueprintPool(difficulty);
  const blueprint = blueprints[seed % blueprints.length];
  const hand = blueprint.makeHand(seed);
  const [roundWind, seatWind] = ROUND_SEATS[(seed + index) % ROUND_SEATS.length];
  const playerType = seatWind === 'east' ? 'dealer' : 'child';
  const winType = WIN_TYPES[(seed + index) % WIN_TYPES.length];
  const honba = difficulty === 'easy' ? index % 2 : index % (difficulty === 'medium' ? 4 : 6);
  const isClosed = !hand.fixedMelds.some((item) => item.isOpen);
  const payments = applyHonba(blueprint.score[scoreKey(playerType, winType)], winType, honba);

  return {
    id: `${difficulty}-${String(index + 1).padStart(3, '0')}`,
    difficulty: DIFFICULTY_LABELS[difficulty],
    roundWind,
    seatWind,
    playerType,
    winType,
    honba,
    isClosed,
    riichiStatus: isClosed ? blueprint.riichiStatus : 'none',
    concealedTiles: hand.concealedTiles,
    winningTile: hand.winningTile,
    fixedMelds: hand.fixedMelds,
    doraIndicators: hand.doraIndicators,
    uraDoraIndicators: isClosed && blueprint.riichiStatus === 'riichi' ? hand.uraDoraIndicators : [],
    kanDoraIndicators: hand.fixedMelds.some((item) => item.isKan) ? hand.kanDoraIndicators : [],
    han: blueprint.han[winType],
    fu: blueprint.fu[winType],
    yaku: blueprint.yaku,
    fuDetails: blueprint.fuDetails,
    answer: {
      type: winType === 'tsumo' && playerType === 'child' ? 'childTsumo' : 'single',
      payments,
    },
  };
}

function makeProblems(difficulty, count) {
  const problems = [];
  const seen = new Set();
  let seed = difficulty === 'medium' ? 1000 : difficulty === 'hard' ? 2000 : 0;

  while (problems.length < count && seed < 20000) {
    const candidate = buildProblem(difficulty, problems.length, seed);
    const handKey = [
      ...candidate.concealedTiles,
      candidate.winningTile,
      ...candidate.fixedMelds.flatMap((item) => item.tiles),
    ].join('|');

    if (!seen.has(handKey)) {
      seen.add(handKey);
      problems.push(candidate);
    }

    seed += 1;
  }

  return problems;
}

export const SCORE_QUIZ_PROBLEMS = {
  easy: makeProblems('easy', 100),
  medium: makeProblems('medium', 60),
  hard: makeProblems('hard', 40),
};

export function formatWind(wind) {
  return WIND_LABELS[wind] || wind;
}
