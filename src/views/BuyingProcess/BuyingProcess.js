import React from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from 'hoc/ContentWrapper';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from 'components/Header/Header';

export const Wrapper = styled.div`
  position: relative;
  width: 65%;
  height: 90%;
  max-width: 1400px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1400px) {
    width: 80%;
  }
`;

export const ContentChunk = styled(motion.div)`
  position: relative;
  width: 100%;
  height: auto;
  margin: 150px 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  @media screen and (max-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    width: 100%;
    margin: 100px 0;
  }
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  li {
    font-size: ${({ theme }) => theme.fontSize.s};
    background: ${({ theme }) => theme.colors.darkGrey};
    padding: 10px 0 10px 15px;
    display: flex;
    align-items: center;
    line-height: normal;
    @media screen and (max-width: 680px) {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
    &:first-child {
      margin-top: 50px;
    }
    margin-bottom: 30px;
  }
`;

const BuyingProcess = ({ setCurrentSection }) => {
  return (
    <ContentWrapper setCurrentSection={setCurrentSection} sectionIndex={5}>
      <Wrapper>
        <ContentChunk>
          <Header text={['Rozmowa']} className='xl large static' />
          Po dłuższej rozmowie drogą telefoniczną lub mailową, jeśli obie strony są zainteresowane, umawiamy się na spotkanie w naszej hodowli. Do
          pierwszego spotkania, może dojść dopiero, gdy maluszki skończą cztery tygodnie. Wcześniej nie niepokoimy mamy i szczeniaczków.
        </ContentChunk>
        <ContentChunk>
          <Header text={['Spotkanie']} className='xl large static' />
          Będziemy wdzięczni za przygotowanie pytań do hodowcy. Na wszystkie cierpliwie odpowiemy. Zawsze sunia, która akurat ma miot, wita
          potencjalnych przyszłych właścicieli. Jej zachowanie wiele nam mówi o człowieku. Następnie zaprosimy Was do salonu, gdzie będziecie mogli
          nawiązać pierwszy kontakt z maluchami.
        </ContentChunk>
        <ContentChunk>
          <Header text={['Umowa']} className='xl large static' />
          Jeśli obydwie strony będą zadowolone ze spotkania, istnieje możliwość podpisania umowy przedwstępnej. Wtedy dla Państwa piesek automatycznie
          jest zarezerwowany.
        </ContentChunk>
        <ContentChunk>
          <Header text={['Wyprawka']} className='xl large static' />
          Wszystkie nasze szczenięta w dniu odbioru otrzymują:
          <List>
            <li>Książeczkę zdrowia z udokumentowanymi odrobaczeniami oraz szczepieniami.</li>
            <li>Umowę cywilno-prawną zakupu psa rasowego.</li>
            <li>Metrykę urodzeniową wydaną przez ZkwP, która upoważnia nowego właściciela do wyrobienia rodowodu</li>
            <li>Instrukcję hodowlaną</li>
            <li>Wyprawkę (zabawki, kocyk, smycz, obróżkę, karmę itp.)</li>
          </List>
        </ContentChunk>
      </Wrapper>
    </ContentWrapper>
  );
};

BuyingProcess.propTypes = {};

export default BuyingProcess;
