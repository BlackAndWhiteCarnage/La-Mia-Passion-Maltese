import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Hamburger from 'components/Hamburger/Hamburger';
import NavigationLinks from 'components/NavigationLinks/NavigationLinks';
import CurrentSectionInfo from 'components/CurrentSectionInfo/CurrentSectionInfo';
import facebookIcon from 'assets/icons/facebook-icon.svg';
import emailIcon from 'assets/icons/email-icon.svg';
import phoneIcon from 'assets/icons/phone-icon.svg';
import logoIcon from 'assets/icons/logo-icon.svg';
import { Wrapper, Modal, DarkLayer, SocialMediaWrapper, Icon } from './Navigation.styles';

const Navigation = ({ currentSection }) => {
  const [toggleModal, setToggleModal] = useState(false);

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
  };

  useEffect(() => {
    document.body.style.overflowY = `${toggleModal ? 'hidden' : 'scroll'}`;
    document.body.style.paddingRight = `${toggleModal ? '10px' : '0px'}`;
  }, [toggleModal]);

  return (
    <>
      <Wrapper>
        <CurrentSectionInfo currentSection={currentSection} />
        <Hamburger toggleModalHandler={toggleModalHandler} toggleModal={toggleModal} currentSection={currentSection} />
        <SocialMediaWrapper className={toggleModal && 'toggle'}>
          <Icon src={facebookIcon} alt='Facebook Icon' />
          <Icon src={emailIcon} alt='Email Icon' />
          <Icon src={phoneIcon} alt='Phone Call Icon' />
        </SocialMediaWrapper>
        <NavigationLinks toggleModal={toggleModal} toggleModalHandler={toggleModalHandler} currentSection={currentSection} />
      </Wrapper>
      <Modal className={toggleModal && 'toggle'} onClick={toggleModalHandler}></Modal>
      <DarkLayer className={toggleModal && 'toggle'} onClick={toggleModalHandler}>
        <img src={logoIcon} alt='La Mia Passione Maltese Logo' />
      </DarkLayer>
    </>
  );
};

Navigation.propTypes = {
  currentSection: PropTypes.number.isRequired,
};

export default Navigation;
