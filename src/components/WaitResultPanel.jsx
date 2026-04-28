import styled from 'styled-components';
import { TILE_MAP } from '../logic/tiles';
import { Section, SectionTitle } from './Section';

const Message = styled.div`
  padding: 14px;
  border-radius: 14px;
  background: #fff6d8;
  color: #765700;
`;

const WaitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(54px, 1fr));
  gap: 10px;
`;

const TileCard = styled.div`
  aspect-ratio: 0.74 / 1;
  border-radius: 14px;
  background: #fff;
  border: 1px solid rgba(50,35,20,0.18);
  display: grid;
  place-items: center;
  overflow: hidden;
  box-shadow: 0 2px 0 rgba(50,35,20,0.08);
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
`;

export default function WaitResultPanel({ selectedCount, waits }) {
  return (
    <Section>
      <SectionTitle>대기패 결과</SectionTitle>
      {selectedCount !== 13 ? (
        <Message>13장을 선택하면 완성 가능한 대기패가 표시됩니다.</Message>
      ) : waits.length === 0 ? (
        <Message>현재 13장으로 완성 가능한 대기패가 없습니다.</Message>
      ) : (
        <>
          <WaitGrid>
            {waits.map((tile) => (
              <TileCard key={tile.id} title={tile.label}>
                <TileFace>{tile.unicode}</TileFace>
              </TileCard>
            ))}
          </WaitGrid>
          <Label>{waits.map((tile) => tile.label).join(', ')}</Label>
        </>
      )}
    </Section>
  );
}
