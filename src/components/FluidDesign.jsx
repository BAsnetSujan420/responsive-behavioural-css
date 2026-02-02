import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 8px;
  background: white;
  border-radius: 8px;
  margin: 16px 0;
  color: black;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding: 5px 16px 8px 8px;
`;

export const Bibliography = styled.nav`
  flex: 1;
  background: hsl(250deg 20% 90%);
  padding: 8px;
  padding-left: 32px;
  border-radius: 0 4px 4px 0;

  @media (max-width: 600px) {
    border-radius: 0 0 4px 4px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    color: hsl(250deg 100% 50%);
    text-underline-offset: 3px;
  }
`;

function FluidDesign() {
  return (
    <>
      <Wrapper>
        <Description>
          <h2>Becky Chambers</h2>
          <p>
            Becky Chambers is an American science fiction writer, and the author
            of the Hugo-award winning Wayfarers series. She is known for her
            imaginative world-building and character-driven stories.
          </p>
        </Description>
        <Bibliography>
          <ul>
            <li>
              <a href="/">A Psalm For The Wild-Built</a>
            </li>
            <li>
              <a href="/">The Galaxy, And The Ground Within</a>
            </li>
            <li>
              <a href="/">To Be Taught, If Fortunate</a>
            </li>
          </ul>
        </Bibliography>
      </Wrapper>
      <Wrapper>
        <Description>
          <h2>John Scalzi</h2>
          <p>
            John Michael Scalzi II is an American science fiction author and
            former president of the Science Fiction and Fantasy Writers of
            America. He is best known for his Old Man's War series, three novels
            of which have been nominated for the Hugo Award.
          </p>
        </Description>
        <Bibliography>
          <ul>
            <li>
              <a href="/">Old Man's War</a>
            </li>
            <li>
              <a href="/">Questions For A Soldier</a>
            </li>
            <li>
              <a href="/">The Ghost Brigades</a>
            </li>
          </ul>
        </Bibliography>
      </Wrapper>
    </>
  );
}

export default FluidDesign;
