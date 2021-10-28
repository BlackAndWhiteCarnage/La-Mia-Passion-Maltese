import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { fadeAnim, imgAnim, textAnim } from 'assets/animations/animation';
import { useScroll } from 'helpers/useScroll';
import { Wrapper, Content, Image } from './ContentChunk.styles';

const ContentChunk = ({ text, image, className }) => {
  const [element, controls] = useScroll();
  const ref = useRef();

  const handleMove = (e) => {
    ref.current.style.transition = `0.1s ease`;
    let yAxis = (window.innerHeight / 5 - e.clientY) / 50;
    ref.current.style.transform = `translate(${yAxis}px, ${yAxis}px)`;
  };

  const handleLeave = () => {
    ref.current.style.transform = `none`;
    ref.current.style.transition = `all 0.5s ease`;
  };

  return (
    <Wrapper variants={fadeAnim} animate={controls} initial='hidden' ref={element} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <Content className={className} variants={textAnim}>
        {text}
      </Content>
      <Image src={image} variants={imgAnim} ref={ref} />
    </Wrapper>
  );
};

ContentChunk.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ContentChunk;