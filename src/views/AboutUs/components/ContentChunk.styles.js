import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  justify-items: space-between;
  margin-bottom: 150px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }
`;

export const Content = styled(motion.div)`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  display: flex;
  align-items: center;
  grid-row-start: 1;
  @media screen and (max-width: 1200px) {
    grid-column-start: 1;
    grid-row-start: 2;
    text-align: center !important;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  &.right {
    grid-column-start: 2;
    text-align: right;
    @media screen and (max-width: 1200px) {
      grid-column-start: 1;
      grid-row-start: 2;
    }
  }
`;

export const Image = styled(motion.img)`
  width: 100%;
  @media screen and (max-width: 1200px) {
    grid-row-start: 1;
    justify-self: center;
    width: auto;
    height: 350px;
  }
`;

export const Number = styled(motion.p)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(300px, 20vw, 600px);
  color: ${({ theme }) => theme.colors.darkGrey};
  z-index: -1;
  @media screen and (max-width: 1200px) {
    display: none;
  }
  &.right {
    left: unset;
    right: 50%;
    transform: translate(50%, -50%);
  }
`;
