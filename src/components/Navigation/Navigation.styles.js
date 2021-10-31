import styled, { keyframes } from 'styled-components';

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

export const Modal = styled.div`
  position: fixed;
  top: 0%;
  left: -50%;
  width: 50%;
  height: 100%;
  z-index: 99999;
  background: ${({ theme }) => theme.colors.black};
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
