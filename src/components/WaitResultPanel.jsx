import styled from 'styled-components';
import { Section, SectionTitle } from './Section';

const Message = styled.div`
  padding: 14px;
  border-radius: 14px;
  background: #fff6d8;
  color: #765700;
  line-height: 1.55;
`;

const WaitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(54px, 1fr));
  gap: 10px;
`;

const TileCard = styled.button`
  aspect-ratio: 0.74 / 1;
  border-radius: 14px;
  background: #fff;
  border: 1px solid rgba(50,35,20,0.18);
  display: grid;
  place-items: center;
  overflow: hidden;
  box-shadow: 0 2px 0 rgba(50,35,20,0.08);
  cursor: pointer;

  &:hover {
    border-color: #d85b1f;
    background: #fff0e5;
  }
`;

const TileFace = styled.span`
  font-family: "Segoe UI Symbol", "Apple Color Emoji", "Noto Color Emoji", system-ui, sans-serif;
  font-size: clamp(42px, 8vw, 64px);
  transform: scale(1.28);
  line-height: 0.8;
`;

const Label = styled.div`
  margin-top: 10px;
  color: #665d50;
  font-weight: 700;
  line-height: 1.45;
`;

export default function WaitResultPanel({ selectedCount, waits, onWaitClick }) {
  return (
    <Section>
      <SectionTitle>대기패 결과</SectionTitle>
      {selectedCount !== 13 ? (
        <Message>
          13장을 선택하면 완성 가능한 대기패가 표시됩니다.<br />
          표시된 대기패를 클릭하면 그 패를 화료패로 추가해 점수보기 창을 엽니다.
        </Message>
      ) : waits.length === 0 ? (
        <Message>현재 13장으로 완성 가능한 대기패가 없습니다.</Message>
      ) : (
        <>
          <WaitGrid>
            {waits.map((tile) => (
              <TileCard key={tile.id} type="button" title={`${tile.label} 점수보기`} onClick={() => onWaitClick?.(tile)}>
                <TileFace>{tile.unicode}</TileFace>
              </TileCard>
            ))}
          </WaitGrid>
          <Label>
            {waits.map((tile) => tile.label).join(', ')}<br />
            대기패를 클릭하면 해당 패를 마지막 선택패(화료패)로 보고 자동 역/부수 판정을 진행합니다.
          </Label>
        </>
      )}
    </Section>
  );
}
