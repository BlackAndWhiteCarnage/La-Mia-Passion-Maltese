import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header/Header';
import { fadeAnim } from 'assets/animations/animation';
import { useScroll } from 'helpers/useScroll';
import { Wrapper, Content, Image } from './Dog.styles';

const Dog = ({ className, headerText, textMobile, text, image }) => {
  const [element, controls] = useScroll();

  return (
    <Wrapper variants={fadeAnim} animate={controls} initial='hidden' ref={element}>
      <Header className={className} text={headerText} textMobile={textMobile} />
      <Content variants={fadeAnim}>{text}</Content>
      <Image src={image} variants={fadeAnim} />
    </Wrapper>
  );
};

Dog.propTypes = {
  className: PropTypes.string.isRequired,
  headerText: PropTypes.array.isRequired,
  textMobile: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Dog;
