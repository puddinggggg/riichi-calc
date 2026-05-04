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

const NameRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const Name = styled.div`
  font-weight: 700;
`;

const Sub = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: #716757;
`;

const Counter = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

const CountButton = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  border: 1px solid rgba(50,35,20,0.18);
  background: #fff;
  font-weight: 900;
  line-height: 1;
`;

const CONFLICTS = {
  riichi: ['doubleRiichi'],
  doubleRiichi: ['riichi'],
  pinfu: ['chiitoitsu', 'yakuhai', 'toitoi', 'sananko', 'sanshokuDouko', 'sanKantsu'],
  chiitoitsu: ['pinfu', 'yakuhai', 'ipeiko', 'ryanpeko', 'toitoi', 'sananko', 'sanshokuDoujun', 'ittsuu', 'sanshokuDouko', 'sanKantsu', 'chanta', 'junchan'],
  yakuhai: ['pinfu', 'chiitoitsu'],
  toitoi: ['pinfu', 'chiitoitsu', 'ipeiko', 'ryanpeko', 'sanshokuDoujun', 'ittsuu'],
  sananko: ['pinfu', 'chiitoitsu'],
  sanshokuDouko: ['pinfu', 'chiitoitsu', 'sanshokuDoujun', 'ittsuu', 'ipeiko', 'ryanpeko'],
  sanKantsu: ['pinfu', 'chiitoitsu', 'ittsuu'],
  ipeiko: ['chiitoitsu', 'toitoi', 'sanshokuDouko', 'ryanpeko'],
  ryanpeko: ['chiitoitsu', 'ipeiko', 'toitoi', 'sanshokuDouko', 'sanshokuDoujun', 'ittsuu'],
  sanshokuDoujun: ['chiitoitsu', 'toitoi', 'sanshokuDouko', 'ittsuu'],
  ittsuu: ['chiitoitsu', 'toitoi', 'sanshokuDoujun', 'sanshokuDouko', 'sanKantsu', 'ryanpeko', 'tanyao'],
  chanta: ['chiitoitsu', 'junchan', 'tanyao'],
  junchan: ['chiitoitsu', 'chanta', 'honitsu', 'tanyao'],
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

const selectableYakuList = YAKU_LIST.filter((yaku) => yaku.closedHan < 13 && yaku.openHan < 13);

export default function YakuSelector({ selected, setSelected, isClosed, setOptions }) {
  const selectedMap = new Map(selected.map((item) => [item.id, item]));
  const selectedIds = selected.map((item) => item.id);
  const nameById = new Map(YAKU_LIST.map((item) => [item.id, item.name]));

  const changeYakuhaiCount = (delta) => {
    setSelected((prev) => {
      const exists = prev.find((item) => item.id === 'yakuhai');
      if (!exists && delta > 0) {
        const conflicts = getConflicts('yakuhai');
        const next = prev.filter((item) => !conflicts.has(item.id) && !getConflicts(item.id).has('yakuhai'));
        return [...next, { id: 'yakuhai', count: 1 }];
      }
      if (!exists) return prev;

      const nextCount = (exists.count || 1) + delta;
      if (nextCount <= 0) return prev.filter((item) => item.id !== 'yakuhai');
      if (nextCount > 4) return prev;
      return prev.map((item) => (item.id === 'yakuhai' ? { ...item, count: nextCount } : item));
    });
  };

  const toggle = (id) => {
    setSelected((prev) => {
      const exists = prev.find((item) => item.id === id);

      // 역패 버튼 자체는 1개 추가 기능으로 유지합니다.
      // 선택된 역패의 -/+ 버튼으로 개수를 줄이거나 늘릴 수 있습니다.
      if (id === 'yakuhai') {
        if (!exists) {
          const conflicts = getConflicts(id);
          const next = prev.filter((item) => !conflicts.has(item.id) && !getConflicts(item.id).has(id));
          return [...next, { id, count: 1 }];
        }
        if ((exists.count || 1) >= 4) return prev;
        return prev.map((item) => (item.id === id ? { ...item, count: (item.count || 1) + 1 } : item));
      }

      if (exists) return prev.filter((item) => item.id !== id);

      const conflicts = getConflicts(id);
      const next = prev.filter((item) => !conflicts.has(item.id) && !getConflicts(item.id).has(id));

      if (id === 'menzenTsumo') {
        setOptions?.((optionPrev) => ({ ...optionPrev, winType: 'tsumo', isClosed: true }));
      }

      return [...next, { id, count: 1 }];
    });
  };

  return (
    <Section>
      <SectionTitle>역 선택</SectionTitle>
      <Grid>
        {selectableYakuList.map((yaku) => {
          const selectedItem = selectedMap.get(yaku.id);
          const active = Boolean(selectedItem);
          const han = isClosed ? yaku.closedHan : yaku.openHan;
          const closedOnlyDisabled = han <= 0;
          const blocker = active ? null : getBlockingSelectedYaku(yaku.id, selectedIds);
          const disabled = closedOnlyDisabled || Boolean(blocker);
          const countText = yaku.id === 'yakuhai' && active ? ` · ${selectedItem.count || 1}개` : '';
          const subText = closedOnlyDisabled
            ? '멘젠 전용'
            : blocker
              ? `${nameById.get(blocker)}와 동시 불가`
              : `${han}판${countText}`;

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
              <NameRow>
                <Name>{yaku.name}{countText}</Name>
                {yaku.id === 'yakuhai' && active && (
                  <Counter onClick={(event) => event.stopPropagation()}>
                    <CountButton
                      role="button"
                      tabIndex={0}
                      aria-label="역패 줄이기"
                      onClick={() => changeYakuhaiCount(-1)}
                    >−</CountButton>
                    <CountButton
                      role="button"
                      tabIndex={0}
                      aria-label="역패 늘리기"
                      onClick={() => changeYakuhaiCount(1)}
                    >+</CountButton>
                  </Counter>
                )}
              </NameRow>
              <Sub>{subText}</Sub>
            </YakuButton>
          );
        })}
      </Grid>
    </Section>
  );
}
