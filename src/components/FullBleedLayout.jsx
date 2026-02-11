import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 30ch;
  padding: 32px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  margin: 32px 0;
`;

const Text = styled.p`
  margin: 16px 0;
`;

const MeerkatImg = styled.img`
  max-width: 100%;
  display: block;
`;

const Page = styled.div`
  padding: 0;
  margin: 0;
  max-width: 1000px;
`;

export default function FullBleedLayout() {
  return (
    <Page>
      <Wrapper>
        <Title>Some Heading</Title>

        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>

        <MeerkatImg
          alt="a satisfied-looking cute meerkat"
          src="https://courses.joshwcomeau.com/cfj-mats/meerkat.jpg"
        />

        <Text>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Text>
      </Wrapper>
    </Page>
  );
}
