import React, { useRef } from 'react';
import { fadeAnim, imgAnim } from 'assets/animations/animation';
import { useScroll } from 'helpers/useScroll';
import { useMove } from 'helpers/useMove';
import { Wrapper, Content, Image, Number } from './ContentChunk.styles';

interface ContentChunkProps {
  text: string
  image: string
  className?: string
  number: number
}

const ContentChunk: React.FC<ContentChunkProps> = ({ text, image, className, number }) => {
  const [element, controls] = useScroll();
  const ref = useRef<HTMLImageElement>(null);
  const { handleMove, handleLeave } = useMove(ref);

  return (
    <Wrapper variants={fadeAnim} animate={controls as any} initial='hidden' ref={element as React.Ref<HTMLDivElement>} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <Number className={className}>{number}</Number>
      <Content className={className}>{text}</Content>
      <Image src={image} variants={imgAnim} ref={ref} />
    </Wrapper>
  );
};

export default ContentChunk;
