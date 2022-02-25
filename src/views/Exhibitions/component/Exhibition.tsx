import React from 'react';
import { Wrapper } from './Exhibition.styles';
import { useScroll } from 'helpers/useScroll';
import { fadeAnim } from 'assets/animations/animation';

interface ExhibitionProps {
  props: {
    dogName: string
    year: string
    localization: string
    exhibitionName: string
    arbiter: string | null
    grade: string
    place: string
  }
  index: number
}

const Exhibition = ({ props: { dogName, year, localization, exhibitionName, arbiter, grade, place }, index }: ExhibitionProps) => {
  const [element, controls] = useScroll();

  return (
    <Wrapper ref={element as React.Ref<HTMLDivElement>} variants={fadeAnim} animate={controls as any} initial='hidden' data-testid='exhibition'>
      <p>Sunia: {dogName}</p>
      <p>Data: {year}</p>
      <p>{localization}</p>
      <p>{exhibitionName}</p>
      <p>Sędzia: {arbiter}</p>
      <p>Ocena: {grade}</p>
      <p>Miejsce: {place}</p>
      <div>{index + 1}</div>
    </Wrapper>
  );
};

export default Exhibition;
