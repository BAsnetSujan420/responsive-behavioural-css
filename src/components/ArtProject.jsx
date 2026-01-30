import React from 'react';
import styled from 'styled-components';

export const Row = styled.div`
  --box-size: 75px;

  display: flex;
  flex-wrap: wrap;
  width: calc(var(--box-size) * 4);
  height: calc(var(--box-size) * 4);
`;

export const Box = styled.div`
  width: var(--box-size);
  height: var(--box-size);

  background: hsl(calc(var(--index) * -7deg) 100% 50%);
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
