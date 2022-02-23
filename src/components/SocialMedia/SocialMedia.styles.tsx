import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: -10%;
  left: 0%;
  width: 250px;
  opacity: 0;
  transition: 0.25s ease;
  pointer-events: all;
  @media screen and (max-width: 680px) {
    width: 100%;
  }
  &.toggle {
    bottom: 20px;
    opacity: 1;
    transition: 0.5s 0.5s ease;
  }
`;

export const IconWrapper = styled.a`
  pointer-events: all;
  cursor: pointer;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.25s ease;
  @media screen and (min-width: 1200px) {
    &:hover {
      transform: rotate(-10deg);
      transition: 0.25s ease;
    }
  }
  @media screen and (max-width: 680px) {
    width: 30px;
    height: 30px;
  }
`;

export const Icon = styled.img`
  pointer-events: none;
  width: 25px;
  height: 25px;
  @media screen and (max-width: 680px) {
    width: 20px;
    height: 20px;
  }
`;
