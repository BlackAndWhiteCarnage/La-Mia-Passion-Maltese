import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  height: 100px;
  max-height: 50px;
  overflow: hidden;
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
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 3px;
  text-align: left;
  background: none;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  z-index: 1;
  cursor: pointer;
  padding-bottom: 10px;
  @media screen and (max-width: 1400px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const FaqAnswer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
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
