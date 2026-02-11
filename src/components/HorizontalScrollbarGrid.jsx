import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
   grid-template-columns:
      175px minmax(0, 1fr);
  }
  gap: 16px;
`;

const Intro = styled.div``;

const ImageContainer = styled.div``;

const ImageList = styled.ul`
  display: flex;
  gap: 16px;
  max-width: 100%;
  overflow: auto;

  list-style-type: none;
  padding: 0;
  margin: 0;

  img {
    height: 200px;
    display: block;
  }
`;

export default function HorizontalScrollbarGrid() {
  return (
    <Grid>
      <Intro>
        <h2>My Photos</h2>
        <p>Here are some animals I saw on holiday:</p>
      </Intro>

      <ImageContainer>
        <ImageList>
          <li>
            <img src="https://courses.joshwcomeau.com/cfj-mats/cat-four-300px.jpg" />
          </li>
          <li>
            <img src="https://courses.joshwcomeau.com/cfj-mats/otter.jpg" />
          </li>
          <li>
            <img src="https://courses.joshwcomeau.com/cfj-mats/dog-three-300px.jpg" />
          </li>
          <li>
            <img src="https://courses.joshwcomeau.com/cfj-mats/meerkat.jpg" />
          </li>
        </ImageList>
      </ImageContainer>
    </Grid>
  );
}
