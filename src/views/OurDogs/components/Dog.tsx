import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header/Header';
import { fadeAnim } from 'assets/animations/animation';
import { useScroll } from 'helpers/useScroll';
import { useMove } from 'helpers/useMove';
import { Wrapper, Content, Image } from './Dog.styles';

interface DogProps {
  className: string
  headerText: string[]
  textMobile: string[]
  text: string
  image: string
}

const Dog: React.FC<DogProps> = ({ className, headerText, textMobile, text, image }) => {
  const [element, controls] = useScroll();
  const ref = useRef<HTMLImageElement>(null);
  const { handleMove, handleLeave } = useMove(ref);

  return (
    <Wrapper variants={fadeAnim} animate={controls as any} initial='hidden' ref={element as React.Ref<HTMLDivElement>} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <Header className={className} text={headerText} textMobile={textMobile} />
      <Content>{text}</Content>
      <Image src={image} ref={ref} />
    </Wrapper>
  );
};

export default Dog;
