import React from 'react';

import styled, { createGlobalStyle } from 'styled-components';

// Global styles
export const GlobalStyles = createGlobalStyle`
  body {
    background: hsl(250deg 10% 90%);
    color: hsl(250deg 20% 20%);
    margin: 0;
    font-family: sans-serif;
  }

  a {
    color: hsl(250deg 100% 50%);
    text-decoration: none;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    margin-bottom: 8px;
  }

  @media (prefer-color-scheme: dark){
  
  }
`;

const Main = styled.main`
  padding: 32px;
`;

const Nav = styled.nav`
  margin-top: 16px;
`;

function DarkMode() {
  return (
    <Main>
      <h1>Artificial Plants</h1>
      <p>
        Artificial plants and flowers bring the vibrance of plants without the
        work. Shop many varieties and types:
      </p>
      <Nav>
        <ul>
          <li>
            <a href="/large">Large plants</a>
          </li>
          <li>
            <a href="/bouq">Bouquets</a>
          </li>
          <li>
            <a href="/vines">Vines</a>
          </li>
        </ul>
      </Nav>
    </Main>
  );
}

export default DarkMode;
