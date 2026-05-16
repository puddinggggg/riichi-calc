import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Section, SectionTitle } from '../components/Section';
import { SCORE_QUIZ_PROBLEMS, formatWind } from '../logic/scoreQuizProblems';
import { TILE_MAP, sortTiles } from '../logic/tiles';

const QuizShell = styled.div`
  display: grid;
  gap: 16px;
`;

const StartCard = styled(Section)`
  max-width: 760px;
  margin: 0 auto;
`;

const StartTitle = styled.h2`
  margin: 0 0 10px;
  font-size: clamp(24px, 4vw, 36px);
`;

const StartDesc = styled.p`
  margin: 0 0 18px;
  color: #6e6253;
  line-height: 1.65;
`;

const PrimaryButton = styled.button`
  border: 0;
  border-radius: 999px;
  background: #25211c;
  color: #fff;
  padding: 13px 20px;
  font-weight: 900;
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

const SubButton = styled.button`
  border: 1px solid rgba(50,35,20,0.18);
  border-radius: 999px;
  background: #fff;
  color: #25211c;
  padding: 12px 18px;
  font-weight: 900;
  cursor: pointer;
`;

const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoPill = styled.div`
  border-radius: 999px;
  background: ${({ $warn }) => ($warn ? '#fff0e5' : '#fff')};
  color: ${({ $warn }) => ($warn ? '#b84312' : '#3a3026')};
  border: 1px solid rgba(50,35,20,0.14);
  padding: 8px 12px;
  font-weight: 900;
`;

const ProblemArea = styled(Section)`
  display: grid;
  gap: 18px;
`;

const ConditionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
`;

const ConditionItem = styled.div`
  padding: 12px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid rgba(50,35,20,0.12);
`;

const ConditionLabel = styled.div`
  color: #746b60;
  font-size: 13px;
  margin-bottom: 4px;
`;

const ConditionValue = styled.div`
  color: #2f281f;
  font-weight: 900;
  line-height: 1.45;
`;

const TagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 10px;
  border-radius: 999px;
  background: #f0e4d2;
  color: #3a3026;
  font-weight: 800;
  font-size: 13px;
`;

const HandBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  align-items: flex-end;
  padding: 14px;
  border-radius: 14px;
  background: #fffaf2;
  border: 1px dashed rgba(50,35,20,0.22);
`;

const TileGroup = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-end;
  position: relative;
  padding-top: 18px;
`;

const MeldLabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: #a35b18;
  font-size: 12px;
  font-weight: 900;
`;

const TileBox = styled.div`
  width: 42px;
  aspect-ratio: 0.74 / 1;
  display: grid;
  place-items: center;
  position: relative;
  outline: ${({ $winning }) => ($winning ? '3px solid #d85b1f' : 'none')};
  outline-offset: 2px;

  @media (max-width: 640px) {
    width: 32px;
  }
`;

const TileImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`;

const WinBadge = styled.span`
  position: absolute;
  right: -8px;
  bottom: -8px;
  border-radius: 999px;
  background: #d85b1f;
  color: #fff;
  font-size: 11px;
  font-weight: 900;
  padding: 3px 6px;
`;

const IndicatorBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const IndicatorGroup = styled.div`
  display: grid;
  gap: 8px;
  padding: 12px;
  border-radius: 14px;
  background: #fff;
  border: 1px solid rgba(50,35,20,0.12);
`;

const IndicatorLabel = styled.div`
  color: #746b60;
  font-size: 13px;
  font-weight: 900;
`;

const IndicatorTiles = styled.div`
  display: flex;
  gap: 5px;
`;

const AnswerRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
  flex-wrap: wrap;
`;

const InputGroup = styled.label`
  display: grid;
  gap: 6px;
  color: #5f5549;
  font-weight: 800;
`;

const ScoreInputWrap = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(50,35,20,0.18);
  border-radius: 14px;
  background: #fff;
  overflow: hidden;
`;

const ScoreInput = styled.input`
  width: 86px;
  border: 0;
  padding: 12px 10px;
  font-size: 22px;
  font-weight: 900;
  text-align: right;
  outline: none;
`;

const FixedZeros = styled.span`
  padding: 0 12px 0 0;
  font-size: 22px;
  font-weight: 900;
  color: #8a7f72;
`;

const ResultNotice = styled.div`
  border-radius: 18px;
  background: ${({ $correct }) => ($correct ? '#e3f4ea' : '#fff6d8')};
  color: ${({ $correct }) => ($correct ? '#145a3b' : '#765700')};
  padding: 14px;
  line-height: 1.55;
  font-weight: 800;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const ScoreCard = styled(Section)`
  text-align: center;
`;

const BigScore = styled.div`
  font-size: clamp(52px, 12vw, 96px);
  font-weight: 950;
`;

const AnswerText = styled.div`
  color: #665d50;
  margin-top: 8px;
  line-height: 1.5;
`;

const ReviewWrap = styled.div`
  display: grid;
  gap: 14px;
  margin-top: 18px;
  text-align: left;
`;

const ReviewCard = styled.div`
  display: grid;
  gap: 10px;
  padding: 14px;
  border-radius: 18px;
  background: #fff;
  border: 1px solid rgba(50,35,20,0.14);
`;

const ReviewTitle = styled.div`
  font-weight: 900;
  color: #3a3026;
`;

const ReviewText = styled.div`
  color: #665d50;
  line-height: 1.55;
  font-size: 14px;
`;

function shuffle(array) {
  return [...array]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function pickProblems() {
  return shuffle([
    ...shuffle(SCORE_QUIZ_PROBLEMS.easy).slice(0, 5),
    ...shuffle(SCORE_QUIZ_PROBLEMS.medium).slice(0, 3),
    ...shuffle(SCORE_QUIZ_PROBLEMS.hard).slice(0, 2),
  ]);
}

function pointToInput(point) {
  return String(Math.floor(point / 100));
}

function formatAnswer(problem) {
  if (problem.answer.type === 'childTsumo') {
    return `자에게 ${problem.answer.payments[0].toLocaleString()}, 친에게 ${problem.answer.payments[1].toLocaleString()}`;
  }
  if (problem.winType === 'tsumo' && problem.playerType === 'dealer') {
    return `각자 ${problem.answer.payments[0].toLocaleString()}`;
  }
  return `${problem.answer.payments[0].toLocaleString()}`;
}

function sanitizeInput(value) {
  return value.replace(/\D/g, '').slice(0, 4);
}

function describeWin(problem) {
  if (problem.winType === 'ron') return '론';
  return problem.playerType === 'dealer' ? '친 쯔모' : '자의 쯔모';
}

function meldLabel(type) {
  if (type === 'chi') return '치';
  if (type === 'pon') return '퐁';
  if (type === 'kan') return '깡';
  if (type === 'ankan') return '암깡';
  return '';
}

function Tile({ id, winning = false, back = false }) {
  const tile = TILE_MAP.get(id);
  return (
    <TileBox $winning={winning}>
      <TileImage src={back ? '/images/back.png' : `/images/tiles/${id}.png`} alt={back ? '뒷면' : tile?.label || id} />
      {winning && <WinBadge>화료</WinBadge>}
    </TileBox>
  );
}

function ProblemHand({ problem }) {
  const concealedTiles = sortTiles(problem.concealedTiles);
  return (
    <HandBoard>
      <TileGroup>
        {concealedTiles.map((id, tileIndex) => (
          <Tile key={`${id}-${tileIndex}`} id={id} />
        ))}
        <Tile id={problem.winningTile} winning />
      </TileGroup>
      {problem.fixedMelds.map((meld, meldIndex) => (
        <TileGroup key={`${meld.type}-${meld.tileId}-${meldIndex}`}>
          <MeldLabel>{meldLabel(meld.type)}</MeldLabel>
          {meld.tiles.map((id, tileIndex) => (
            <Tile
              key={`${id}-${tileIndex}`}
              id={id}
              back={meld.type === 'ankan' && (tileIndex === 1 || tileIndex === 2)}
            />
          ))}
        </TileGroup>
      ))}
    </HandBoard>
  );
}

function ProblemDoraIndicators({ problem }) {
  const groups = [
    { label: '도라 표시패', tiles: problem.doraIndicators || [] },
    { label: '우라 도라', tiles: problem.uraDoraIndicators || [] },
    { label: '깡 도라', tiles: problem.kanDoraIndicators || [] },
  ].filter((group) => group.tiles.length > 0);

  if (groups.length === 0) return null;

  return (
    <div>
      <SectionTitle>도라 표시패</SectionTitle>
      <IndicatorBoard>
        {groups.map((group) => (
          <IndicatorGroup key={group.label}>
            <IndicatorLabel>{group.label}</IndicatorLabel>
            <IndicatorTiles>
              {group.tiles.map((id, tileIndex) => (
                <Tile key={`${group.label}-${id}-${tileIndex}`} id={id} />
              ))}
            </IndicatorTiles>
          </IndicatorGroup>
        ))}
      </IndicatorBoard>
    </div>
  );
}

export default function ScoreQuizPage() {
  const [started, setStarted] = useState(false);
  const [problems, setProblems] = useState([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(['', '']);
  const [timeLeft, setTimeLeft] = useState(30);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [records, setRecords] = useState([]);
  const [showReview, setShowReview] = useState(false);

  const current = problems[index];
  const isFinished = started && index >= problems.length;
  const wrongRecords = useMemo(() => records.filter((record) => !record.correct), [records]);

  const finishProblem = (submittedAnswers, timedOut = false) => {
    if (!current || submitted) return;
    const expected = current.answer.payments.map(pointToInput);
    const given = expected.map((_, answerIndex) => submittedAnswers[answerIndex] || '');
    const correct = expected.every((value, answerIndex) => value === given[answerIndex]);

    setIsCorrect(correct);
    setSubmitted(true);
    setRecords((prev) => {
      if (prev.some((record) => record.index === index)) return prev;
      return [
        ...prev,
        {
          index,
          problem: current,
          answers: [...given],
          correct,
          timedOut,
        },
      ];
    });
    if (correct) setScore((currentScore) => currentScore + 10);
  };

  useEffect(() => {
    if (!started || submitted || isFinished) return undefined;

    const timer = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          finishProblem(answers, true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [started, submitted, index, isFinished, answers]);

  const startQuiz = () => {
    setProblems(pickProblems());
    setStarted(true);
    setIndex(0);
    setAnswers(['', '']);
    setTimeLeft(30);
    setSubmitted(false);
    setIsCorrect(false);
    setScore(0);
    setRecords([]);
    setShowReview(false);
  };

  const setAnswer = (answerIndex, value) => {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[answerIndex] = sanitizeInput(value);
      return next;
    });
  };

  const submitAnswer = () => {
    finishProblem(answers, false);
  };

  const goNext = () => {
    if (index + 1 >= problems.length) {
      setIndex(problems.length);
      return;
    }
    setIndex((prev) => prev + 1);
    setAnswers(['', '']);
    setTimeLeft(30);
    setSubmitted(false);
    setIsCorrect(false);
  };

  if (!started) {
    return (
      <StartCard>
        <StartTitle>화료 점수 맞추기 퀴즈</StartTitle>
        <StartDesc>
          10문제가 무작위로 출제됩니다. 제한 시간 안에 점수의 앞자리만 입력하세요.
          예를 들어 7,700점은 77을 입력합니다.
        </StartDesc>
        <PrimaryButton type="button" onClick={startQuiz}>시작하기</PrimaryButton>
      </StartCard>
    );
  }

  if (isFinished) {
    return (
      <ScoreCard>
        <SectionTitle>퀴즈 결과</SectionTitle>
        <BigScore>{score}점</BigScore>
        <AnswerText>총 10문제 중 {score / 10}문제를 맞혔습니다.</AnswerText>
        <ButtonRow style={{ justifyContent: 'center', marginTop: 18 }}>
          <PrimaryButton type="button" onClick={startQuiz}>다시 시작</PrimaryButton>
          <SubButton type="button" onClick={() => setShowReview((prev) => !prev)} disabled={wrongRecords.length === 0}>
            {showReview ? '오답 닫기' : '오답 확인'}
          </SubButton>
        </ButtonRow>

        {showReview && (
          <ReviewWrap>
            {wrongRecords.length === 0 ? (
              <ResultNotice $correct>틀린 문제가 없습니다.</ResultNotice>
            ) : wrongRecords.map((record) => (
              <ReviewCard key={record.index}>
                <ReviewTitle>{record.index + 1}번 문제 {record.timedOut ? '(시간 초과)' : ''}</ReviewTitle>
                <ReviewText>
                  {record.problem.han}판 {record.problem.fu}부 / {describeWin(record.problem)} / {record.problem.honba}본장
                </ReviewText>
                <ReviewText>입력: {record.answers.filter(Boolean).join(' / ') || '입력 없음'}</ReviewText>
                <ReviewText>정답: {formatAnswer(record.problem)}</ReviewText>
              </ReviewCard>
            ))}
          </ReviewWrap>
        )}
      </ScoreCard>
    );
  }

  const needsTwoInputs = current.answer.type === 'childTsumo';
  const canSubmit = needsTwoInputs ? answers[0] && answers[1] : answers[0];

  return (
    <QuizShell>
      <TopInfo>
        <InfoPill>{index + 1} / {problems.length}문제</InfoPill>
        <InfoPill $warn={timeLeft <= 5}>남은 시간 {timeLeft}초</InfoPill>
        <InfoPill>현재 점수 {score}점</InfoPill>
      </TopInfo>

      <ProblemArea>
        <SectionTitle>조건</SectionTitle>
        <ConditionGrid>
          <ConditionItem>
            <ConditionLabel>장풍 / 자리</ConditionLabel>
            <ConditionValue>{formatWind(current.roundWind)}장 / {formatWind(current.seatWind)}가</ConditionValue>
          </ConditionItem>
          <ConditionItem>
            <ConditionLabel>화료</ConditionLabel>
            <ConditionValue>{describeWin(current)}</ConditionValue>
          </ConditionItem>
          <ConditionItem>
            <ConditionLabel>본장</ConditionLabel>
            <ConditionValue>{current.honba}본장</ConditionValue>
          </ConditionItem>
          <ConditionItem>
            <ConditionLabel>리치</ConditionLabel>
            <ConditionValue>{current.riichiStatus === 'riichi' ? '리치' : '리치 없음'}</ConditionValue>
          </ConditionItem>
        </ConditionGrid>

        <div>
          <SectionTitle>손패</SectionTitle>
          <ProblemHand problem={current} />
        </div>

        <ProblemDoraIndicators problem={current} />

        <div>
          <SectionTitle>답 입력</SectionTitle>
          <AnswerRow>
            <InputGroup>
              {needsTwoInputs ? '다른 자에게 받을 점수' : '점수'}
              <ScoreInputWrap>
                <ScoreInput
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={answers[0]}
                  onChange={(event) => setAnswer(0, event.target.value)}
                  disabled={submitted}
                  autoFocus
                />
                <FixedZeros>00</FixedZeros>
              </ScoreInputWrap>
            </InputGroup>
            {needsTwoInputs && (
              <InputGroup>
                친에게 받을 점수
                <ScoreInputWrap>
                  <ScoreInput
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={answers[1]}
                    onChange={(event) => setAnswer(1, event.target.value)}
                    disabled={submitted}
                  />
                  <FixedZeros>00</FixedZeros>
                </ScoreInputWrap>
              </InputGroup>
            )}
          </AnswerRow>
        </div>

        {submitted && (
          <ResultNotice $correct={isCorrect}>
            {isCorrect ? '정답입니다.' : timeLeft === 0 ? '시간이 초과되었습니다.' : '오답입니다.'}<br />
            정답: {formatAnswer(current)}
          </ResultNotice>
        )}

        <ButtonRow>
          {!submitted ? (
            <PrimaryButton type="button" onClick={submitAnswer} disabled={!canSubmit}>확인</PrimaryButton>
          ) : (
            <PrimaryButton type="button" onClick={goNext}>{index + 1 >= problems.length ? '결과 보기' : '다음'}</PrimaryButton>
          )}
          {!submitted && <SubButton type="button" onClick={() => setAnswers(['', ''])} disabled={!answers[0] && !answers[1]}>입력 초기화</SubButton>}
        </ButtonRow>
      </ProblemArea>
    </QuizShell>
  );
}
