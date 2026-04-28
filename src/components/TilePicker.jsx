import styled from 'styled-components';
import { TILE_GROUPS, TILE_MAP, sortTiles } from '../logic/tiles';
import { Section, SectionTitle } from './Section';

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 12px;
  /* align-items: center; */
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
  width: 100%;
  aspect-ratio: 0.74 / 1;
  border: 1px solid ${({ $active }) => ($active ? '#1f7a50' : 'rgba(50,35,20,0.18)')};
  background: ${({ $active }) => ($active ? '#e3f4ea' : '#fff')};
  color: #171512;
  /* border-radius: 12px; */
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

const Count = styled.span`
  position: absolute;
`;

const SelectedButton = styled(TileButton)`
  aspect-ratio: 0.74 / 1;
`;

export default function TilePicker({ selectedTiles, setSelectedTiles, maxTiles = 13, title = '패 선택' }) {
  const sortedSelected = sortTiles(selectedTiles);
  const counts = selectedTiles.reduce((acc, id) => ({ ...acc, [id]: (acc[id] || 0) + 1 }), {});

  const addTile = (id) => {
    if (selectedTiles.length >= maxTiles) return;
    if ((counts[id] || 0) >= 4) return;
    setSelectedTiles((prev) => sortTiles([...prev, id]));
  };

  const removeTileAt = (targetIndex) => {
    const sorted = sortTiles(selectedTiles);
    sorted.splice(targetIndex, 1);
    setSelectedTiles(sorted);
  };

  return (
    <Section>
      <div style={{display:'flex',width:'100%',justifyContent:'space-between'}}>

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
        <span>선택된 패 {selectedTiles.length} / {maxTiles}</span>
        <SelectedGrid>
        {sortedSelected.length === 0 ? (
          <Empty>패를 클릭해 선택하세요.</Empty>
        ) : sortedSelected.map((id, index) => {
          const tile = TILE_MAP.get(id);
          return (
            <SelectedButton key={`${id}-${index}`} type="button" title={`${tile.label} 제거`} onClick={() => removeTileAt(index)}>
              <TileFace>{tile.unicode}</TileFace>
            </SelectedButton>
          );
        })}
      </SelectedGrid>
      </Summary>
    </Section>
  );
}
