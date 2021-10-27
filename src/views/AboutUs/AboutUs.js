import React from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from 'hoc/ContentWrapper';
import styled from 'styled-components';
import aboutMeImage1 from 'assets/images/AboutMe1.png';
import aboutMeImage2 from 'assets/images/AboutMe2.png';
import aboutMeImage3 from 'assets/images/AboutMe3.png';

export const ChunksWrapper = styled.div`
  position: relative;
  width: 65%;
  height: 90%;
  max-width: 1920px;
  overflow-x: hidden;
  @media screen and (max-width: 1400px) {
    width: 80%;
  }
`;

const ContentChunk = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  justify-items: space-between;
  margin-bottom: 50px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }
`;

const Content = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  display: flex;
  align-items: center;
  grid-row-start: 1;
  @media screen and (max-width: 1200px) {
    grid-column-start: 1;
    grid-row-start: 2;
    text-align: center !important;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  &.right {
    grid-column-start: 2;
    text-align: right;
    @media screen and (max-width: 1200px) {
      grid-column-start: 1;
      grid-row-start: 2;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  @media screen and (max-width: 1200px) {
    grid-row-start: 1;
    justify-self: center;
    width: auto;
    height: 350px;
  }
`;

const AboutUs = () => {
  return (
    <ContentWrapper>
      <ChunksWrapper>
        <ContentChunk>
          <Content>
            Jesteśmy hodowlą mieszczącą się w Warszawie, zarejestrowaną w ZKwP Oddział Warszawa ul. Lubelska. W naszej hodowli są cztery suczki, w tym
            dwie emerytki. Każda z nich jest traktowana jak prawdziwy członek rodziny.
          </Content>
          <Image src={aboutMeImage1} />
        </ContentChunk>
        <ContentChunk>
          <Content className='right'>
            Dążymy do tego by nasze szczenięta znalazły kompetentnych, kochających i odpowiedzialnych opiekunów. Dokładamy także wszelkich starań, aby
            hodowla była na wysokim poziomie angażując się całym sercem. Oseski w naszej hodowli już w drugiej dobie rozpoczynają wczesnorozwojową
            stymulację neurologiczną.
          </Content>
          <Image src={aboutMeImage2} />
        </ContentChunk>
        <ContentChunk>
          <Content>
            Po 12-14 dniach gdy otworzą oczy i zaczynają słyszeć, rozpoczynamy stymulację dźwiękową która trwa do 12 tygodnia życia. W czwartym
            tygodniu zaczynamy się czesać, myć i suszyć. Zapraszam na mój profil na Facebooku, gdzie można zobaczyć skrawki naszego życia, obejżeć
            śmieszne momenty naszych maluchów, jak również poczytać o wielu ciekawostkach dotyczących rasy.
          </Content>
          <Image src={aboutMeImage3} />
        </ContentChunk>
        <ContentChunk>
          <Content className='right'>Kochamy to co robimy i wychodzi nam to całkiem dobrze.</Content>
          <Image src={aboutMeImage1} />
        </ContentChunk>
      </ChunksWrapper>
    </ContentWrapper>
  );
};

AboutUs.propTypes = {};

export default AboutUs;
