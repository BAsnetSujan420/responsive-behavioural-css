import styled from 'styled-components';

export const Wrapper = styled.div`
  --rect-width: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100%;
  gap: 4px;
`;

export const Box = styled.div`
  width: var(--rect-width);
  height: 80px;

  &.one {
    background-color: pink;
    width: calc(var(--rect-width) * 0.25);
  }
  &.two {
    background-color: pink;
    width: calc(var(--rect-width) * 0.75);
  }

  &.three {
    background-color: lavender;
    width: calc(var(--rect-width) * 0.5);
  }
  &.four {
    background-color: lavender;
    width: calc(var(--rect-width) * 0.5);
  }

  &.five {
    background-color: honeydew;
    width: calc(var(--rect-width) * 0.75);
  }
  &.six {
    background-color: honeydew;
    width: calc(var(--rect-width) * 0.25);
  }

  &:nth-of-type(odd) {
    justify-self: end;
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
