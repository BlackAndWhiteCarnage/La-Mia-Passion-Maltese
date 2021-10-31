import React from 'react';
import PropTypes from 'prop-types';
import facebookIcon from 'assets/icons/facebook-icon.svg';
import emailIcon from 'assets/icons/email-icon.svg';
import phoneIcon from 'assets/icons/phone-icon.svg';
import { Wrapper, IconWrapper, Icon } from './SocialMedia.styles';

const SocialMedia = ({ toggleModal }) => {
  return (
    <Wrapper className={toggleModal && 'toggle'}>
      <IconWrapper
        href='https://www.facebook.com/La-mia-Passione-Maltese-Kasia-Repsch-508000912674823'
        rel='noreferrer'
        target='_blank'
        title='Przejdź do Facebooka'
      >
        <Icon src={facebookIcon} alt='Facebook Icon' />
      </IconWrapper>
      <IconWrapper href='mailto:kasia.repsch@wp.pl' target='_blank' rel='noreferrer' title='Wyślij Maila'>
        <Icon src={emailIcon} alt='Email Icon' />
      </IconWrapper>
      <IconWrapper href='tel:880-275-820' target='_blank' rel='noreferrer' title='Zadzwoń'>
        <Icon src={phoneIcon} alt='Phone Call Icon' />
      </IconWrapper>
    </Wrapper>
  );
};

SocialMedia.propTypes = {
  toggleModal: PropTypes.bool.isRequired,
};

export default SocialMedia;
