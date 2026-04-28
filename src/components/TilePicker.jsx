import styled from 'styled-components';
import { TILE_GROUPS, TILE_MAP } from '../logic/tiles';
import { Section, SectionTitle } from './Section';

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
  color: #665d50;
  font-size: 14px;
`;

const ClearButton = styled.button`
  border: 1px solid rgba(50,35,20,0.18);
  background: #fff;
  border-radius: 999px;
  padding: 8px 12px;
  cursor: pointer;
`;

const SelectedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(46px, 1fr));
  gap: 8px;
  min-height: 56px;
  padding: 10px;
  border-radius: 16px;
  background: #fffaf2;
  border: 1px dashed rgba(50,35,20,0.22);
  margin-bottom: 16px;
`;

const Empty = styled.div`
  grid-column: 1 / -1;
  color: #9a8f7e;
  display: flex;
  align-items: center;
`;

const Group = styled.div`
  margin-top: 14px;
`;

const GroupTitle = styled.div`
  font-weight: 800;
  margin-bottom: 8px;
`;

const TileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(48px, 1fr));
  gap: 8px;
`;

const TileButton = styled.button`
  position: relative;
  width: 100%;
  aspect-ratio: 0.74 / 1;
  border: 2px solid ${({ $last, $active }) => ($last ? '#d85b1f' : ($active ? '#1f7a50' : 'rgba(50,35,20,0.18)'))};
  background: ${({ $last, $active }) => ($last ? '#fff0e5' : ($active ? '#e3f4ea' : '#fff'))};
  color: #171512;
  cursor: pointer;
  display: grid;
  place-items: center;
  padding: 0;
  line-height: 1;
  overflow: hidden;
  box-shadow: 0 2px 0 rgba(50,35,20,0.08);

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

const TileFace = styled.span`
  font-family: "Segoe UI Symbol", "Apple Color Emoji", "Noto Color Emoji", system-ui, sans-serif;
  font-size: clamp(38px, 7vw, 56px);
  transform: scale(1.28);
  line-height: 0.8;
  display: block;
`;

const LastBadge = styled.span`
  position: absolute;
  right: 3px;
  bottom: 3px;
  border-radius: 999px;
  background: #d85b1f;
  color: #fff;
  font-size: 10px;
  font-weight: 900;
  padding: 2px 5px;
`;

const SelectedButton = styled(TileButton)`
  aspect-ratio: 0.74 / 1;
`;

export default function TilePicker({ selectedTiles, setSelectedTiles, maxTiles = 13, title = '패 선택' }) {
  const sortedSelected = selectedTiles
    .map((id, originalIndex) => ({ id, originalIndex }))
    .sort((a, b) => (TILE_MAP.get(a.id)?.order || 0) - (TILE_MAP.get(b.id)?.order || 0) || a.originalIndex - b.originalIndex);
  const counts = selectedTiles.reduce((acc, id) => ({ ...acc, [id]: (acc[id] || 0) + 1 }), {});
  const lastOriginalIndex = selectedTiles.length - 1;

  const addTile = (id) => {
    if (selectedTiles.length >= maxTiles) return;
    if ((counts[id] || 0) >= 4) return;
    setSelectedTiles((prev) => [...prev, id]);
  };

  const removeTileAt = (targetOriginalIndex) => {
    setSelectedTiles((prev) => prev.filter((_, index) => index !== targetOriginalIndex));
  };

  return (
    <Section>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <SectionTitle>{title}</SectionTitle>
        <ClearButton type="button" onClick={() => setSelectedTiles([])}>초기화</ClearButton>
      </div>

      {TILE_GROUPS.map((group) => (
        <Group key={group.key}>
          <GroupTitle>{group.label}</GroupTitle>
          <TileGrid>
            {group.tiles.map((tile) => {
              const disabled = selectedTiles.length >= maxTiles || (counts[tile.id] || 0) >= 4;
              return (
                <TileButton
                  key={tile.id}
                  type="button"
                  title={tile.label}
                  disabled={disabled}
                  $active={(counts[tile.id] || 0) > 0}
                  onClick={() => addTile(tile.id)}
                >
                  <TileFace>{tile.unicode}</TileFace>
                </TileButton>
              );
            })}
          </TileGrid>
        </Group>
      ))}
      <Summary>
        <span>선택된 패 {selectedTiles.length} / {maxTiles} {selectedTiles.length > 0 ? '· 주황 테두리: 마지막 선택패(화료패)' : ''}</span>
        <SelectedGrid>
          {sortedSelected.length === 0 ? (
            <Empty>패를 클릭해 선택하세요.</Empty>
          ) : sortedSelected.map(({ id, originalIndex }) => {
            const tile = TILE_MAP.get(id);
            const isLast = originalIndex === lastOriginalIndex;
            return (
              <SelectedButton
                key={`${id}-${originalIndex}`}
                type="button"
                title={`${tile.label} 제거${isLast ? ' / 마지막 선택패' : ''}`}
                onClick={() => removeTileAt(originalIndex)}
                $last={isLast}
              >
                <TileFace>{tile.unicode}</TileFace>
                {isLast && <LastBadge>화료</LastBadge>}
              </SelectedButton>
            );
          })}
        </SelectedGrid>
      </Summary>
    </Section>
  );
}
