import React from 'react';
import homeImage from 'assets/images/Home.png';
import Header from 'components/Header/Header';
import { imageAnim } from 'assets/animations/animation';
import { Wrapper, Image } from './Home.styles';
import ContentWrapper from 'hoc/ContentWrapper';
import { useScroll } from 'helpers/useScroll';

const Home = ({ setCurrentSection }) => {
  const [element, controls] = useScroll();

  return (
    <ContentWrapper setCurrentSection={setCurrentSection} sectionIndex={1}>
      <Wrapper>
        <Header className={'xl large'} text={['La Mia ', ' Passione ', ' Maltese']} textMobile={['La Mia', 'Passione', 'Maltese']} />
        <Image src={homeImage} variants={imageAnim} animate={controls} initial='hidden' ref={element} />
      </Wrapper>
    </ContentWrapper>
  );
};

export default Home;
