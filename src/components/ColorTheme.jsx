import React from 'react';

import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-gray-100: hsl(270deg 20% 95%);
    --color-gray-300: hsl(270deg 10% 75%);
    --color-gray-500: hsl(270deg 5% 50%);
    --color-gray-700: hsl(270deg 10% 30%);
    --color-gray-900: hsl(270deg 15% 15%);

    --color-primary: hsl(245deg 90% 50%);
    --color-primary-light: hsl(245deg 90% 70%);
    --color-primary-dark: hsl(245deg 90% 30%);
    --color-primary-alpha-300: hsl(245deg 90% 50% / 0.3);
    --color-primary-alpha-500: hsl(245deg 90% 50% / 0.5);
    --color-primary-alpha-700: hsl(245deg 90% 50% / 0.7);

    --color-secondary: hsl(350deg 95% 50%);
    --color-secondary-light: hsl(350deg 95% 70%);
    --color-secondary-dark: hsl(350deg 95% 30%);
    --color-secondary-alpha-300: hsl(350deg 95% 50% / 0.3);
    --color-secondary-alpha-500: hsl(350deg 95% 50% / 0.5);
    --color-secondary-alpha-700: hsl(350deg 95% 50% / 0.7);
  }
`;

const Main = styled.main`
  border: solid black;
  padding: 8px;
  background: white;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 0;

  &.with-bg {
    padding: 8px;
    background-image: url('https://courses.joshwcomeau.com/cfj-mats/nasa-earth-shot.jpg');
    background-size: cover;
    background-position: center;
  }
`;

const DemoBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background: ${(props) => `var(${props.color})`};
`;

function ColorTheme() {
  return (
    <Main>
      <Row>
        <DemoBox color="--color-gray-100" />
        <DemoBox color="--color-gray-300" />
        <DemoBox color="--color-gray-500" />
        <DemoBox color="--color-gray-700" />
        <DemoBox color="--color-gray-900" />
      </Row>

      <Row>
        <Row>
          <DemoBox color="--color-primary-light" />
          <DemoBox color="--color-primary" />
          <DemoBox color="--color-primary-dark" />
        </Row>
        <Row className="with-bg">
          <DemoBox color="--color-primary" />
          <DemoBox color="--color-primary-alpha-700" />
          <DemoBox color="--color-primary-alpha-500" />
          <DemoBox color="--color-primary-alpha-300" />
        </Row>
      </Row>

      <Row>
        <Row>
          <DemoBox color="--color-secondary-light" />
          <DemoBox color="--color-secondary" />
          <DemoBox color="--color-secondary-dark" />
        </Row>
        <Row className="with-bg">
          <DemoBox color="--color-secondary" />
          <DemoBox color="--color-secondary-alpha-700" />
          <DemoBox color="--color-secondary-alpha-500" />
          <DemoBox color="--color-secondary-alpha-300" />
        </Row>
      </Row>
    </Main>
  );
}

export default ColorTheme;
