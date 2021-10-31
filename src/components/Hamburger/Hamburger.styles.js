import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  &.toggle {
    pointer-events: all;
  }
`;

export const AccualHamburger = styled.button`
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
