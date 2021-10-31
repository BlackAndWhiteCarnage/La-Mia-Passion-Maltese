import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Wrapper = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 30px;
  text-indent: 30px;
  transition: 0.5s ease;
  cursor: pointer;
  margin-bottom: 20px;
  &.white {
    color: ${({ theme }) => theme.colors.black};
  }
  &.form {
    width: 100%;
    margin: 0;
    margin-top: 50px;
    font-size: ${({ theme }) => theme.fontSize.xl};
    @media screen and (max-width: 680px) {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
  &.white {
    &::before {
      background: ${({ theme }) => theme.colors.black};
    }
  }
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
    &.white {
      color: ${({ theme }) => theme.colors.white};
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
      &.white {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
  @media screen and (max-width: 680px) {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const Button = ({ text, className, onClick, type }) => {
  return (
    <Wrapper className={className} onClick={onClick} type={type}>
      {text}
    </Wrapper>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
