import React, { useState, useEffect } from 'react';
import {
  Wrapper,
  NavigationWrapper,
  Hamburger,
  Line,
  Modal,
  DarkLayer,
  LinksWrapper,
  StyledLink,
  SocialMediaWrapper,
  Icon,
  CurrentSectionWrapper,
  InfoWrapper,
  CurrentSection,
} from './Navigation.styles';
import facebookIcon from 'assets/icons/facebook-icon.svg';
import emailIcon from 'assets/icons/email-icon.svg';
import phoneIcon from 'assets/icons/phone-icon.svg';
import logoIcon from 'assets/icons/logo-icon.svg';

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
        <CurrentSectionWrapper>
          <InfoWrapper>
            <CurrentSection className={currentSection === 1 && 'show'}>Strona Główna</CurrentSection>
            <CurrentSection className={currentSection === 2 && 'show'}>O Hodowli</CurrentSection>
            <CurrentSection className={currentSection === 3 && 'show'}>Nasze Psy</CurrentSection>
            <CurrentSection className={currentSection === 4 && 'showWhite'}>Wystawy</CurrentSection>
            <CurrentSection className={currentSection === 5 && 'show'}>Kupno Szczeniaka</CurrentSection>
            <CurrentSection className={currentSection === 6 && 'show'}>Faq</CurrentSection>
            <CurrentSection className={currentSection === 7 && 'show'}>Kontakt</CurrentSection>
          </InfoWrapper>
        </CurrentSectionWrapper>
        <NavigationWrapper onClick={toggleModalHandler} className={toggleModal && 'toggle'}>
          <Hamburger onClick={toggleModalHandler}>
            <Line className={`${toggleModal && 'toggle'} top`}>
              <div />
              <div />
            </Line>
            <Line className={`${toggleModal && 'toggle'} mid`}>
              <div />
              <div />
              <div />
            </Line>
            <Line className={`${toggleModal && 'toggle'} bot`}>
              <div />
              <div />
              <div />
            </Line>
          </Hamburger>
        </NavigationWrapper>
        <SocialMediaWrapper className={toggleModal && 'toggle'}>
          <Icon src={facebookIcon} />
          <Icon src={emailIcon} />
          <Icon src={phoneIcon} />
        </SocialMediaWrapper>
        <LinksWrapper className={toggleModal && 'toggle'} onClick={toggleModalHandler}>
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
        </LinksWrapper>
      </Wrapper>
      <Modal className={toggleModal && 'toggle'} onClick={toggleModalHandler}></Modal>
      <DarkLayer className={toggleModal && 'toggle'} onClick={toggleModalHandler}>
        <img src={logoIcon} />
      </DarkLayer>
    </>
  );
};

export default Navigation;
