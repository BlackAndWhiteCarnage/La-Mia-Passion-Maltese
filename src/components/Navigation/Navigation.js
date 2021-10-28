import React, { useState, useEffect } from 'react';
import {
  Wrapper,
  NavigationWrapper,
  Hamburger,
  Line,
  Modal,
  DarkLayer,
  LinksWrapper,
  Link,
  SocialMediaWrapper,
  Icon,
  CurrentSectionWrapper,
  InfoWrapper,
  CurrentSection,
} from './Navigation.styles';
import facebookIcon from 'assets/icons/facebook-icon.svg';
import emailIcon from 'assets/icons/email-icon.svg';
import phoneIcon from 'assets/icons/phone-icon.svg';

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
            <CurrentSection className={currentSection === 4 && 'show'}>Wystawy</CurrentSection>
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
          <Link>Strona Główna</Link>
          <Link>O Hodowli</Link>
          <Link>Nasze Psy</Link>
          <Link>Wystawy</Link>
          <Link>Kupno Szczeniaka</Link>
          <Link>Faq</Link>
          <Link>Kontakt</Link>
        </LinksWrapper>
      </Wrapper>
      <Modal className={toggleModal && 'toggle'} onClick={toggleModalHandler}></Modal>
      <DarkLayer className={toggleModal && 'toggle'} onClick={toggleModalHandler} />
    </>
  );
};

export default Navigation;
