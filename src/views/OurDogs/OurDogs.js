import React from 'react';
import ContentWrapper from 'hoc/ContentWrapper';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import DogImage1 from 'assets/images/Dog1.png';
import DogImage2 from 'assets/images/Dog2.png';
import DogImage3 from 'assets/images/Dog3.png';
import DogImage4 from 'assets/images/Dog4.png';
import Header from 'components/Header/Header';

export const Wrapper = styled.div`
  position: relative;
  width: 65%;
  height: 90%;
  max-width: 1920px;
  overflow-x: hidden;
  padding-top: 200px;
  @media screen and (max-width: 1400px) {
    width: 80%;
  }
`;

export const Dog = styled(motion.div)`
  position: relative;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  justify-items: space-between;
  margin-bottom: 350px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }
  @media screen and (max-width: 680px) {
    margin-bottom: 250px;
  }
`;

export const Content = styled(motion.div)`
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

export const Image = styled(motion.img)`
  width: 100%;
  @media screen and (max-width: 1200px) {
    grid-row-start: 1;
    justify-self: center;
    width: auto;
    height: 350px;
  }
`;

const OurDogs = () => {
  return (
    <ContentWrapper>
      <Wrapper>
        <Dog>
          <Header className={'xl large top'} text={['Dilayla ', ' Tuches']} textMobile={['Dilayla', 'Tuches']} />
          <Content>
            Emi była naszym pierwszym Maltanczykiem. Można ją opisać jednym słowem "Łobuz". Za młodu niezwykle energiczna i radosna. Zdejmowała
            papiloty przed wystawami, jadła WSZYSTKO co się tylko dało i zawsze musiała się w czymś wytarzać. Najwięcej zabawnych historii mamy
            właśnie z nią. To ona pokazała nam czym jest czysta radość na widok nieznanego gościa w domu. I to ona przeżyła nasze pierwsze wzloty i
            upadki na wystawach. Teraz Emi jest już emerytką, która spędza czas na kanapie obserwując to co robią domownicy.
          </Content>
          <Image src={DogImage1} />
        </Dog>
        <Dog>
          <Header className={'xl large top'} text={['Oro ', ' Bianco']} textMobile={['Oro', 'Bianco']} />
          <Content className='right'>
            Bianka, pojawiła się jako druga w naszym domu. To najbardziej niepowtarzalny charakter. Któregoś dnia ją obcięłam a Mąż zobaczywszy ją
            powiedział, że wygląda brzydko. Wierzcie lub nie, przez tydzień go omijała. Nasza indywidualistka nie lubi dzieci, a w dodatku jest
            rasistką, która szczeka tylko na psy innego koloru niż biały. Nie potrafi wskoczyć na kanapę, chyba że jej podłożysz czerwony dywan. Na co
            dzień dama, zdecydowanie żądząca stadem. Kiedy dostaje coś do jedzenia najpierw musi powąchać co to jest zanim zje.
          </Content>
          <Image src={DogImage2} />
        </Dog>
        <Dog>
          <Header className={'xl large top'} text={['Piccolo ', ' Perla']} textMobile={['Piccolo', 'Perla']} />
          <Content>
            Perełka to kolejny "charakterek", który się u nas pojawił. Ta niezwykła sunia podczas strzyżenia czy czesania włosów... zasypia. Można z
            nią wtedy zrobić wszystko. Uwielbia się bawić i śpi na posłaniu otoczona swoimi zabawkami. Gdy przyjeżdża inny pies w odwiedziny, to jego
            potencjalna zabawka z którą przyjechał, jest już zabawką Perełki. No chyba, że ta zabawka piszczy. Wtedy nie spocznie póki jej nie
            zepsuje.
          </Content>
          <Image src={DogImage3} />
        </Dog>
        <Dog>
          <Header className={'xl large top'} text={['Bacio ', " D'Amore"]} textMobile={['Bacio', "D'Amore"]} />
          <Content className='right'>
            Baby to nasza najmłodsza pociecha. Jaka jest z charakteru? To wykapana mama (Piccolo Perla) czyli radosna, energiczna i zawsze znajdująca
            czas na zabawę sunia. Mimo tego, że jest młodziutka, już jeździmy z nią na wystawy, na których osiąga same sukcesy. Jest niezwykle ułożona
            po mamie, po prostu ideał wśród Maltańczyków. Jej charakter jest idealny dla starszych dzieci, dorosłych jak i dla wymagającego hodowcy.
            Życzę każdemy psa z tak elastycznym usposobieniem.
          </Content>
          <Image src={DogImage4} />
        </Dog>
      </Wrapper>
    </ContentWrapper>
  );
};

export default OurDogs;
