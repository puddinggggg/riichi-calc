import { useEffect } from 'react';
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


const FU_OPTIONS = [20, 25, ...Array.from({ length: 9 }, (_, index) => 30 + index * 10)];

const Check = styled.label`
  display: flex;
  gap: 8px;
  align-items: center;
  min-height: 42px;
  font-weight: 700;
  opacity: ${({ $disabled }) => ($disabled ? 0.55 : 1)};
`;

export default function OptionPanel({
  state,
  setState,
  hideFu = false,
  showRiichiOption = false,
  lockIsClosed = false,
}) {
  const set = (key, value) => setState((prev) => ({ ...prev, [key]: value }));

  useEffect(() => {
    if (!state.isClosed && state.riichiStatus !== 'none') {
      setState((prev) => ({ ...prev, riichiStatus: 'none' }));
    }
  }, [state.isClosed, state.riichiStatus, setState]);

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

        {!hideFu && (
          <Field>
            부
            <Select value={String(state.fu)} onChange={(e) => set('fu', Number(e.target.value))}>
              {FU_OPTIONS.map((fu) => (
                <option key={fu} value={fu}>{fu}부</option>
              ))}
            </Select>
          </Field>
        )}

        <Field>
          본장
          <Input type="number" min="0" value={state.honba} onChange={(e) => set('honba', e.target.value)} />
        </Field>

        {showRiichiOption && (
          <Field>
            리치 여부
            <Select
              value={state.isClosed ? (state.riichiStatus || 'none') : 'none'}
              onChange={(e) => set('riichiStatus', e.target.value)}
              disabled={!state.isClosed}
            >
              <option value="none">리치안함</option>
              <option value="riichi">리치</option>
              <option value="doubleRiichi">더블리치</option>
            </Select>
          </Field>
        )}

        <Field>
          장풍
          <Select value={state.roundWind} onChange={(e) => set('roundWind', e.target.value)}>
            {WINDS.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
          </Select>
        </Field>

        <Field>
          자풍
          <Select
            value={state.seatWind}
            onChange={(e) => {
              const seatWind = e.target.value;
              setState((prev) => ({
                ...prev,
                seatWind,
                playerType: seatWind === 'east' ? 'dealer' : 'nonDealer',
              }));
            }}
          >
            {WINDS.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
          </Select>
        </Field>

        <Check $disabled={lockIsClosed}>
          <input
            type="checkbox"
            checked={state.isClosed}
            disabled={lockIsClosed}
            onChange={(e) => set('isClosed', e.target.checked)}
          />
          멘젠
        </Check>
      </Grid>
    </Section>
  );
}