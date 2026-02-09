import React from 'react';
import styled from 'styled-components';

const Grid = styled.main`
  --min-column-width: min(320px, 100%);
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--min-column-width), 1fr)
  );
  gap: 16px;
  padding: 16px;
  filter: drop-shadow(0px 2px 8px hsl(0deg 0% 0% / 0.25));
`;

const Item = styled.div`
  height: 75px;
  background: white;
  border-radius: 4px;
`;

export default function GridSnippet() {
  return (
    <>
      <Grid>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Grid>
    </>
  );
}
