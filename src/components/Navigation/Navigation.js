import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, NavigationWrapper, Hamburger, Line, Modal, DarkLayer, LinksWrapper, Link } from './Navigation.styles';

const Navigation = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
  };

  useEffect(() => {
    document.body.style.overflowY = `${toggleModal ? 'hidden' : 'scroll'}`;
  }, [toggleModal]);

  return (
    <>
      <Wrapper>
        <NavigationWrapper>
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
        <LinksWrapper className={toggleModal && 'toggle'}>
          <Link>Strona Główna</Link>
          <Link>O Hodowli</Link>
          <Link>Nasze Psy</Link>
          <Link>Wystawy</Link>
          <Link>Kupno Szczeniaka</Link>
          <Link>Faq</Link>
          <Link>Kontakt</Link>
        </LinksWrapper>
      </Wrapper>
      <Modal className={toggleModal && 'toggle'}></Modal>
      <DarkLayer className={toggleModal && 'toggle'} />
    </>
  );
};

Navigation.propTypes = {};

export default Navigation;
