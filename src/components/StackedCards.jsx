import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;
  padding: 8px;

  @media (min-width: 350px) {
    gap: 16px;
    padding: 16px;
  }

  @media (min-width: 500px) {
    gap: 32px;
    padding: 32px;
  }
`;

const Card = styled.article`
  background: white;
  height: 200px;
  width: 100%;
  max-width: 600px;
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 2px 16px hsla(0deg 0% 0% / 0.2);

  border-radius: 8px;
  padding: 8px;

  @media (min-width: 350px) {
    border-radius: 16px;
    padding: 16px;
  }

  @media (min-width: 500px) {
    border-radius: 32px;
    padding: 32px;
  }
`;

function StackedCards() {
  return (
    <Main>
      <Card>Card 1</Card>
      <Card>Card 2</Card>
      <Card>Card 3</Card>
    </Main>
  );
}

export default StackedCards;
