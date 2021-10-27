import styled from 'styled-components';
import { motion } from 'framer-motion';

// xl/l for font-size
// large/small for width
// wrap for flex-wrap

export const Wrapper = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  display: flex;
  align-items: center;
  z-index: 1;
  &.large {
    width: 100%;
  }
  &.small {
    width: 80%;
  }
  &.xl {
    font-size: ${({ theme }) => theme.fontSize.xl};
    div {
      @media screen and (max-width: 680px) {
        margin-bottom: 40px;
      }
      @media screen and (max-width: 320px) {
        margin-bottom: 20px;
      }
    }
    @media screen and (max-width: 1400px) {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
    @media screen and (max-width: 680px) {
      flex-wrap: wrap;
      justify-content: center;
    }
    @media screen and (max-width: 320px) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
  &.l {
    font-size: ${({ theme }) => theme.fontSize.l};
    @media screen and (max-width: 1400px) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
    @media screen and (max-width: 680px) {
      flex-wrap: wrap;
      justify-content: center;
    }
    @media screen and (max-width: 320px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
  &.wrap {
    flex-wrap: wrap;
    div {
      margin-bottom: 40px;
    }
  }
  h1 {
    opacity: 0;
    position: absolute;
    pointer-events: none;
  }
`;

export const Word = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Letter = styled(motion.span)`
  pointer-events: none;
`;
