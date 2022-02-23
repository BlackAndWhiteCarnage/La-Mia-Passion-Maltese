import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Wrapper = styled.div`
  position: absolute;
  left: 0%;
  top: 150%;
  width: 45%;
  height: 70%;
  transition: 1s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;
  @media screen and (max-width: 1400px) {
    justify-content: space-evenly;
    height: 85%;
  }
  @media screen and (max-width: 680px) {
    width: 100%;
  }
  a {
    transition: 0.5s ease;
    pointer-events: none;
  }
  &.toggle {
    left: 0%;
    top: 50%;
    transform: translate(0, -50%);
    transition: 0.65s ease;
    pointer-events: all;
    a {
      pointer-events: all;
      transition: 1s 0.5s ease;
      opacity: 1;
    }
  }
`;

export const StyledLink = styled(Link)`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.l};
  opacity: 0;
  width: 70%;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.5s ease !important;
  letter-spacing: 3px;
  white-space: nowrap;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0%;
    background: ${({ theme }) => theme.colors.white};
    z-index: -1;
    transition: 0.25s ease;
  }
  &.isActive {
    letter-spacing: 5px;
    transition: 0.25s 0.1s ease !important;
    padding-left: 10px;
    color: ${({ theme }) => theme.colors.black};
    pointer-events: none !important;
    &::before {
      width: 100%;
      transition: 0.25s 0.1s ease;
    }
  }
  @media screen and (min-width: 1200px) {
    &:hover {
      letter-spacing: 5px;
      transition: 0.25s 0.1s ease !important;
      padding-left: 10px;
      color: ${({ theme }) => theme.colors.black};
      &::before {
        width: 100%;
        transition: 0.25s 0.1s ease;
      }
    }
  }
  @media screen and (max-width: 1400px) {
    width: 100%;
  }
`;
