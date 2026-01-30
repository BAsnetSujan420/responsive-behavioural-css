import React from 'react';
import styled from 'styled-components';

export const Row = styled.div`
  --box-size: 75px;
  --hue: 0deg;
  --range: 20deg;

  display: flex;
  flex-wrap: wrap;
  width: calc(var(--box-size) * 4);
  height: calc(var(--box-size) * 4);
`;

export const Box = styled.div`
  --angle: 45deg;
  --radius: 4px;
  --rotate: 5deg;
  --start-color: calc(var(--hue) - var(--range));
  --end-color: calc(var(--hue) + var(--range));
  
  width: var(--box-size);
  height: var(--box-size);

  background: linear-gradient(
     var(--angle),
    hsl(var(--start-color) 100% 50%),
    hsl(var(--end-color) 100% 50%)
    );
  );
  
  border-radius: var(--radius);
  transform: rotate(var(--rotate));

  &:nth-of-type(2n) {
    --hue: 30deg;
  }
  &:nth-of-type(3n) {
    --hue: -30deg;
    --rotate: 120deg;
  }
  &:nth-of-type(9n - 3) {
    --hue: -90deg;
    --rotate: 50deg;
  }
  &:nth-of-type(3n + 1) {
    --angle: -60deg;
    --rotate: 150deg;
  }
  &:nth-of-type(2n + 1) {
    --range: 50deg;
  }
  &:nth-of-type(7n - 6) {
    --range: 120deg;
  }
  &:nth-of-type(14) {
    --radius: 50%;
  }
`;

function BeachDay() {
  return (
    <Row>
      {Array.from({ length: 16 }, (_, i) => (
        <Box key={i} style={{ '--index': i + 1 }} />
      ))}
    </Row>
  );
}

export default BeachDay;
