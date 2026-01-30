import React from 'react';
import styled from 'styled-components';

export const Hero = styled.header`
  height: 80vh;
  background: url('https://courses.joshwcomeau.com/cfj-mats/night-sky.jpg')
    bottom center / cover no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  text-shadow: 0px 0.3em 1em hsl(295deg 100% 10%);
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
`;

export const Subhead = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-top: 16px;
`;

export const Main = styled.main`
  padding: 64px 0;
  font-size: 1.4rem;
`;

export const MaxWidthWrapper = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding: 32px;
`;

export const Paragraph = styled.p`
  margin-bottom: 1.5em;
`;

function HeroContent() {
  return (
    <>
      <Hero>
        <Title>Words and Things</Title>
        <Subhead>A collection of letters and symbols.</Subhead>
      </Hero>

      <Main>
        <MaxWidthWrapper>
          <Paragraph>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </Paragraph>
          <Paragraph>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
          </Paragraph>
        </MaxWidthWrapper>
      </Main>
    </>
  );
}

export default HeroContent;
