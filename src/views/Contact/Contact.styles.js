import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: relative;
  width: 65%;
  height: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1400px) {
    width: 80%;
  }
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  input,
  textarea {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.m};
    outline: none;
    background: none;
    width: 100%;
    transition: 0.5s ease;
    :focus {
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
      padding: 20px;
      transition: 0.5s ease;
      @media screen and (max-width: 680px) {
        padding: 10px;
      }
    }
    @media screen and (max-width: 680px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 35px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  @media screen and (max-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  margin-bottom: 100px;
  outline: none;
  padding: 10px 0;
  @media screen and (max-width: 680px) {
    margin-bottom: 50px;
  }
  &.ERROR {
    background: #1e0000;
  }
  &.VALID {
    background: #001502;
  }
`;

export const Textarea = styled.textarea`
  min-height: 200px;
  border: none;
  border: 2px solid ${({ theme }) => theme.colors.white};
  padding: 10px;
  resize: none;
  &.ERROR {
    background: #1e0000;
  }
  &.VALID {
    background: #001502;
  }
`;

export const Button = styled.button`
  max-width: fit-content;
  font-size: ${({ theme }) => theme.fontSize.l};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 50px;
  letter-spacing: 3px;
  cursor: pointer;
  @media screen and (max-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const waitingAnim = keyframes`
50%{
  transform: translateY(-50px);
}
`;

export const WaitingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 105%;
  height: 105%;
  opacity: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.25s ease;
  background: rgba(8, 8, 8, 80%);
  backdrop-filter: blur(3px);
  p {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  div {
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.white};
    margin: 25px;
    border-radius: 50%;
    @media screen and (max-width: 620px) {
      width: 30px;
      height: 30px;
    }
  }
  &.show {
    top: -2.5%;
    left: -2.5%;
    opacity: 1;
    pointer-events: all;
    transition: 0.25s ease;
    div {
      :nth-child(1) {
        animation: ${waitingAnim} 1.5s infinite;
      }
      :nth-child(2) {
        animation: ${waitingAnim} 1.5s 0.25s infinite;
      }
      :nth-child(3) {
        animation: ${waitingAnim} 1.5s 0.5s infinite;
      }
    }
  }
`;
