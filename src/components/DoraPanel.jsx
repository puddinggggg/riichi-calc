import styled from 'styled-components';
import { Section, SectionTitle } from './Section';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
`;

const Field = styled.label`
  display: grid;
  gap: 6px;
  font-size: 13px;
  color: #665d50;
`;

const Input = styled.input`
  height: 42px;
  border-radius: 12px;
  border: 1px solid rgba(50,35,20,0.18);
  background: #fff;
  padding: 0 10px;
  width: 66%;
`;

export default function DoraPanel({ state, setState }) {
  const set = (key, value) => setState((prev) => ({ ...prev, [key]: Math.max(0, Number(value) || 0) }));
  return (
    <Section>
      <SectionTitle>도라</SectionTitle>
      <Grid>
        <Field>
          도라 개수
          <Input type="number" min="0" value={state.doraCount} onChange={(e) => set('doraCount', e.target.value)} />
        </Field>
        <Field>
          우라도라 개수
          <Input type="number" min="0" value={state.uraDoraCount} onChange={(e) => set('uraDoraCount', e.target.value)} />
        </Field>
        <Field>
          적도라 개수
          <Input type="number" min="0" value={state.akaDoraCount} onChange={(e) => set('akaDoraCount', e.target.value)} />
        </Field>
      </Grid>
    </Section>
  );
}
