import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { fadeAnim, imgAnim } from 'assets/animations/animation';
import { useScroll } from 'helpers/useScroll';
import { useMove } from 'helpers/useMove';
import { Wrapper, Content, Image, Number } from './ContentChunk.styles';

const ContentChunk = ({ text, image, className, number }) => {
  const [element, controls] = useScroll();
  const ref = useRef();
  const { handleMove, handleLeave } = useMove(ref);

  return (
    <Wrapper variants={fadeAnim} animate={controls} initial='hidden' ref={element} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <Number className={className}>{number}</Number>
      <Content className={className}>{text}</Content>
      <Image src={image} variants={imgAnim} ref={ref} />
    </Wrapper>
  );
};

ContentChunk.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
  number: PropTypes.number.isRequired,
};

export default ContentChunk;
