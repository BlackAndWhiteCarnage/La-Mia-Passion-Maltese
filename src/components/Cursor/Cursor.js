import React, { useState, useRef, useEffect } from 'react';
import { Wrapper, InvertDiv } from './Cursor.styles';
import PropTypes from 'prop-types';

const Cursor = ({ currentSection }) => {
  const [isTouchscreen, setIsTouchscreen] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchscreen(true);
    } else {
      window.addEventListener('mousemove', mouseMoveHandler);
      setIsTouchscreen(false);
    }
  }, []);

  const mouseMoveHandler = (e) => {
    ref.current.style.top = e.clientY + 'px';
    ref.current.style.left = e.clientX + 'px';
  };

  const checkCurrentSectionHandler = () => {
    return `section${currentSection}`;
  };

  return (
    <>
      {!isTouchscreen && (
        <Wrapper ref={ref}>
          <InvertDiv className={checkCurrentSectionHandler()} />
        </Wrapper>
      )}
    </>
  );
};

Cursor.propTypes = {
  currentSection: PropTypes.number.isRequired,
};

export default Cursor;
