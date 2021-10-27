import React from 'react';
import ContentWrapper from 'hoc/ContentWrapper';
import aboutMeImage1 from 'assets/images/AboutMe1.png';
import aboutMeImage2 from 'assets/images/AboutMe2.png';
import aboutMeImage3 from 'assets/images/AboutMe3.png';
import { ChunksWrapper, Wrapper, Content, Image } from './AboutUs.styles';
import { fadeAnim, imgAnim, textAnim } from 'assets/animations/animation';
import { useScroll } from 'helpers/useScroll';

const ContentChunk = ({ text, image, className }) => {
  const [element, controls] = useScroll();

  return (
    <Wrapper variants={fadeAnim} animate={controls} initial='hidden' ref={element}>
      <Content className={className} variants={textAnim}>
        {text}
      </Content>
      <Image src={image} variants={imgAnim} />
    </Wrapper>
  );
};

const AboutUs = () => {
  return (
    <ContentWrapper>
      <ChunksWrapper>
        <ContentChunk
          text='Jesteśmy hodowlą mieszczącą się w Warszawie, zarejestrowaną w ZKwP Oddział Warszawa ul. Lubelska. W naszej hodowli są cztery suczki, w tym
            dwie emerytki. Każda z nich jest traktowana jak prawdziwy członek rodziny.'
          image={aboutMeImage1}
        />
        <ContentChunk
          className='right'
          text='Dążymy do tego by nasze szczenięta znalazły kompetentnych, kochających i odpowiedzialnych opiekunów. Dokładamy także wszelkich starań, aby
            hodowla była na wysokim poziomie angażując się całym sercem. Oseski w naszej hodowli już w drugiej dobie rozpoczynają wczesnorozwojową
            stymulację neurologiczną.'
          image={aboutMeImage2}
        />
        <ContentChunk
          text='Po 12-14 dniach gdy otworzą oczy i zaczynają słyszeć, rozpoczynamy stymulację dźwiękową która trwa do 12 tygodnia życia. W czwartym
            tygodniu zaczynamy się czesać, myć i suszyć. Zapraszam na mój profil na Facebooku, gdzie można zobaczyć skrawki naszego życia, obejżeć
            śmieszne momenty naszych maluchów, jak również poczytać o wielu ciekawostkach dotyczących rasy.'
          image={aboutMeImage3}
        />
        <ContentChunk className='right' text='Kochamy to co robimy i wychodzi nam to całkiem dobrze.' image={aboutMeImage1} />
      </ChunksWrapper>
    </ContentWrapper>
  );
};

export default AboutUs;
