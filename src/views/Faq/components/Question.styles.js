import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  width: 100%;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  height: 100px;
  max-height: 50px;
  transition: all 1s;
  @media screen and (max-width: 1200px) {
    max-height: 100px;
  }
  @media screen and (max-width: 680px) {
    margin-bottom: 25px;
  }
  &:last-child {
    margin: 0;
  }
  &.toggle {
    transition: all 1s;
    height: 100%;
    max-height: 1200px;
  }
`;

export const FaqQuestion = styled.button`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: 3px;
  text-align: left;
  background: none;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  z-index: 1;
  cursor: pointer;
  transition: 0.5s ease;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0%;
    background: ${({ theme }) => theme.colors.black};
    z-index: -1;
    transition: 0.25s ease;
  }
  @media screen and (min-width: 1200px) {
    &:hover {
      transition: 0.5s 0.1s ease !important;
      letter-spacing: 5px;
      color: ${({ theme }) => theme.colors.white};
      &::before {
        width: 100%;
        transition: 0.25s 0.1s ease;
      }
    }
  }
  @media screen and (max-width: 1400px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const FaqAnswer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  transition: 1s ease;
  opacity: 0;
  margin-top: 35px;
  @media screen and (max-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin-top: 10px;
  }
  &.toggle {
    transition: 1s ease;
    opacity: 1;
  }
`;
