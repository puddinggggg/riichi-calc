import { SCORE_QUIZ_PROBLEMS } from "../src/logic/scoreQuizProblems.js";
import { analyzeHandForScore } from "../src/logic/handAnalysis.js";
import { getWaitingTiles } from "../src/logic/tiles.js";

const allProblems = Object.values(SCORE_QUIZ_PROBLEMS).flat();
const DRAGON_ORDER = ["white", "green", "red"];
const WIND_ORDER = ["east", "south", "west", "north"];

function doraTile(indicator) {
  const suited = indicator.match(/^([1-9])([mps])$/);
  if (suited) {
    const nextNumber = Number(suited[1]) === 9 ? 1 : Number(suited[1]) + 1;
    return `${nextNumber}${suited[2]}`;
  }

  const windIndex = WIND_ORDER.indexOf(indicator);
  if (windIndex >= 0) return WIND_ORDER[(windIndex + 1) % WIND_ORDER.length];

  const dragonIndex = DRAGON_ORDER.indexOf(indicator);
  if (dragonIndex >= 0) return DRAGON_ORDER[(dragonIndex + 1) % DRAGON_ORDER.length];

  return null;
}

function countDora(handTiles, indicators) {
  return indicators.reduce((sum, indicator) => {
    const target = doraTile(indicator);
    return sum + handTiles.filter((tile) => tile === target).length;
  }, 0);
}

function answerPaymentsFromAnalysis(problem, analysis) {
  const points = analysis.result.payments.map((payment) => payment.points);
  if (problem.answer.type === "childTsumo") {
    return [points[1], points[0]];
  }
  return points;
}

function sameArray(left, right) {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

function normalizeYakuName(name) {
  return String(name).replace(/\s+/g, "");
}

function yakuFromAnalysis(analysis) {
  const yaku = analysis.yaku.map((item) => item.count > 1 ? `${item.name} ${item.count}` : item.name);
  yaku.push(...analysis.doraItems.map((item) => `${item.name} ${item.count}`));
  return yaku.map(normalizeYakuName).sort();
}

function yakuFromProblem(problem) {
  return problem.yaku.map(normalizeYakuName).sort();
}

const mismatches = [];

for (const problem of allProblems) {
  const handTiles = [...problem.concealedTiles, problem.winningTile];
  const waitingTiles = getWaitingTiles(problem.concealedTiles).map((tile) => tile.id);
  const analysis = analyzeHandForScore(handTiles, {
    roundWind: problem.roundWind,
    seatWind: problem.seatWind,
    playerType: problem.playerType,
    winType: problem.winType,
    honba: problem.honba,
    isClosed: problem.isClosed,
    riichiStatus: problem.riichiStatus,
    winningTileId: problem.winningTile,
    fixedMelds: problem.fixedMelds,
    doraCount: countDora(handTiles, problem.doraIndicators || []),
    uraDoraCount: countDora(handTiles, problem.uraDoraIndicators || []),
    akaDoraCount: 0,
  });

  const issues = [];

  if (!waitingTiles.includes(problem.winningTile)) {
    issues.push(`winningTile not in waits: ${problem.winningTile} / waits=${waitingTiles.join(",") || "-"}`);
  }

  if (analysis.error) {
    issues.push(`analysis error: ${analysis.error}`);
  } else {
    if (analysis.yaku.length === 0) {
      issues.push("no base yaku: dora alone cannot win");
    }

    const actualPayments = answerPaymentsFromAnalysis(problem, analysis);
    if (analysis.han !== problem.han) issues.push(`han expected=${problem.han} actual=${analysis.han}`);
    if (analysis.fu !== problem.fu) issues.push(`fu expected=${problem.fu} actual=${analysis.fu}`);
    if (!sameArray(actualPayments, problem.answer.payments)) {
      issues.push(`answer expected=${problem.answer.payments.join("/")} actual=${actualPayments.join("/")}`);
    }

    const expectedYaku = yakuFromProblem(problem);
    const actualYaku = yakuFromAnalysis(analysis);
    if (!sameArray(actualYaku, expectedYaku)) {
      issues.push(`yaku expected=${expectedYaku.join(",")} actual=${actualYaku.join(",")}`);
    }
  }

  if (issues.length > 0) {
    mismatches.push({ id: problem.id, issues });
  }
}

if (mismatches.length === 0) {
  console.log(`OK: ${allProblems.length} problems matched.`);
} else {
  console.log(`MISMATCH: ${mismatches.length} / ${allProblems.length} problems`);
  for (const mismatch of mismatches) {
    console.log(`\n${mismatch.id}`);
    mismatch.issues.forEach((issue) => console.log(`  - ${issue}`));
  }
  process.exitCode = 1;
}
