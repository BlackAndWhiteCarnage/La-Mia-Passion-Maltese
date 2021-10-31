import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 450px;
  &:first-child {
    margin-top: 150px;
  }
  &:last-child {
    margin-bottom: 150px;
  }
  font-size: ${({ theme }) => theme.fontSize.m};
  @media screen and (max-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    width: 100%;
    margin: 100px 0;
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  li {
    font-size: ${({ theme }) => theme.fontSize.s};
    background: ${({ theme }) => theme.colors.darkGrey};
    padding: 10px 0 10px 15px;
    display: flex;
    align-items: center;
    line-height: normal;
    @media screen and (max-width: 680px) {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
    &:first-child {
      margin-top: 50px;
    }
    margin-bottom: 30px;
  }
`;
