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
  display: none;
  &.section1 {
    width: 20px;
    height: 20px;
    transition: 0.5s ease;
  }
  &.section2 {
    width: 300px;
    height: 5px;
    transition: 0.5s ease;
  }
  &.section3 {
    width: 200vw;
    height: 5px;
    transition: 0.5s ease;
  }
  &.section4 {
    width: 50vw;
    height: 200vh;
    transition: 0.5s ease;
  }
  &.section5 {
    width: 200vw;
    height: 60vh;
    transition: 0.5s ease;
  }
  &.section6 {
    width: 70vw;
    height: 200vh;
    transition: 0.5s ease;
  }
  &.section7 {
    width: 200vw;
    height: 40vh;
    transition: 0.5s ease;
  }
`;
