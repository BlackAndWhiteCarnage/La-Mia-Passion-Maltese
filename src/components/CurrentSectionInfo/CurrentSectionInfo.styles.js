import styled from 'styled-components';

export const Wrapper = styled.div`
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
