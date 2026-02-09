import styled from 'styled-components';

export const Wrapper = styled.div`
  --rect-width: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100%;
`;

export const Box = styled.div`
  width: var(--rect-width);
  height: 80px;

  &.one {
    background-color: pink;
  }
  &.two {
    background-color: pink;
  }

  &.three {
    background-color: lavender;
  }
  &.four {
    background-color: lavender;
  }

  &.five {
    background-color: honeydew;
  }
  &.six {
    background-color: honeydew;
  }
`;

export default function GridAlignment() {
  return (
    <Wrapper>
      <Box className="box one" />
      <Box className="box two" />
      <Box className="box three" />
      <Box className="box four" />
      <Box className="box five" />
      <Box className="box six" />
    </Wrapper>
  );
}
