import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding: 150px 0;
  overflow-x: hidden;
  &.white {
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const ThresholdWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 1px;
  height: 100%;
`;

const Threshold = styled.div`
  position: relative;
  height: 100%;
  div {
    position: sticky;
    width: 1px;
    top: 0;
    left: 0;
    height: 50vh;
  }
`;

const ContentWrapper = ({ children, setCurrentSection, sectionIndex, id, className }) => {
  const [elem, view] = useInView({ threshold: 1 });

  useEffect(() => {
    if (view) {
      setCurrentSection(sectionIndex);
    }
  }, [view, setCurrentSection, sectionIndex]);

  return (
    <Wrapper id={id} className={className}>
      <ThresholdWrapper>
        <Threshold>
          <div ref={elem} />
        </Threshold>
      </ThresholdWrapper>
      {children}
    </Wrapper>
  );
};

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  setCurrentSection: PropTypes.func.isRequired,
  sectionIndex: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ContentWrapper;
