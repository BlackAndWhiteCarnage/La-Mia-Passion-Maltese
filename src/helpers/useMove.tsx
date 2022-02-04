import PropTypes from 'prop-types';
import React from 'react';

export const useMove = (ref: React.RefObject<HTMLImageElement>) => {
  const handleMove = (e: React.MouseEvent<HTMLImageElement>): void => {
    let yAxis = (window.innerHeight / 5 - e.clientY) / 50;
    if(ref.current !== null) {
      ref.current.style.transition = `0.1s ease`;
      ref.current.style.transform = `translate(${yAxis}px, ${yAxis}px)`;
    }
  };

  const handleLeave = (): void => {
    if(ref.current !== null) {
      ref.current.style.transform = `none`;
      ref.current.style.transition = `all 0.5s ease`;
    }
  };

  return { handleMove, handleLeave };
};

useMove.propTypes = {
  ref: PropTypes.node.isRequired,
};
