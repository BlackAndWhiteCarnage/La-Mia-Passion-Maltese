import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.black};
  @media screen and (max-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 40px 0;
  }
  p {
    margin-bottom: 10px;
  }
  &:first-child {
    border-top: 2px solid ${({ theme }) => theme.colors.darkGrey};
  }
  &:last-child {
    border-bottom: none;
  }
  div {
    position: absolute;
    right: 0;
    top: 0;
    font-size: clamp(100px, 20vw, 300px);
    color: ${({ theme }) => theme.colors.darkGrey};
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: -1;
    @media screen and (max-width: 680px) {
      display: none;
    }
  }
`;
