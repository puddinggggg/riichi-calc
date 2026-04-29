import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import DoraPanel from './components/DoraPanel';
import OptionPanel from './components/OptionPanel';
import ResultPanel from './components/ResultPanel';
import TilePicker, { getEffectiveTileIds, getPhysicalTileIds, getConcealedTileIds, getFixedMeldCount, hasOpenMeld, getKanCount } from './components/TilePicker';
import WaitResultPanel from './components/WaitResultPanel';
import YakuSelector from './components/YakuSelector';
import { getWaitingTiles, getWaitingTilesWithFixedMelds, TILE_MAP, countTiles } from './logic/tiles';
import { calcHan, calcScore } from './logic/score';
import { analyzeHandForScore } from './logic/handAnalysis';
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

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

const PrimaryButton = styled(SmallButton)`
  background: #25211c;
  border-color: #25211c;
  color: #fff;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(22, 18, 14, 0.48);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
  padding: 28px 14px;
`;

const Modal = styled.div`
  width: min(760px, 100%);
  background: #fffaf2;
  border-radius: 24px;
  padding: 18px;
  box-shadow: 0 24px 70px rgba(22, 18, 14, 0.28);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  margin-bottom: 14px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const ModalBody = styled.div`
  display: grid;
  gap: 14px;
`;

const ScoreSummary = styled.div`
  display: grid;
  gap: 10px;
  padding: 16px;
  border-radius: 18px;
  background: #fff;
  border: 1px solid rgba(50,35,20,0.14);
`;

const ScoreLine = styled.div`
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -0.04em;
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

const WarningBox = styled.div`
  padding: 14px;
  border-radius: 14px;
  background: #fff6d8;
  color: #765700;
`;

const initialOptions = {
  winType: 'ron',
  playerType: 'dealer',
  fu: 30,
  honba: 0,
  roundWind: 'east',
  seatWind: 'east',
  isClosed: true,
  doraCount: 0,
  uraDoraCount: 0,
  akaDoraCount: 0,
  riichiStatus: 'none',
};

function WaitScoreModal({ tiles, winningTileId, isClosed = true, kanCount = 0, onClose }) {
  const [modalOptions, setModalOptions] = useState({ ...initialOptions, isClosed, playerType: initialOptions.seatWind === 'east' ? 'dealer' : initialOptions.playerType, winningTileId, kanCount });
  const [analysis, setAnalysis] = useState(null);

  const confirm = () => {
    const next = analyzeHandForScore(tiles, { ...modalOptions, winningTileId });
    setAnalysis(next);
  };

  return (
    <ModalOverlay>
      <Modal>
        <ModalHeader>
          <ModalTitle>{winningTileId ? `${TILE_MAP.get(winningTileId)?.label || ''} 화료 점수보기` : '선택한 14장 점수보기'}</ModalTitle>
          <SmallButton type="button" onClick={onClose}>닫기</SmallButton>
        </ModalHeader>
        <ModalBody>
          <OptionPanel
  state={modalOptions}
  setState={setModalOptions}
  hideFu
  showRiichiOption
  lockIsClosed
/>
          <DoraPanel state={modalOptions} setState={setModalOptions} />
          <Actions>
            <PrimaryButton type="button" onClick={confirm}>확인</PrimaryButton>
          </Actions>
          {analysis && (analysis.error ? (
            <WarningBox>{analysis.error}</WarningBox>
          ) : (
            <ScoreSummary>
              <ScoreLine>{analysis.result.total.toLocaleString()}점</ScoreLine>
              <div>{analysis.han}판 {analysis.result.fu}부 {analysis.result.limit ? ` / ${analysis.result.limit}` : ''}</div>
              <TagWrap>
                {analysis.yaku.length > 0
                  ? analysis.yaku.map((item, index) => (
                    <Tag key={`${item.name}-${index}`}>{item.name} {item.count > 1 ? `${item.count}개` : ''}</Tag>
                  ))
                  : <Tag>자동 판정 역 없음</Tag>}
                {analysis.doraItems.map((item) => (
                  <Tag key={item.name}>{item.name} {item.count}개</Tag>
                ))}
              </TagWrap>
              <div>
                {analysis.result.payments.map((item) => (
                  <div key={item.label}>{item.label}: {item.points.toLocaleString()}점</div>
                ))}
              </div>
            </ScoreSummary>
          ))}
        </ModalBody>
      </Modal>
    </ModalOverlay>
  );
}

export default function App() {
  const [mode, setMode] = useState('menu');
  const [waitTiles, setWaitTiles] = useState([]);
  const [options, setOptions] = useState(initialOptions);
  const [selectedYaku, setSelectedYaku] = useState([]);
  const [waitScoreTarget, setWaitScoreTarget] = useState(null);

  const waitEffectiveTiles = useMemo(() => getEffectiveTileIds(waitTiles), [waitTiles]);
  const waitPhysicalTiles = useMemo(() => getPhysicalTileIds(waitTiles), [waitTiles]);
  const waits = useMemo(() => {
    const physicalCounts = countTiles(waitPhysicalTiles);
    const fixedMeldCount = getFixedMeldCount(waitTiles);
    const concealedTileIds = getConcealedTileIds(waitTiles);

    const candidates = fixedMeldCount > 0
      ? getWaitingTilesWithFixedMelds(concealedTileIds, fixedMeldCount)
      : getWaitingTiles(waitEffectiveTiles);

    return candidates.filter((tile) => (physicalCounts[tile.id] || 0) < 4);
  }, [waitTiles, waitEffectiveTiles, waitPhysicalTiles]);

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

  useEffect(() => {
    setSelectedYaku((prev) => {
      const hasMenzenTsumo = prev.some((item) => item.id === 'menzenTsumo');
      const shouldHaveMenzenTsumo = options.winType === 'tsumo' && options.isClosed;

      if (shouldHaveMenzenTsumo && !hasMenzenTsumo) {
        return [...prev, { id: 'menzenTsumo', count: 1 }];
      }

      if (!shouldHaveMenzenTsumo && hasMenzenTsumo) {
        return prev.filter((item) => item.id !== 'menzenTsumo');
      }

      return prev;
    });
  }, [options.winType, options.isClosed]);

  useEffect(() => {
    const hasPinfu = selectedYaku.some((item) => item.id === 'pinfu');
    const hasMenzenTsumo = selectedYaku.some((item) => item.id === 'menzenTsumo');
    if (hasPinfu && hasMenzenTsumo && options.isClosed && options.winType === 'tsumo' && Number(options.fu) !== 20) {
      setOptions((prev) => ({ ...prev, fu: 20 }));
      return;
    }
    if (hasPinfu && options.winType === 'ron' && Number(options.fu) !== 30) {
      setOptions((prev) => ({ ...prev, fu: 30 }));
    }
  }, [selectedYaku, options.isClosed, options.winType, options.fu]);

  useEffect(() => {
    if (!options.isClosed) {
      setSelectedYaku((prev) => prev.filter((item) => item.id !== 'riichi' && item.id !== 'doubleRiichi'));
      if (options.riichiStatus !== 'none') {
        setOptions((prev) => ({ ...prev, riichiStatus: 'none' }));
      }
    }
  }, [options.isClosed, options.riichiStatus]);

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
            <MenuDesc>13장의 대기패 확인과 14장의 점수 계산을 한 화면에서 진행합니다.</MenuDesc>
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
            <Desc>13장을 선택하면 대기패가 표시됩니다. 표시된 대기패를 클릭하면 그 패를 마지막 선택패(화료패)로 보고 점수보기 창에서 자동 판정 결과를 확인합니다. 치/퐁/깡/암깡 버튼으로 몸통을 미리 입력할 수 있고, 선택된 패 영역에서 해당 몸통을 클릭하면 한꺼번에 제거됩니다. 선택된 패 영역의 주황 테두리는 14장 완성 상태에서의 마지막 선택패입니다.</Desc>
          </div>
        </Header>
        <Layout>
          <TilePicker selectedTiles={waitTiles} setSelectedTiles={setWaitTiles} maxTiles={14} title="선택된 패 / 선택할 패" />
          <WaitResultPanel selectedCount={waitEffectiveTiles.length} waits={waits} onWaitClick={(tile) => setWaitScoreTarget({ winningTileId: tile.id, tiles: [...waitEffectiveTiles, tile.id], isClosed: !hasOpenMeld(waitTiles), kanCount: getKanCount(waitTiles) })} />
        </Layout>
        {waitScoreTarget && <WaitScoreModal tiles={waitScoreTarget.tiles} winningTileId={waitScoreTarget.winningTileId} isClosed={waitScoreTarget.isClosed} kanCount={waitScoreTarget.kanCount} onClose={() => setWaitScoreTarget(null)} />}
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
