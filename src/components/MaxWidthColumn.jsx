import React from 'react'
import styled from 'styled-components';

const Column = styled.div`
   max-width: 800px;
   margin: 0 auto;
   padding: 1rem;
`;

const H2 = styled.h2`
 font-size: clamp(
      1.5rem,
      4vw + 1rem,
      3rem
    );
    margin-bottom: 0.5em;
`


function MaxWidthColumn() {
  return (
    <Column>
    <H2>
        This is a fluid headline!
    </H2>
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
  </p>
  <p>
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
  </p>
</Column>

  )
}

export default MaxWidthColumn