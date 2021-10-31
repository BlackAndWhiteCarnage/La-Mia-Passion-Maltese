import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  position: relative;
  width: 65%;
  height: 90%;
  max-width: 1400px;
  overflow-x: hidden;
  @media screen and (max-width: 1400px) {
    width: 80%;
  }
`;

export const ButtonsWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: 30px;
  text-indent: 30px;
  transition: 0.5s ease;
  cursor: pointer;
  margin-bottom: 20px;
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
  &.active {
    transition: 0.25s 0.1s ease !important;
    color: ${({ theme }) => theme.colors.black};
    pointer-events: none !important;
    @media screen and (max-width: 680px) {
      padding: 10px;
    }
    &::before {
      width: 100%;
      transition: 0.25s 0.1s ease;
    }
  }
  @media screen and (min-width: 1200px) {
    &:hover {
      transition: 0.25s 0.1s ease !important;
      color: ${({ theme }) => theme.colors.black};
      &::before {
        width: 100%;
        transition: 0.25s 0.1s ease;
      }
    }
  }
  @media screen and (max-width: 680px) {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const ExhibitionsWrapper = styled.div`
  width: 100%;
  min-height: 500px;
  opacity: 0;
  transition: 0.5s ease;
  transform: scale(0.8);
  &.toggle {
    transform: scale(1);
    transition: 0.5s ease;
    opacity: 1;
  }
`;
