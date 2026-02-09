import React from 'react';
import styled from 'styled-components';

const Grid = styled.main`
  display: grid;
  padding: 16px;
  gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: 450px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
`;

const Item = styled.div`
  height: 225px;
  background: white;
  border-radius: 8px;
  padding: 16px;
`;

export default function FluidGrid() {
  return (
    <Grid>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Grid>
  );
}
