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

// 동시에 성립할 수 없는 역 조합입니다.
// 한쪽을 선택하면 반대쪽은 비활성화되고, 새 역을 선택할 때 기존 충돌 역은 자동 해제됩니다.
const CONFLICTS = {
  riichi: ['doubleRiichi'],
  doubleRiichi: ['riichi'],
  pinfu: ['yakuhai', 'toitoi', 'sananko', 'sanshokuDouko', 'sanKantsu'],
  yakuhai: ['pinfu'],
  toitoi: ['pinfu', 'ipeiko', 'ryanpeko', 'sanshokuDoujun', 'ittsuu'],
sananko: ['pinfu'],
sanshokuDouko: ['pinfu', 'sanshokuDoujun', 'ittsuu', 'ipeiko', 'ryanpeko'],
sanKantsu: ['pinfu', 'ittsuu'],
ipeiko: ['toitoi', 'sanshokuDouko', 'ryanpeko'],
ryanpeko: ['ipeiko', 'toitoi', 'sanshokuDouko', 'sanshokuDoujun', 'ittsuu'],
sanshokuDoujun: ['toitoi', 'sanshokuDouko', 'ittsuu'],
ittsuu: ['toitoi', 'sanshokuDoujun', 'sanshokuDouko', 'sanKantsu', 'ryanpeko', 'chanta', 'junchan', 'tanyao'],
chanta: ['junchan', 'tanyao', 'ittsuu'],
junchan: ['chanta', 'honitsu', 'tanyao', 'ittsuu'],
  honitsu: ['chinitsu', 'junchan'],
  chinitsu: ['honitsu'],
  tanyao: ['chanta', 'junchan'],
};

function getConflicts(id) {
  return new Set(CONFLICTS[id] || []);
}

function getBlockingSelectedYaku(yakuId, selectedIds) {
  return selectedIds.find((selectedId) => getConflicts(yakuId).has(selectedId) || getConflicts(selectedId).has(yakuId));
}

export default function YakuSelector({ selected, setSelected, isClosed, setOptions }) {
  const selectedMap = new Map(selected.map((item) => [item.id, item]));
  const selectedIds = selected.map((item) => item.id);
  const nameById = new Map(YAKU_LIST.map((item) => [item.id, item.name]));

  const toggle = (id) => {
    setSelected((prev) => {
      const exists = prev.some((item) => item.id === id);
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
        {YAKU_LIST.map((yaku) => {
          const active = selectedMap.has(yaku.id);
          const han = isClosed ? yaku.closedHan : yaku.openHan;
          const closedOnlyDisabled = han <= 0;
          const blocker = active ? null : getBlockingSelectedYaku(yaku.id, selectedIds);
          const disabled = closedOnlyDisabled || Boolean(blocker);
          const subText = closedOnlyDisabled
            ? '멘젠 전용'
            : blocker
              ? `${nameById.get(blocker)}와 동시 불가`
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
            </YakuButton>
          );
        })}
      </Grid>
    </Section>
  );
}
