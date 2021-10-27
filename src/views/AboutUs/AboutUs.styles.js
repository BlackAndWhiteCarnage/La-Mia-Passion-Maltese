import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ChunksWrapper = styled.div`
  position: relative;
  width: 65%;
  height: 90%;
  max-width: 1920px;
  overflow-x: hidden;
  @media screen and (max-width: 1400px) {
    width: 80%;
  }
`;

export const Wrapper = styled(motion.div)`
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
  transform-style: preserve-3d;
  @media screen and (max-width: 1200px) {
    grid-row-start: 1;
    justify-self: center;
    width: auto;
    height: 350px;
  }
`;
