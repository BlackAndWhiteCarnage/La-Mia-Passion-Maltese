import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999999999;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const InvertDiv = styled.div`
  transition: all 2s ease;
  transition-property: transform;
  transform-origin: 135% 135%;
  backdrop-filter: invert(100%);
  transition: 2s ease;
  &.section1 {
    width: 100px;
    height: 200vh;
    transition: 2s ease;
  }
  &.section2 {
    width: 200vw;
    height: 5vh;
    transition: 2s ease;
  }
  &.section3 {
    width: 10vw;
    height: 200vh;
    transition: 2s ease;
  }
  &.section4 {
    width: 50vw;
    height: 200vh;
    transition: 2s ease;
  }
  &.section5 {
    width: 200vw;
    height: 50vh;
    transition: 2s ease;
  }
  &.section6 {
    width: 80vw;
    height: 200vh;
    transition: 2s ease;
  }
  &.section7 {
    width: 20vw;
    height: 200vh;
    transition: 2s ease;
  }
`;