import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Section, SectionTitle } from '../components/Section';
import { SCORE_QUIZ_PROBLEMS, formatWind } from '../logic/scoreQuizProblems';
import { TILE_MAP, sortTiles } from '../logic/tiles';

const PageWrap = styled.div`
  display: grid;
  gap: 16px;
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
  background: #fff;
  color: #3a3026;
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

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
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

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

const JumpInput = styled.input`
  width: 86px;
  border: 1px solid rgba(50,35,20,0.18);
  border-radius: 999px;
  padding: 10px 12px;
  font-weight: 900;
`;

const ResultNotice = styled.div`
  border-radius: 18px;
  background: ${({ $correct }) => ($correct ? '#e3f4ea' : '#fff6d8')};
  color: ${({ $correct }) => ($correct ? '#145a3b' : '#765700')};
  padding: 14px;
  line-height: 1.55;
  font-weight: 800;
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 10px;
`;

function allProblems() {
  return [
    ...SCORE_QUIZ_PROBLEMS.easy,
    ...SCORE_QUIZ_PROBLEMS.medium,
    ...SCORE_QUIZ_PROBLEMS.hard,
  ];
}

function pointToInput(point) {
  return String(Math.floor(point / 100));
}

function sanitizeInput(value) {
  return value.replace(/\D/g, '').slice(0, 4);
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

export default function ScoreQuizTestPage() {
  const problems = useMemo(() => allProblems(), []);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(['', '']);
  const [result, setResult] = useState(null);
  const [jumpValue, setJumpValue] = useState('1');

  const current = problems[index];
  const needsTwoInputs = current.answer.type === 'childTsumo';
  const canCheck = needsTwoInputs ? answers[0] && answers[1] : answers[0];

  const moveTo = (nextIndex) => {
    const bounded = Math.min(Math.max(nextIndex, 0), problems.length - 1);
    setIndex(bounded);
    setJumpValue(String(bounded + 1));
    setAnswers(['', '']);
    setResult(null);
  };

  const setAnswer = (answerIndex, value) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[answerIndex] = sanitizeInput(value);
      return next;
    });
  };

  const checkAnswer = () => {
    const expected = current.answer.payments.map(pointToInput);
    const given = expected.map((_, answerIndex) => answers[answerIndex] || '');
    const correct = expected.every((value, answerIndex) => value === given[answerIndex]);
    setResult({ correct, given });
  };

  const jump = () => {
    const next = Number(jumpValue);
    if (!Number.isFinite(next)) return;
    moveTo(next - 1);
  };

  return (
    <PageWrap>
      <TopInfo>
        <InfoPill>{index + 1} / {problems.length}</InfoPill>
        <InfoPill>{current.difficulty} · {current.id}</InfoPill>
        <ButtonRow>
          <SubButton type="button" onClick={() => moveTo(index - 1)} disabled={index === 0}>이전</SubButton>
          <SubButton type="button" onClick={() => moveTo(index + 1)} disabled={index === problems.length - 1}>다음</SubButton>
          <JumpInput
            type="number"
            min="1"
            max={problems.length}
            value={jumpValue}
            onChange={(event) => setJumpValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') jump();
            }}
          />
          <SubButton type="button" onClick={jump}>이동</SubButton>
        </ButtonRow>
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
                  />
                  <FixedZeros>00</FixedZeros>
                </ScoreInputWrap>
              </InputGroup>
            )}
          </AnswerRow>
        </div>

        <ButtonRow>
          <PrimaryButton type="button" onClick={checkAnswer} disabled={!canCheck}>확인</PrimaryButton>
          <SubButton type="button" onClick={() => setAnswers(['', ''])} disabled={!answers[0] && !answers[1]}>입력 초기화</SubButton>
          <SubButton type="button" onClick={() => setResult({ correct: null, given: [] })}>정답 보기</SubButton>
        </ButtonRow>

        {result && (
          <ResultNotice $correct={result.correct}>
            {result.correct === null ? '정답 확인' : result.correct ? '정답입니다.' : '오답입니다.'}<br />
            정답: {formatAnswer(current)}
          </ResultNotice>
        )}

        <DetailGrid>
          <ConditionItem>
            <ConditionLabel>검수용 판/부</ConditionLabel>
            <ConditionValue>{current.han}판 {current.fu}부</ConditionValue>
          </ConditionItem>
          <ConditionItem>
            <ConditionLabel>검수용 역</ConditionLabel>
            <ConditionValue>{current.yaku.join(', ')}</ConditionValue>
          </ConditionItem>
        </DetailGrid>
      </ProblemArea>
    </PageWrap>
  );
}
