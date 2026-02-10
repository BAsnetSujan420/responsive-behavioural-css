import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    'header header'
    'sidebar main'
    'footer footer';
  grid-template-columns: 14rem 1fr;
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;

  & > * {
    padding: 8px;
  }
`;

const Header = styled.header`
  grid-area: header;
  height: 5rem;
  border-bottom: 3px solid;

  display: grid;
  place-content: center;
`;

const Sidebar = styled.aside`
  grid-area: sidebar;
`;

const Main = styled.main`
  grid-area: main;
  min-height: 180vh;
  border: 3px solid;
`;

const Footer = styled.footer`
  grid-area: footer;
  height: 5rem;
  border-top: 3px solid;

  display: grid;
  place-content: center;
`;

const Page = styled.div`
  margin: 0;
  padding: 0;
`;

export default function StickyGrid() {
  return (
    <Page>
      <Grid>
        <Header>
          <h1>My Website</h1>
        </Header>

        <Sidebar>
          <h2>Chicken Cacciatore</h2>
          <nav>
            <ol>
              <li>Introduction</li>
              <li>Prep</li>
              <li>Cooking</li>
              <li>Reviews</li>
            </ol>
          </nav>
        </Sidebar>

        <Main>Main Content</Main>

        <Footer>Copyright notice</Footer>
      </Grid>
    </Page>
  );
}
