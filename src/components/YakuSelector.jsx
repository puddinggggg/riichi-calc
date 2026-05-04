import styled from 'styled-components';
import { YAKU_LIST } from '../logic/riichiData';
import { Section, SectionTitle } from './Section';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
  gap: 10px;

  @media (max-width: 680px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }
`;

const YakuButton = styled.button`
  border: 1px solid ${({ $active }) => ($active ? '#1f7a50' : 'rgba(50,35,20,0.18)')};
  background: ${({ $active }) => ($active ? '#e3f4ea' : '#fff')};
  color: #24211d;
  border-radius: 14px;
  padding: 10px 12px;
  cursor: pointer;
  text-align: left;
  min-height: 58px;

  @media (max-width: 680px) {
    min-height: 52px;
    padding: 8px 9px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const Name = styled.div`
  font-weight: 700;
`;

const Sub = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: #716757;
`;

const CountControls = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
`;

const CountButton = styled.button`
  width: 28px;
  height: 28px;
  border: 1px solid rgba(50,35,20,0.18);
  background: #fff;
  border-radius: 999px;
  font-weight: 900;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const CountLabel = styled.span`
  font-size: 13px;
  font-weight: 900;
  min-width: 32px;
  text-align: center;
`;

// 동시에 성립할 수 없는 역 조합입니다.
// 한쪽을 선택하면 반대쪽은 비활성화되고, 새 역을 선택할 때 기존 충돌 역은 자동 해제됩니다.
const CONFLICTS = {
  riichi: ['doubleRiichi'],
  doubleRiichi: ['riichi'],
  pinfu: ['yakuhai', 'toitoi', 'sananko', 'sanshokuDouko', 'sanKantsu', 'chiitoi'],
  chiitoi: ['pinfu', 'yakuhai', 'toitoi', 'sananko', 'sanshokuDoujun', 'ittsuu', 'sanshokuDouko', 'sanKantsu', 'ipeiko', 'ryanpeko', 'chanta', 'junchan'],
  yakuhai: ['pinfu', 'chiitoi'],
  toitoi: ['pinfu', 'ipeiko', 'ryanpeko', 'sanshokuDoujun', 'ittsuu', 'chiitoi'],
  sananko: ['pinfu', 'chiitoi'],
  sanshokuDouko: ['pinfu', 'sanshokuDoujun', 'ittsuu', 'ipeiko', 'ryanpeko', 'chiitoi'],
  sanKantsu: ['pinfu', 'ittsuu', 'chiitoi'],
  ipeiko: ['toitoi', 'sanshokuDouko', 'ryanpeko', 'chiitoi'],
  ryanpeko: ['ipeiko', 'toitoi', 'sanshokuDouko', 'sanshokuDoujun', 'ittsuu', 'chiitoi'],
  sanshokuDoujun: ['toitoi', 'sanshokuDouko', 'ittsuu', 'chiitoi'],
  ittsuu: ['toitoi', 'sanshokuDoujun', 'sanshokuDouko', 'sanKantsu', 'ryanpeko', 'chanta', 'junchan', 'tanyao', 'chiitoi'],
  chanta: ['junchan', 'tanyao', 'ittsuu', 'chiitoi'],
  junchan: ['chanta', 'honitsu', 'tanyao', 'ittsuu', 'chiitoi'],
  honitsu: ['chinitsu', 'junchan'],
  chinitsu: ['honitsu'],
  tanyao: ['chanta', 'junchan', 'ittsuu'],
};

function getConflicts(id) {
  return new Set(CONFLICTS[id] || []);
}

function getBlockingSelectedYaku(yakuId, selectedIds) {
  return selectedIds.find((selectedId) => getConflicts(yakuId).has(selectedId) || getConflicts(selectedId).has(yakuId));
}

function isYakuman(yaku) {
  return yaku.closedHan >= 13 || yaku.openHan >= 13;
}

export default function YakuSelector({ selected, setSelected, isClosed, setOptions }) {
  const selectedMap = new Map(selected.map((item) => [item.id, item]));
  const selectedIds = selected.map((item) => item.id);
  const nameById = new Map(YAKU_LIST.map((item) => [item.id, item.name]));
  const selectableYaku = YAKU_LIST.filter((yaku) => !isYakuman(yaku));

  const setYakuhaiCount = (nextCount) => {
    setSelected((prev) => {
      const next = Math.max(0, Math.min(4, nextCount));
      if (next === 0) return prev.filter((item) => item.id !== 'yakuhai');
      const exists = prev.some((item) => item.id === 'yakuhai');
      if (!exists) return [...prev, { id: 'yakuhai', count: next }];
      return prev.map((item) => (item.id === 'yakuhai' ? { ...item, count: next } : item));
    });
  };

  const toggle = (id) => {
    setSelected((prev) => {
      const exists = prev.some((item) => item.id === id);
      if (exists) return prev.filter((item) => item.id !== id);

      const conflicts = getConflicts(id);
      const next = prev.filter((item) => !conflicts.has(item.id) && !getConflicts(item.id).has(id));

      if (id === 'menzenTsumo') {
        setOptions?.((optionPrev) => ({ ...optionPrev, winType: 'tsumo', isClosed: true }));
      }

      if (id === 'chiitoi') {
        setOptions?.((optionPrev) => ({ ...optionPrev, fu: 25, isClosed: true }));
      }

      return [...next, { id, count: 1 }];
    });
  };

  return (
    <Section>
      <SectionTitle>역 선택</SectionTitle>
      <Grid>
        {selectableYaku.map((yaku) => {
          const active = selectedMap.has(yaku.id);
          const selectedItem = selectedMap.get(yaku.id);
          const han = isClosed ? yaku.closedHan : yaku.openHan;
          const closedOnlyDisabled = han <= 0;
          const blocker = active ? null : getBlockingSelectedYaku(yaku.id, selectedIds);
          const disabled = closedOnlyDisabled || Boolean(blocker);
          const subText = closedOnlyDisabled
            ? '멘젠 전용'
            : blocker
              ? `${nameById.get(blocker)}와 동시 불가`
              : yaku.id === 'yakuhai' && active
                ? `${han}판 × ${selectedItem.count || 1}`
                : `${han}판`;

          return (
            <YakuButton
              key={yaku.id}
              type="button"
              $active={active}
              onClick={() => !disabled && toggle(yaku.id)}
              disabled={disabled}
              style={{ opacity: disabled ? 0.4 : 1 }}
              title={blocker ? `${nameById.get(blocker)} 선택 중에는 ${yaku.name}을 선택할 수 없습니다.` : ''}
            >
              <Name>{yaku.name}</Name>
              <Sub>{subText}</Sub>
              {yaku.id === 'yakuhai' && active && (
                <CountControls onClick={(event) => event.stopPropagation()}>
                  <CountButton
                    type="button"
                    onClick={() => setYakuhaiCount((selectedItem.count || 1) - 1)}
                  >
                    −
                  </CountButton>
                  <CountLabel>{selectedItem.count || 1}개</CountLabel>
                  <CountButton
                    type="button"
                    onClick={() => setYakuhaiCount((selectedItem.count || 1) + 1)}
                    disabled={(selectedItem.count || 1) >= 4}
                  >
                    +
                  </CountButton>
                </CountControls>
              )}
            </YakuButton>
          );
        })}
      </Grid>
    </Section>
  );
}
