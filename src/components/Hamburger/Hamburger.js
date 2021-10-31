import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, AccualHamburger, Line } from './Hamburger.styles';

const Hamburger = ({ toggleModalHandler, toggleModal, currentSection }) => (
  <Wrapper onClick={toggleModalHandler} className={toggleModal && 'toggle'}>
    <AccualHamburger onClick={toggleModalHandler}>
      <Line className={`${toggleModal && 'toggle'} ${currentSection === 4 ? 'white' : currentSection === 6 && 'white'} top`}>
        <div />
        <div />
      </Line>
      <Line className={`${toggleModal && 'toggle'} ${currentSection === 4 ? 'white' : currentSection === 6 && 'white'} mid`}>
        <div />
        <div />
        <div />
      </Line>
      <Line className={`${toggleModal && 'toggle'} ${currentSection === 4 ? 'white' : currentSection === 6 && 'white'} bot`}>
        <div />
        <div />
        <div />
      </Line>
    </AccualHamburger>
  </Wrapper>
);

Hamburger.propTypes = {
  toggleModalHandler: PropTypes.func.isRequired,
  toggleModal: PropTypes.bool.isRequired,
  currentSection: PropTypes.number.isRequired,
};

export default Hamburger;
