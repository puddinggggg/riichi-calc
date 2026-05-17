
import fs from 'fs';
import { analyzeHandForScore } from '../src/logic/handAnalysis.js';

const WIND_LABELS = { east: '동', south: '남', west: '서', north: '북' };
const SUITS = ['m','p','s'];
const WINDS = ['east','south','west','north'];
const DRAGONS = ['white','green','red'];
const HONORS = [...WINDS, ...DRAGONS];
const ALL = [
  ...SUITS.flatMap(s=>Array.from({length:9},(_,i)=>`${i+1}${s}`)),
  ...HONORS
];

function tile(n,s){ return `${n}${s}`; }
function isNum(id){ return /^[1-9][mps]$/.test(id); }
function suit(id){ return id.at(-1); }
function num(id){ return Number(id.slice(0,-1)); }
function isHonor(id){ return HONORS.includes(id); }
function randInt(n){ return Math.floor(Math.random()*n); }
function rand(arr){ return arr[randInt(arr.length)]; }
function shuffle(a){ const b=[...a]; for(let i=b.length-1;i>0;i--){ const j=randInt(i+1); [b[i],b[j]]=[b[j],b[i]]; } return b; }
function countMap(ids){ const m={}; ids.forEach(id=>m[id]=(m[id]||0)+1); return m; }
function countOK(ids){ return Object.values(countMap(ids)).every(c=>c<=4); }
function seq(n,s){ return [tile(n,s),tile(n+1,s),tile(n+2,s)]; }
function trip(id){ return [id,id,id]; }
function pair(id){ return [id,id]; }

function doraIndicatorFor(dora) {
  if (isNum(dora)) {
    const n=num(dora), s=suit(dora);
    return tile(n===1 ? 9 : n-1, s);
  }
  const wi=WINDS.indexOf(dora);
  if (wi>=0) return WINDS[(wi+3)%4];
  const di=DRAGONS.indexOf(dora);
  if (di>=0) return DRAGONS[(di+2)%3];
  return dora;
}
function randomIndicator(seed=0){ return ALL[(randInt(ALL.length)+seed)%ALL.length]; }

function makeRandomStandard() {
  for (let attempt=0; attempt<1000; attempt++) {
    const melds=[];
    for (let i=0;i<4;i++) {
      if (Math.random()<0.76) {
        const s=rand(SUITS);
        const n=1+randInt(7);
        melds.push(seq(n,s));
      } else {
        melds.push(trip(rand(ALL)));
      }
    }
    const pairTile=rand(ALL);
    const hand=[...melds.flat(), ...pair(pairTile)];
    if (hand.length===14 && countOK(hand)) return hand;
  }
  return null;
}

function makeSevenPairs() {
  for (let attempt=0; attempt<1000; attempt++) {
    const choices=shuffle(ALL).slice(0,7);
    const hand=choices.flatMap(id=>[id,id]);
    if (countOK(hand)) return hand;
  }
  return null;
}

function makeChinitsu() {
  const s=rand(SUITS);
  const templates=[
    [1,1,1,2,3,4,4,5,6,7,8,9,9,9],
    [1,2,3,2,3,4,3,4,5,6,7,8,9,9],
    [1,1,2,3,4,4,5,6,6,7,8,8,8,8],
    [2,3,4,3,4,5,4,5,6,6,7,8,8,8],
  ];
  return rand(templates).map(n=>tile(n,s));
}

function makeToitoi() {
  for (let attempt=0; attempt<1000; attempt++) {
    const ids=shuffle(ALL).slice(0,5);
    const hand=[...trip(ids[0]), ...trip(ids[1]), ...trip(ids[2]), ...trip(ids[3]), ...pair(ids[4])];
    if (countOK(hand)) return hand;
  }
  return null;
}

function makeHandByDifficulty(diff) {
  const r=Math.random();
  if (diff==='easy') return makeRandomStandard();
  if (diff==='medium') {
    if (r<0.25) return makeSevenPairs();
    if (r<0.45) return makeToitoi();
    return makeRandomStandard();
  }
  if (r<0.25) return makeChinitsu();
  if (r<0.45) return makeSevenPairs();
  if (r<0.65) return makeToitoi();
  return makeRandomStandard();
}

function chooseWinningSplit(hand) {
  // pick a random tile occurrence as winning tile
  const idx=randInt(hand.length);
  const winningTile=hand[idx];
  const concealed=hand.slice(0,idx).concat(hand.slice(idx+1));
  return { concealedTiles: shuffle(concealed), winningTile };
}

function buildOptions(hand, diff, index) {
  const winType = Math.random()<0.58 ? 'ron' : 'tsumo';
  const seatWind = rand(WINDS);
  const roundWind = Math.random()<0.5 ? 'east' : 'south';
  const playerType = seatWind === 'east' ? 'dealer' : 'child';
  const honba = diff==='easy' ? randInt(2) : diff==='medium' ? randInt(4) : randInt(6);
  const isClosed = true;
  const riichiStatus = Math.random()<0.7 ? (Math.random()<0.93 ? 'riichi' : 'doubleRiichi') : 'none';

  // choose dora counts and real indicators from hand tiles
  let doraCount = diff==='easy' ? randInt(2) : diff==='medium' ? randInt(3) : randInt(5);
  let uraDoraCount = riichiStatus !== 'none' ? (diff==='hard' ? randInt(3) : randInt(2)) : 0;
  let akaDoraCount = diff==='hard' ? randInt(2) : 0;

  return { roundWind, seatWind, playerType, winType, honba, isClosed, riichiStatus, doraCount, uraDoraCount, akaDoraCount, kanCount: 0 };
}

function indicatorsFromHand(hand, count, offset=0) {
  if (!count) return [];
  const candidates = shuffle(hand);
  const result=[];
  for (let i=0;i<count;i++) {
    const dora = candidates[(i+offset)%candidates.length] || rand(ALL);
    result.push(doraIndicatorFor(dora));
  }
  return result;
}

function answerFromResult(result, options) {
  if (options.winType === 'tsumo' && options.playerType === 'child') {
    const fromDealer = result.result.payments.find(p=>p.label.includes('친'))?.points;
    const fromChild = result.result.payments.find(p=>p.label.includes('자'))?.points;
    return { type:'childTsumo', payments:[fromChild, fromDealer] };
  }
  if (options.winType === 'tsumo' && options.playerType === 'dealer') {
    return { type:'single', payments:[result.result.payments[0].points] };
  }
  return { type:'single', payments:[result.result.total] };
}

function makeProblem(diff, idx, seen) {
  for (let attempt=0; attempt<5000; attempt++) {
    const hand = makeHandByDifficulty(diff);
    if (!hand || !countOK(hand)) continue;
    const { concealedTiles, winningTile } = chooseWinningSplit(hand);
    const tileIds = [...concealedTiles, winningTile];
    const options = { ...buildOptions(tileIds, diff, idx), winningTileId: winningTile };
    const result = analyzeHandForScore(tileIds, options);
    if (result.error || !result.result?.total || !result.yaku?.length) continue;

    // avoid yakuman and too extreme / weird results for quiz
    if (result.yakuman || result.han >= 13) continue;
    // sanity: no dora-only; yaku names available
    const yakuNames = [
      ...(result.yaku || []).map(y=> y.name || y.id),
      ...(options.doraCount ? [`도라 ${options.doraCount}`] : []),
      ...(options.uraDoraCount ? [`우라도라 ${options.uraDoraCount}`] : []),
      ...(options.akaDoraCount ? [`적도라 ${options.akaDoraCount}`] : []),
    ];

    const key = [tileIds.slice().sort().join(','), winningTile, options.winType, options.seatWind, options.roundWind, options.honba, options.riichiStatus, options.doraCount, options.uraDoraCount, options.akaDoraCount].join('|');
    if (seen.has(key)) continue;
    seen.add(key);

    return {
      id: `${diff}-${String(idx+1).padStart(3,'0')}`,
      difficulty: diff === 'easy' ? '초급' : diff === 'medium' ? '중급' : '고급',
      roundWind: options.roundWind,
      seatWind: options.seatWind,
      playerType: options.playerType,
      winType: options.winType,
      honba: options.honba,
      isClosed: options.isClosed,
      riichiStatus: options.riichiStatus,
      concealedTiles,
      winningTile,
      fixedMelds: [],
      doraIndicators: indicatorsFromHand(tileIds, options.doraCount, 0),
      uraDoraIndicators: options.riichiStatus !== 'none' ? indicatorsFromHand(tileIds, options.uraDoraCount, 2) : [],
      kanDoraIndicators: [],
      han: result.han,
      fu: result.fu,
      yaku: yakuNames,
      fuDetails: [],
      answer: answerFromResult(result, options),
    };
  }
  throw new Error(`failed ${diff} ${idx}`);
}

function generate(diff, count) {
  const arr=[]; const seen=new Set();
  while (arr.length<count) {
    arr.push(makeProblem(diff, arr.length, seen));
  }
  return arr;
}

const data = { easy: generate('easy',100), medium: generate('medium',60), hard: generate('hard',40) };

const content = `const WIND_LABELS = {
  east: '동',
  south: '남',
  west: '서',
  north: '북',
};

export const SCORE_QUIZ_PROBLEMS = ${JSON.stringify(data, null, 2)};

export function formatWind(wind) {
  return WIND_LABELS[wind] || wind;
}
`;

fs.writeFileSync('src/logic/scoreQuizProblems.js', content, 'utf8');
console.log('generated', data.easy.length, data.medium.length, data.hard.length);
