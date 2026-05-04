import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Section, SectionTitle } from '../components/Section';
import { QUIZ_PROBLEMS } from '../logic/quizProblems';
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
  letter-spacing: -0.05em;
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

const ProblemTiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-bottom: 18px;
  border-bottom: 3px solid rgba(50,35,20,0.56);
`;

const AnswerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, minmax(56px, 1fr));
  gap: 14px;

  @media (max-width: 720px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const TileButton = styled.button`
  position: relative;
  aspect-ratio: 0.74 / 1;
  border: 0;
  background: transparent;
  display: grid;
  place-items: center;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 0;
  overflow: visible;
  outline: ${({ $selected, $answer, $wrong }) => {
    if ($answer) return '3px solid #1f7a50';
    if ($wrong) return '3px solid #c64231';
    if ($selected) return '3px solid #d85b1f';
    return 'none';
  }};
  outline-offset: 2px;
`;

const SmallTile = styled.div`
  width: 52px;
  aspect-ratio: 0.74 / 1;
  display: grid;
  place-items: center;
  overflow: visible;

  @media (max-width: 640px) {
    width: 38px;
  }
`;

const TileImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  pointer-events: none;
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
  letter-spacing: -0.08em;
`;

const AnswerText = styled.div`
  color: #665d50;
  margin-top: 8px;
  line-height: 1.5;
`;

const ANSWER_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(array) {
  return [...array]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function pickProblems() {
  return shuffle([
    ...shuffle(QUIZ_PROBLEMS.easy).slice(0, 5),
    ...shuffle(QUIZ_PROBLEMS.medium).slice(0, 3),
    ...shuffle(QUIZ_PROBLEMS.hard).slice(0, 2),
  ]);
}

function sameTileSet(a, b) {
  if (a.length !== b.length) return false;
  const left = [...a].sort();
  const right = [...b].sort();
  return left.every((value, index) => value === right[index]);
}

function countTile(tiles, id) {
  return tiles.filter((tile) => tile === id).length;
}

function Tile({ id }) {
  const tile = TILE_MAP.get(id);
  return <TileImage src={`/images/tiles/${id}.png`} alt={tile?.label || id} />;
}

export default function QuizPage() {
  const [started, setStarted] = useState(false);
  const [problems, setProblems] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const current = problems[index];
  const isFinished = started && index >= problems.length;

  const sortedProblemTiles = useMemo(() => (current ? sortTiles(current.tiles) : []), [current]);

  const answerSuit = useMemo(() => (current?.tiles?.[0] ? current.tiles[0].slice(1) : 'p'), [current]);

  const selectableAnswerTiles = useMemo(() => ANSWER_NUMBERS.map((n) => `${n}${answerSuit}`), [answerSuit]);

  const effectiveWaits = useMemo(() => (
    current ? current.waits.filter((id) => countTile(current.tiles, id) < 4) : []
  ), [current]);

  const answerLabels = useMemo(() => (
    effectiveWaits.map((id) => TILE_MAP.get(id)?.label || id).join(', ')
  ), [effectiveWaits]);

  useEffect(() => {
    if (!started || submitted || isFinished) return undefined;

    const timer = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          const correct = sameTileSet(selected, effectiveWaits);
          setIsCorrect(correct);
          setSubmitted(true);
          if (correct) setScore((currentScore) => currentScore + 10);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [started, submitted, index, isFinished, selected, effectiveWaits]);

  const startQuiz = () => {
    setProblems(pickProblems());
    setStarted(true);
    setIndex(0);
    setSelected([]);
    setTimeLeft(30);
    setSubmitted(false);
    setIsCorrect(false);
    setScore(0);
  };

  const toggleTile = (id) => {
    if (submitted) return;
    setSelected((prev) => (prev.includes(id) ? prev.filter((tile) => tile !== id) : [...prev, id]));
  };

  const submitAnswer = () => {
    if (!current || submitted) return;
    const correct = sameTileSet(selected, effectiveWaits);
    setIsCorrect(correct);
    setSubmitted(true);
    if (correct) setScore((prev) => prev + 10);
  };

  const goNext = () => {
    if (index + 1 >= problems.length) {
      setIndex(problems.length);
      return;
    }
    setIndex((prev) => prev + 1);
    setSelected([]);
    setTimeLeft(30);
    setSubmitted(false);
    setIsCorrect(false);
  };

  if (!started) {
    return (
      <StartCard>
        {/* <StartTitle>대기패 연습퀴즈</StartTitle> */}
        <StartDesc>
          완성 가능한 대기패를 모두 찾아보세요.<br />
          10문제가 랜덤으로 출제되며 제한시간은 문제당 30초입니다.
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
        </ButtonRow>
      </ScoreCard>
    );
  }

  return (
    <QuizShell>
      <TopInfo>
        <InfoPill>{index + 1} / {problems.length}문제</InfoPill>
        <InfoPill $warn={timeLeft <= 5}>남은 시간 {timeLeft}초</InfoPill>
        <InfoPill>현재 점수 {score}점</InfoPill>
      </TopInfo>

      <ProblemArea>
        <SectionTitle>문제</SectionTitle>
        <ProblemTiles>
          {sortedProblemTiles.map((id, tileIndex) => (
            <SmallTile key={`${id}-${tileIndex}`}>
              <Tile id={id} small />
            </SmallTile>
          ))}
        </ProblemTiles>

        <SectionTitle>대기패를 모두 선택하세요</SectionTitle>
        <AnswerGrid>
          {selectableAnswerTiles.map((id) => {
            const selectedTile = selected.includes(id);
            const answerTile = submitted && effectiveWaits.includes(id);
            const wrongTile = submitted && selectedTile && !current.waits.includes(id);
            return (
              <TileButton
                key={id}
                type="button"
                onClick={() => toggleTile(id)}
                disabled={submitted}
                $selected={selectedTile}
                $answer={answerTile}
                $wrong={wrongTile}
                title={TILE_MAP.get(id)?.label}
              >
                <Tile id={id} />
              </TileButton>
            );
          })}
        </AnswerGrid>

        {submitted && (
          <ResultNotice $correct={isCorrect}>
            {isCorrect ? '정답입니다!' : timeLeft === 0 ? '시간이 초과되었습니다.' : '오답입니다.'}<br />
            정답: {answerLabels}
          </ResultNotice>
        )}

        <ButtonRow>
          {!submitted ? (
            <PrimaryButton type="button" onClick={submitAnswer} disabled={selected.length === 0}>확인</PrimaryButton>
          ) : (
            <PrimaryButton type="button" onClick={goNext}>{index + 1 >= problems.length ? '결과 보기' : '다음'}</PrimaryButton>
          )}
          {!submitted && <SubButton type="button" onClick={() => setSelected([])} disabled={selected.length === 0}>선택 초기화</SubButton>}
        </ButtonRow>
      </ProblemArea>
    </QuizShell>
  );
}
