import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledLink } from './NavigationLinks.styles';

const NavigationLinks = ({ toggleModal, toggleModalHandler, currentSection }) => (
  <Wrapper className={toggleModal && 'toggle'} onClick={toggleModalHandler}>
    <StyledLink
      className={currentSection === 1 && 'isActive'}
      onClick={toggleModalHandler}
      to='home'
      duration={1500}
      smooth={true}
      ignoreCancelEvents={true}
    >
      Strona Główna
    </StyledLink>
    <StyledLink
      className={currentSection === 2 && 'isActive'}
      onClick={toggleModalHandler}
      to='aboutUs'
      duration={1500}
      smooth={true}
      ignoreCancelEvents={true}
    >
      O Hodowli
    </StyledLink>
    <StyledLink
      className={currentSection === 3 && 'isActive'}
      onClick={toggleModalHandler}
      to='ourDogs'
      duration={1500}
      smooth={true}
      ignoreCancelEvents={true}
    >
      Nasze Psy
    </StyledLink>
    <StyledLink
      className={currentSection === 4 && 'isActive'}
      onClick={toggleModalHandler}
      to='exhibitions'
      duration={1500}
      smooth={true}
      ignoreCancelEvents={true}
    >
      Wystawy
    </StyledLink>
    <StyledLink
      className={currentSection === 5 && 'isActive'}
      onClick={toggleModalHandler}
      to='buyingProcess'
      duration={1500}
      smooth={true}
      ignoreCancelEvents={true}
    >
      Kupno Szczeniaka
    </StyledLink>
    <StyledLink
      className={currentSection === 6 && 'isActive'}
      onClick={toggleModalHandler}
      to='faq'
      duration={1500}
      smooth={true}
      ignoreCancelEvents={true}
    >
      Faq
    </StyledLink>
    <StyledLink
      className={currentSection === 7 && 'isActive'}
      onClick={toggleModalHandler}
      to='contact'
      duration={1500}
      smooth={true}
      ignoreCancelEvents={true}
    >
      Kontakt
    </StyledLink>
  </Wrapper>
);

NavigationLinks.propTypes = {
  toggleModal: PropTypes.bool.isRequired,
  toggleModalHandler: PropTypes.func.isRequired,
  currentSection: PropTypes.number.isRequired,
};

export default NavigationLinks;
