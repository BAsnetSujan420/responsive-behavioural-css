import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  --header-height: 5rem;
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
  isolation: isolate;
`;

const Header = styled.header`
  grid-area: header;
  height: var(--header-height);
  border-bottom: 3px solid;
  position: sticky;
  top: 0;
  background-color: black;
  display: grid;
  place-content: center;
  z-index: 2;
`;

const Sidebar = styled.aside`
  grid-area: sidebar;
  z-index: 1;
`;

const StickySidebar = styled.div`
  position: sticky;
  top: var(--header-height);
  padding-top: 1rem;
`;

const Main = styled.main`
  grid-area: main;
  min-height: 180vh;
  border: 3px solid;
`;

const Footer = styled.footer`
  position: relative;
  grid-area: footer;
  height: 5rem;
  border-top: 3px solid;
  background-color: black;
  display: grid;
  place-content: center;
  z-index: 2;
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
          <StickySidebar>
            <h2>Chicken Cacciatore</h2>
            <nav>
              <ol>
                <li>Introduction</li>
                <li>Prep</li>
                <li>Cooking</li>
                <li>Reviews</li>
                <li>Introduction</li>
                <li>Prep</li>
                <li>Cooking</li>
                <li>Reviews</li>
                <li>Introduction</li>
                <li>Prep</li>
                <li>Cooking</li>
                <li>Reviews</li>
                <li>Introduction</li>
                <li>Prep</li>
                <li>Cooking</li>
                <li>Reviews</li>
                <li>Introduction</li>
                <li>Prep</li>
                <li>Cooking</li>
                <li>Reviews</li>
                <li>Introduction</li>
                <li>Prep</li>
                <li>Cooking</li>
                <li>Reviews</li>
                <li>Introduction</li>
                <li>Prep</li>
                <li>Cooking</li>
                <li>Reviews</li>
              </ol>
            </nav>
          </StickySidebar>
        </Sidebar>

        <Main>Main Content</Main>

        <Footer>Copyright notice</Footer>
      </Grid>
    </Page>
  );
}
