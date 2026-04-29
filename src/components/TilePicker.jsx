import { useState } from 'react';
import styled from 'styled-components';
import { TILE_GROUPS, TILE_MAP } from '../logic/tiles';
import { Section, SectionTitle } from './Section';

const MELD_LABELS = {
  chi: '치',
  pon: '퐁',
  kan: '깡',
  ankan: '암깡',
};

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

const MeldModeWrap = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 12px 0 8px;
`;

const MeldButton = styled.button`
  min-width: 54px;
  border: 1px solid ${({ $active }) => ($active ? '#d85b1f' : 'rgba(50,35,20,0.18)')};
  background: ${({ $active }) => ($active ? '#fff0e5' : '#fff')};
  color: ${({ $active }) => ($active ? '#b84312' : '#28231e')};
  border-radius: 12px;
  padding: 8px 12px;
  font-weight: 900;
  cursor: pointer;
`;

const SelectedGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
  min-height: 56px;
  padding: 10px;
  border-radius: 16px;
  background: #fffaf2;
  border: 1px dashed rgba(50,35,20,0.22);
  margin-bottom: 16px;
`;

const Empty = styled.div`
  color: #9a8f7e;
  min-height: 42px;
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
  transform: scale(1.28) ;
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
  width: 46px;
  flex: 0 0 46px;
  aspect-ratio: 0.74 / 1;
`;

const MeldGroupButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 4px 6px 16px;
  border-radius: 12px;
  border: 2px solid rgba(50,35,20,0.18);
  background: #fff;
  box-shadow: 0 2px 0 rgba(50,35,20,0.08);
  cursor: pointer;
`;

const MeldTile = styled.span`
  width: 34px;
  height: 46px;
  border: 1px solid rgba(50,35,20,0.18);
  border-radius: 5px;
  display: grid;
  place-items: center;
  background: ${({ $back }) => ($back ? "url('/images/back.png') center / 100% 100% no-repeat" : '#fff')};
  color: #171512;
  overflow: hidden;
  transform: ${({ $rotated }) => ($rotated ? 'rotate(270deg)' : '')};
`;

const MeldTileFace = styled.span`
  font-family: "Segoe UI Symbol", "Apple Color Emoji", "Noto Color Emoji", system-ui, sans-serif;
  font-size: 40px;
  line-height: 0.8;
  transform: scale(1.14) ${({ $rotated }) => ($rotated ? 'rotate(90deg)' : '')};
`;

const MeldBadge = styled.span`
  position: absolute;
  left: 7px;
  bottom: 2px;
  font-size: 10px;
  font-weight: 900;
  color: #8a5a18;
`;

function isMeldItem(item) {
  return typeof item === 'object' && item !== null && item.type;
}

function getEffectiveIds(item) {
  if (!isMeldItem(item)) return [item];
  if (item.type === 'chi' || item.type === 'pon') return item.tiles;
  if (item.type === 'kan' || item.type === 'ankan') return item.tiles.slice(0, 3);
  return [];
}

function getPhysicalIds(item) {
  if (!isMeldItem(item)) return [item];
  return item.tiles;
}

function isNumberTile(id) {
  return /^[1-9][mps]$/.test(id);
}

function makeChiTiles(id) {
  if (!isNumberTile(id)) return null;
  const n = Number(id.slice(0, -1));
  const suit = id.at(-1);
  const start = n >= 8 ? 7 : n;
  return [`${start}${suit}`, `${start + 1}${suit}`, `${start + 2}${suit}`];
}

function countIds(ids) {
  return ids.reduce((acc, id) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});
}

export function getEffectiveTileIds(selectedTiles) {
  return selectedTiles.flatMap(getEffectiveIds);
}

export function getPhysicalTileIds(selectedTiles) {
  return selectedTiles.flatMap(getPhysicalIds);
}

export function getConcealedTileIds(selectedTiles) {
  return selectedTiles.filter((item) => !isMeldItem(item));
}

export function getFixedMeldCount(selectedTiles) {
  return selectedTiles.filter(isMeldItem).length;
}

export function getFixedMelds(selectedTiles) {
  return selectedTiles.filter(isMeldItem).map((item) => ({
    type: item.type === 'chi' ? 'sequence' : 'triplet',
    sourceType: item.type,
    tiles: getEffectiveIds(item),
    open: ['chi', 'pon', 'kan'].includes(item.type),
    kan: ['kan', 'ankan'].includes(item.type),
  }));
}

export function hasOpenMeld(selectedTiles) {
  return selectedTiles.some((item) => isMeldItem(item) && ['chi', 'pon', 'kan'].includes(item.type));
}

export function getKanCount(selectedTiles) {
  return selectedTiles.filter((item) => isMeldItem(item) && ['kan', 'ankan'].includes(item.type)).length;
}

export default function TilePicker({ selectedTiles, setSelectedTiles, maxTiles = 13, title = '패 선택' }) {
  const [meldMode, setMeldMode] = useState(null);
  const effectiveIds = getEffectiveTileIds(selectedTiles);
  const physicalIds = selectedTiles.flatMap(getPhysicalIds);
  const physicalCounts = countIds(physicalIds);
  const effectiveCount = effectiveIds.length;
  const canShowWinningTile = effectiveCount === 14;
  const lastOriginalIndex = selectedTiles.length - 1;

  const toggleMeldMode = (mode) => {
    setMeldMode((prev) => (prev === mode ? null : mode));
  };

  const wouldExceedPhysicalFour = (ids) => {
    const next = { ...physicalCounts };
    ids.forEach((id) => { next[id] = (next[id] || 0) + 1; });
    return Object.values(next).some((count) => count > 4);
  };

  const addTile = (id) => {
    if (meldMode === 'chi') {
      const tiles = makeChiTiles(id);
      if (!tiles || effectiveCount + 3 > maxTiles || wouldExceedPhysicalFour(tiles)) return;
      setSelectedTiles((prev) => [...prev, { type: 'chi', tiles, rotatedIndex: 0 }]);
      return;
    }

    if (meldMode === 'pon') {
      const tiles = [id, id, id];
      if (effectiveCount + 3 > maxTiles || (physicalCounts[id] || 0) >= 2 || wouldExceedPhysicalFour(tiles)) return;
      setSelectedTiles((prev) => [...prev, { type: 'pon', tiles, rotatedIndex: 0 }]);
      return;
    }

    if (meldMode === 'kan') {
      const tiles = [id, id, id, id];
      if (effectiveCount + 3 > maxTiles || (physicalCounts[id] || 0) >= 1 || wouldExceedPhysicalFour(tiles)) return;
      setSelectedTiles((prev) => [...prev, { type: 'kan', tiles, rotatedIndex: 0 }]);
      return;
    }

    if (meldMode === 'ankan') {
      const tiles = [id, id, id, id];
      if (effectiveCount + 3 > maxTiles || (physicalCounts[id] || 0) >= 1 || wouldExceedPhysicalFour(tiles)) return;
      setSelectedTiles((prev) => [...prev, { type: 'ankan', tiles, backIndexes: [1, 2] }]);
      return;
    }

    if (effectiveCount >= maxTiles) return;
    if ((physicalCounts[id] || 0) >= 4) return;
    setSelectedTiles((prev) => [...prev, id]);
  };

  const removeItemAt = (targetOriginalIndex) => {
    setSelectedTiles((prev) => prev.filter((_, index) => index !== targetOriginalIndex));
  };

  const isDisabled = (tile) => {
    if (meldMode === 'chi') {
      const tiles = makeChiTiles(tile.id);
      return !tiles || effectiveCount + 3 > maxTiles || wouldExceedPhysicalFour(tiles);
    }
    if (meldMode === 'pon') {
      return effectiveCount + 3 > maxTiles || (physicalCounts[tile.id] || 0) >= 2 || wouldExceedPhysicalFour([tile.id, tile.id, tile.id]);
    }
    if (meldMode === 'kan' || meldMode === 'ankan') {
      return effectiveCount + 3 > maxTiles || (physicalCounts[tile.id] || 0) >= 1 || wouldExceedPhysicalFour([tile.id, tile.id, tile.id, tile.id]);
    }
    return effectiveCount >= maxTiles || (physicalCounts[tile.id] || 0) >= 4;
  };

  return (
    <Section>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <SectionTitle>{title}</SectionTitle>
        <ClearButton type="button" onClick={() => setSelectedTiles([])}>초기화</ClearButton>
      </div>

      <MeldModeWrap aria-label="몸통 선택 모드">
        {['chi', 'pon', 'kan', 'ankan'].map((mode) => (
          <MeldButton key={mode} type="button" $active={meldMode === mode} onClick={() => toggleMeldMode(mode)}>
            {MELD_LABELS[mode]}
          </MeldButton>
        ))}
      </MeldModeWrap>

      {TILE_GROUPS.map((group) => (
        <Group key={group.key}>
          <GroupTitle>{group.label}</GroupTitle>
          <TileGrid>
            {group.tiles.map((tile) => {
              if ((physicalCounts[tile.id] || 0) >= 4) return null;
              const disabled = isDisabled(tile);
              return (
                <TileButton
                  key={tile.id}
                  type="button"
                  title={tile.label}
                  disabled={disabled}
                  $active={(physicalCounts[tile.id] || 0) > 0}
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
        <span>선택된 패 {effectiveCount} / {maxTiles} {canShowWinningTile ? '· 주황 테두리: 마지막 선택패(화료패)' : ''}</span>
        <SelectedGrid>
          {selectedTiles.length === 0 ? (
            <Empty>패를 클릭해 선택하세요.</Empty>
          ) : selectedTiles.map((item, originalIndex) => {
            const isLastTile = !isMeldItem(item) && originalIndex === lastOriginalIndex && canShowWinningTile;
            if (!isMeldItem(item)) {
              const tile = TILE_MAP.get(item);
              return (
                <SelectedButton
                  key={`${item}-${originalIndex}`}
                  type="button"
                  title={`${tile.label} 제거${isLastTile ? ' / 마지막 선택패' : ''}`}
                  onClick={() => removeItemAt(originalIndex)}
                  $last={isLastTile}
                >
                  <TileFace>{tile.unicode}</TileFace>
                  {isLastTile && <LastBadge>화료</LastBadge>}
                </SelectedButton>
              );
            }

            return (
              <MeldGroupButton
                key={`${item.type}-${originalIndex}-${item.tiles.join('-')}`}
                type="button"
                title={`${MELD_LABELS[item.type]} 제거`}
                onClick={() => removeItemAt(originalIndex)}
              >
                {item.tiles.map((id, tileIndex) => {
                  const tile = TILE_MAP.get(id);
                  const isBack = item.type === 'ankan' && item.backIndexes?.includes(tileIndex);
                  return (
                    <MeldTile key={`${id}-${tileIndex}`} $back={isBack}  $rotated={item.rotatedIndex === tileIndex}>
                      {!isBack && <MeldTileFace>{tile.unicode}</MeldTileFace>}
                    </MeldTile>
                  );
                })}
                <MeldBadge>{MELD_LABELS[item.type]}</MeldBadge>
              </MeldGroupButton>
            );
          })}
        </SelectedGrid>
      </Summary>
    </Section>
  );
}

