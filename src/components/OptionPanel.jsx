import styled from 'styled-components';
import { PLAYER_TYPES, WIN_TYPES, WINDS } from '../logic/riichiData';
import { Section, SectionTitle } from './Section';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
`;

const Field = styled.label`
  display: grid;
  gap: 6px;
  font-size: 13px;
  color: #665d50;
`;

const Select = styled.select`
  height: 42px;
  border-radius: 12px;
  border: 1px solid rgba(50,35,20,0.18);
  background: #fff;
  padding: 0 10px;
`;

const Input = styled.input`
  height: 42px;
  border-radius: 12px;
  border: 1px solid rgba(50,35,20,0.18);
  background: #fff;
  padding: 0 10px;
`;

const Check = styled.label`
  display: flex;
  gap: 8px;
  align-items: center;
  min-height: 42px;
  font-weight: 700;
`;

export default function OptionPanel({ state, setState }) {
  const set = (key, value) => setState((prev) => ({ ...prev, [key]: value }));
  return (
    <Section>
      <SectionTitle>계산 조건</SectionTitle>
      <Grid>
        <Field>
          화료 방식
          <Select value={state.winType} onChange={(e) => set('winType', e.target.value)}>
            {WIN_TYPES.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
          </Select>
        </Field>
        <Field>
          친/자
          <Select value={state.playerType} onChange={(e) => set('playerType', e.target.value)}>
            {PLAYER_TYPES.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
          </Select>
        </Field>
        <Field>
          부
          <Input type="number" min="20" step="10" value={state.fu} onChange={(e) => set('fu', e.target.value)} />
        </Field>
        <Field>
          본장
          <Input type="number" min="0" value={state.honba} onChange={(e) => set('honba', e.target.value)} />
        </Field>
        <Field>
          장풍
          <Select value={state.roundWind} onChange={(e) => set('roundWind', e.target.value)}>
            {WINDS.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
          </Select>
        </Field>
        <Field>
          자풍
          <Select value={state.seatWind} onChange={(e) => set('seatWind', e.target.value)}>
            {WINDS.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
          </Select>
        </Field>
        <Check>
          <input type="checkbox" checked={state.isClosed} onChange={(e) => set('isClosed', e.target.checked)} />
          멘젠
        </Check>
      </Grid>
    </Section>
  );
}
