import styled from 'styled-components';
import { Section, SectionTitle } from './Section';

const Total = styled.div`
  font-size: clamp(34px, 7vw, 56px);
  font-weight: 900;
  letter-spacing: -0.04em;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  background: #25211c;
  color: #fff;
  font-size: 13px;
  margin-left: 8px;
`;

const Payment = styled.div`
  margin-top: 8px;
  color: #5d554b;
`;

const Warning = styled.div`
  padding: 14px;
  border-radius: 14px;
  background: #fff6d8;
  color: #765700;
`;

export default function ResultPanel({ result, han }) {
  return (
    <Section>
      <SectionTitle>계산 결과</SectionTitle>
      {result.error ? (
        <Warning>{result.error}</Warning>
      ) : (
        <>
          <Total>{result.total.toLocaleString()}점</Total>
          <div>{han}판 {result.fu}부 {result.limit && <Badge>{result.limit}</Badge>}</div>
          {result.payments.map((item) => (
            <Payment key={item.label}>{item.label}: {item.points.toLocaleString()}점</Payment>
          ))}
        </>
      )}
    </Section>
  );
}
