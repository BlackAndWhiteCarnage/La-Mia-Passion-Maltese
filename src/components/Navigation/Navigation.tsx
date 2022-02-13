import React, { useState, useEffect } from 'react';
import Hamburger from 'components/Hamburger/Hamburger';
import NavigationLinks from 'components/NavigationLinks/NavigationLinks';
import CurrentSectionInfo from 'components/CurrentSectionInfo/CurrentSectionInfo';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import logoIcon from 'assets/icons/logo-icon.svg';
import { Wrapper, Modal, DarkLayer } from './Navigation.styles';
import { SectionType } from 'Root'

interface NavigationProps {
  currentSection: SectionType["currentSection"]
}

export interface ToggleModalType {
  toggleModal: boolean
  setToggleModal: React.Dispatch<React.SetStateAction<number>>
}

const Navigation = ({ currentSection }: NavigationProps) => {
  const [toggleModal, setToggleModal] = useState<ToggleModalType["toggleModal"]>(false);

  const toggleModalHandler = (): void => {
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
        <SocialMedia toggleModal={toggleModal} />
        <NavigationLinks toggleModal={toggleModal} toggleModalHandler={toggleModalHandler} currentSection={currentSection} />
      </Wrapper>
      <Modal className={`${toggleModal && 'toggle'}`} onClick={toggleModalHandler} />
      <DarkLayer className={`${toggleModal && 'toggle'}`} onClick={toggleModalHandler}>
        <img src={logoIcon} alt='La Mia Passione Maltese Logo' />
      </DarkLayer>
    </>
  );
};

export default Navigation;
