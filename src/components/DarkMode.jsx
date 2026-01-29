import React from 'react';

import styled, { createGlobalStyle } from 'styled-components';

// Global styles
export const GlobalStyles = createGlobalStyle`
  html {
  --color-background: hsl(250deg 10% 90%);
  --color-text: hsl(250deg 20% 20%);
  --color-primary: hsl(250deg 100% 50%);
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    margin: 0;
    font-family: sans-serif;
  }

  a {
    color: var(--color-primary);
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

  @media (prefers-color-scheme: dark){
  html{
    --color-background: hsl(250deg 10% 10%);
    --color-text: hsl(250deg 20% 80%);
    --color-primary: hsl(250deg 100% 70%);
   }
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
