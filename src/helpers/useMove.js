import PropTypes from 'prop-types';

export const useMove = (ref) => {
  const handleMove = (e) => {
    ref.current.style.transition = `0.1s ease`;
    let yAxis = (window.innerHeight / 5 - e.clientY) / 50;
    ref.current.style.transform = `translate(${yAxis}px, ${yAxis}px)`;
  };

  const handleLeave = () => {
    ref.current.style.transform = `none`;
    ref.current.style.transition = `all 0.5s ease`;
  };

  return { handleMove, handleLeave };
};

useMove.propTypes = {
  ref: PropTypes.node.isRequired,
};
