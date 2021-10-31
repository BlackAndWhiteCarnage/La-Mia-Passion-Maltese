import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

export const Wrapper = styled.nav`
  position: fixed;
  width: 90%;
  height: 90%;
  max-width: 2200px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999999;
  pointer-events: none;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
  @media screen and (max-width: 680px) {
    height: 95%;
  }
`;

export const NavigationWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  &.toggle {
    pointer-events: all;
  }
`;

export const Hamburger = styled.button`
  position: absolute;
  width: 50px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  border: none;
  background: none;
  pointer-events: all !important;

  @media screen and (max-width: 1400px) {
    width: 35px;
    height: 25px;
  }
`;

export const Line = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  &.toggle {
    div {
      background: ${({ theme }) => theme.colors.white} !important;
    }
  }
  &.white {
    div {
      background: ${({ theme }) => theme.colors.black};
    }
  }
  div {
    transition: 0.25s ease;
    height: 2px;
    background: ${({ theme }) => theme.colors.white};
  }
  &.top {
    div:nth-child(1) {
      width: 60%;
    }
    div:nth-child(2) {
      width: 30%;
    }
    &.toggle {
      div:nth-child(1) {
        width: 10%;
      }
      div:nth-child(2) {
        width: 80%;
      }
    }
  }
  &.mid {
    div:nth-child(1) {
      width: 50%;
    }
    div:nth-child(2) {
      width: 10%;
    }
    div:nth-child(3) {
      width: 20%;
    }
    &.toggle {
      div:nth-child(1) {
        width: 10%;
      }
      div:nth-child(2) {
        width: 60%;
      }
      div:nth-child(3) {
        width: 10%;
      }
    }
  }
  &.bot {
    div:nth-child(1) {
      width: 25%;
    }
    div:nth-child(2) {
      width: 25%;
    }
    div:nth-child(3) {
      width: 25%;
    }
    &.toggle {
      div:nth-child(1) {
        width: 10%;
      }
      div:nth-child(2) {
        width: 10%;
      }
      div:nth-child(3) {
        width: 60%;
      }
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0%;
  left: -50%;
  width: 50%;
  height: 100%;
  z-index: 99999;
  background: rgba(8, 8, 8, 80%);
  backdrop-filter: blur(3px);
  transition: 0.5s 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: none;
  @media screen and (max-width: 680px) {
    width: 100%;
    left: -100%;
  }
  &.toggle {
    pointer-events: all;
    left: 0%;
    transition: 0.5s ease;
  }
`;

export const LinksWrapper = styled.div`
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
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.5s ease !important;
  letter-spacing: 3px;
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

const pulse = keyframes`
  0%{
    transform: scale(0.8);
  }
  50%{
    transform: scale(1) rotate(5deg);
  }
  100%{
    transform: scale(0.8);
  }
`;

export const DarkLayer = styled.div`
  position: fixed;
  top: -100%;
  right: 0%;
  width: 50%;
  height: 100%;
  z-index: 99999999;
  background: ${({ theme }) => theme.colors.white};
  transition: 0.5s ease;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 680px) {
    display: none;
  }
  img {
    width: 30%;
    animation: ${pulse} 10s infinite;
    @media screen and (max-width: 1200px) {
      width: 50%;
    }
  }
  &.toggle {
    pointer-events: all;
    top: 0%;
    transition: 0.5s 0.35s ease;
  }
`;

export const SocialMediaWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: -10%;
  left: 0%;
  width: 220px;
  opacity: 0;
  transition: 0.25s ease;
  @media screen and (max-width: 680px) {
    width: 100%;
  }
  &.toggle {
    bottom: 20px;
    opacity: 1;
    transition: 0.5s 0.5s ease;
  }
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
`;

export const CurrentSectionWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 300px;
  height: 40px;
  @media screen and (max-width: 680px) {
    bottom: unset;
    top: 0;
  }
`;

export const InfoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const CurrentSection = styled.p`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  bottom: -100%;
  opacity: 0;
  transition: 0.25s ease;
  white-space: nowrap;
  transform: scale(1.2);
  &.show {
    transform: scale(1);
    bottom: 0%;
    opacity: 1;
    transition: 0.25s ease;
  }
  &.showWhite {
    transform: scale(1);
    bottom: 0%;
    opacity: 1;
    transition: 0.25s ease;
    color: ${({ theme }) => theme.colors.black};
  }
`;
