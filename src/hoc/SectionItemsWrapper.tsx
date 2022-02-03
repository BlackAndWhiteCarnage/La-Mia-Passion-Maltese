import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 65%;
  height: 90%;
  max-width: 1400px;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1400px) {
    width: 80%;
  }
  &.overflowHidden {
    overflow: hidden;
  }
`;

interface SectionItemsWrapperProps {
  children: React.ReactNode
  className?: string
}

const SectionItemsWrapper: React.FC<SectionItemsWrapperProps> = ({ children, className }) => <Wrapper className={className}>{children}</Wrapper>

export default SectionItemsWrapper;
