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
`;

export const ThresholdWrapper = styled.section`
  position: sticky;
  top: 0;
  left: 0;
  width: 1px;
  height: 50vh;
`;

const ContentWrapper = ({ children, setCurrentSection, sectionIndex, id }) => {
  const [elem, view] = useInView({ threshold: 1 });

  useEffect(() => {
    if (view) {
      setCurrentSection(sectionIndex);
    }
  }, [view, setCurrentSection]);

  return (
    <Wrapper id={id}>
      <ThresholdWrapper ref={elem} />
      {children}
    </Wrapper>
  );
};

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  setCurrentSection: PropTypes.func.isRequired,
  sectionIndex: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContentWrapper;
