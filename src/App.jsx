import { useMemo, useState } from 'react';
import styled from 'styled-components';
import DoraPanel from './components/DoraPanel';
import OptionPanel from './components/OptionPanel';
import ResultPanel from './components/ResultPanel';
import TilePicker from './components/TilePicker';
import WaitResultPanel from './components/WaitResultPanel';
import YakuSelector from './components/YakuSelector';
import { getWaitingTiles } from './logic/tiles';
import { calcHan, calcScore } from './logic/score';
import { YAKU_LIST } from './logic/riichiData';

const Page = styled.main`
  width: min(1120px, calc(100% - 28px));
  margin: 0 auto;
  padding: 28px 0 56px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: flex-end;
  margin-bottom: 18px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(28px, 5vw, 48px);
  letter-spacing: -0.05em;
`;

const Desc = styled.p`
  margin: 8px 0 0;
  color: #6e6253;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 24px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const MenuButton = styled.button`
  min-height: 180px;
  border: 1px solid rgba(50,35,20,0.16);
  border-radius: 24px;
  background: #fff;
  padding: 24px;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(50,35,20,0.08);

  &:hover {
    transform: translateY(-2px);
  }
`;

const MenuTitle = styled.div`
  font-size: 28px;
  font-weight: 900;
  letter-spacing: -0.04em;
`;

const MenuDesc = styled.div`
  margin-top: 10px;
  color: #746b60;
  line-height: 1.55;
`;

const TopBar = styled.div`
  margin-bottom: 18px;
`;

const BackButton = styled.button`
  border: 1px solid rgba(50,35,20,0.18);
  background: #fff;
  border-radius: 999px;
  padding: 9px 14px;
  cursor: pointer;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 16px;
  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Side = styled.div`
  display: grid;
  gap: 16px;
  align-content: start;
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`;

const SmallButton = styled.button`
  border: 1px solid rgba(50,35,20,0.18);
  background: #fff;
  border-radius: 999px;
  padding: 8px 12px;
  cursor: pointer;
`;

const initialOptions = {
  winType: 'ron',
  playerType: 'nonDealer',
  fu: 30,
  honba: 0,
  roundWind: 'east',
  seatWind: 'east',
  isClosed: true,
  doraCount: 0,
  uraDoraCount: 0,
  akaDoraCount: 0,
};

export default function App() {
  const [mode, setMode] = useState('menu');
  const [waitTiles, setWaitTiles] = useState([]);
  const [options, setOptions] = useState(initialOptions);
  const [selectedYaku, setSelectedYaku] = useState([]);

  const waits = useMemo(() => getWaitingTiles(waitTiles), [waitTiles]);

  const han = useMemo(
    () => calcHan({
      selectedYaku,
      yakuList: YAKU_LIST,
      isClosed: options.isClosed,
      doraCount: options.doraCount,
      uraDoraCount: options.uraDoraCount,
      akaDoraCount: options.akaDoraCount,
    }),
    [selectedYaku, options.isClosed, options.doraCount, options.uraDoraCount, options.akaDoraCount],
  );

  const result = useMemo(() => calcScore({ ...options, han }), [options, han]);

  const resetScore = () => {
    setOptions(initialOptions);
    setSelectedYaku([]);
  };

  if (mode === 'menu') {
    return (
      <Page>
        <Header>
          <div>
            <Title>Riichi Calc Web</Title>
            <Desc>원하는 기능을 선택하세요.</Desc>
          </div>
        </Header>
        <MenuGrid>
          <MenuButton type="button" onClick={() => setMode('wait')}>
            <MenuTitle>대기패 확인</MenuTitle>
            <MenuDesc>13장의 패를 선택하면 화료할 수 있는 대기패 목록을 확인합니다.</MenuDesc>
          </MenuButton>
          <MenuButton type="button" onClick={() => setMode('score')}>
            <MenuTitle>점수계산기</MenuTitle>
            <MenuDesc>역, 부수, 화료 조건, 도라 개수를 입력해 점수를 계산합니다.</MenuDesc>
          </MenuButton>
        </MenuGrid>
      </Page>
    );
  }

  if (mode === 'wait') {
    return (
      <Page>
        <TopBar>
          <BackButton type="button" onClick={() => setMode('menu')}>← 메뉴로</BackButton>
        </TopBar>
        <Header>
          <div>
            <Title>대기패 확인</Title>
            <Desc>13장을 선택하면 완성 가능한 패가 표시됩니다.</Desc>
          </div>
        </Header>
        <Layout>
          <TilePicker selectedTiles={waitTiles} setSelectedTiles={setWaitTiles} maxTiles={13} title="선택된 패 / 선택할 패" />
          <WaitResultPanel selectedCount={waitTiles.length} waits={waits} />
        </Layout>
      </Page>
    );
  }

  return (
    <Page>
      <TopBar>
        <BackButton type="button" onClick={() => setMode('menu')}>← 메뉴로</BackButton>
      </TopBar>
      <Header>
        <div>
          <Title>점수계산기</Title>
          <Desc>역과 계산 조건을 선택해 리치마작 점수를 계산합니다.</Desc>
        </div>
      </Header>
      <Actions>
        <SmallButton type="button" onClick={resetScore}>초기화</SmallButton>
      </Actions>
      <Layout>
        <div>
          <YakuSelector selected={selectedYaku} setSelected={setSelectedYaku} isClosed={options.isClosed} setOptions={setOptions} />
        </div>
        <Side>
          <OptionPanel state={options} setState={setOptions} />
          <DoraPanel state={options} setState={setOptions} />
          <ResultPanel result={result} han={han} />
        </Side>
      </Layout>
    </Page>
  );
}
