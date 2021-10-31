import React from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from 'hoc/ContentWrapper';
import Header from 'components/Header/Header';
import homeImage from 'assets/images/Home.png';
import { useScroll } from 'helpers/useScroll';
import { Wrapper, Image } from './Home.styles';
import { homePageImgAnim } from 'assets/animations/animation';

const Home = ({ setCurrentSection }) => {
  const [element, controls] = useScroll();

  return (
    <ContentWrapper setCurrentSection={setCurrentSection} sectionIndex={1} id='home'>
      <Wrapper>
        <Header className={'xl large'} text={['La Mia ', ' Passione ', ' Maltese']} textMobile={['La Mia', 'Passione', 'Maltese']} />
        <Image src={homeImage} variants={homePageImgAnim} animate={controls} initial='hidden' ref={element} />
      </Wrapper>
    </ContentWrapper>
  );
};

Home.propTypes = {
  setCurrentSection: PropTypes.func.isRequired,
};

export default Home;
