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
  margin-bottom: 550px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }
  @media screen and (max-width: 680px) {
    margin-bottom: 250px;
  }
`;

export const Content = styled.div`
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

export const Image = styled.img`
  width: 100%;
  @media screen and (max-width: 1200px) {
    grid-row-start: 1;
    justify-self: center;
    width: auto;
    height: 350px;
  }
`;
