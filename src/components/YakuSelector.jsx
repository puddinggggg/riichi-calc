import styled from 'styled-components';
import { YAKU_LIST } from '../logic/riichiData';
import { Section, SectionTitle } from './Section';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
  gap: 10px;
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
`;

const Name = styled.div`
  font-weight: 700;
`;

const Sub = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: #716757;
`;

export default function YakuSelector({ selected, setSelected, isClosed, setOptions }) {
  const selectedMap = new Map(selected.map((item) => [item.id, item]));

  const toggle = (id) => {
    setSelected((prev) => {
      const exists = prev.some((item) => item.id === id);
      const next = exists ? prev.filter((item) => item.id !== id) : [...prev, { id, count: 1 }];
      if (!exists && id === 'menzenTsumo') {
        setOptions?.((optionPrev) => ({ ...optionPrev, winType: 'tsumo' }));
      }
      return next;
    });
  };

  return (
    <Section>
      <SectionTitle>역 선택</SectionTitle>
      <Grid>
        {YAKU_LIST.map((yaku) => {
          const active = selectedMap.has(yaku.id);
          const han = isClosed ? yaku.closedHan : yaku.openHan;
          const disabled = han <= 0;
          return (
            <YakuButton
              key={yaku.id}
              type="button"
              $active={active}
              onClick={() => !disabled && toggle(yaku.id)}
              disabled={disabled}
              style={{ opacity: disabled ? 0.4 : 1 }}
            >
              <Name>{yaku.name}</Name>
              <Sub>{han > 0 ? `${han}판` : '멘젠 전용'}</Sub>
            </YakuButton>
          );
        })}
      </Grid>
    </Section>
  );
}
