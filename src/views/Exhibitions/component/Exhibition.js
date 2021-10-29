import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Exhibition.styles';
import { useScroll } from 'helpers/useScroll';
import { fadeAnim } from 'assets/animations/animation';

const Exhibition = ({ props: { dogName, year, localization, exhibitionName, arbiter, grade, place }, index }) => {
  const [element, controls] = useScroll();

  return (
    <Wrapper ref={element} variants={fadeAnim} animate={controls} initial='hidden'>
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

Exhibition.propTypes = {
  props: PropTypes.object.isRequired,
};

export default Exhibition;
