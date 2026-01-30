import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Row = styled.div`
  --box-size: 75px;

  display: flex;
  flex-wrap: wrap;
  width: calc(var(--box-size) * 4);
  height: calc(var(--box-size) * 4);
`;

const slowTate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const Box = styled.div`
  width: var(--box-size);
  height: var(--box-size);

  background: linear-gradient(
    calc(135deg + var(--index) * 33deg),
    hsl(calc(275deg + var(--index) * -1deg) 100% 50%),
    hsl(calc(340deg + var(--index) * -10deg) 100% 50%)
  );

  &:nth-of-type(3n) {
    border-radius: 25%;
  }

  animation: ${slowTate} calc(500ms + var(--index) * 200ms) 2 linear;
`;

function ArtProject() {
  return (
    <Row>
      {Array.from({ length: 16 }, (_, i) => (
        <Box key={i} style={{ '--index': i + 1 }} />
      ))}
    </Row>
  );
}

export default ArtProject;
