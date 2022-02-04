import React from 'react';
import PropTypes from 'prop-types'
import ContentWrapper from 'hoc/ContentWrapper';
import SectionItemsWrapper from 'hoc/SectionItemsWrapper';
import Step from './components/Step';
import { SectionType } from 'Root'

interface BuyingProcessProps {
  setCurrentSection: SectionType["setCurrentSection"]
}

const BuyingProcess: React.FC<BuyingProcessProps> = ({ setCurrentSection }) =>
  <ContentWrapper setCurrentSection={setCurrentSection} sectionIndex={5} id='buyingProcess'>
    <SectionItemsWrapper>
      <Step
        text='Po dłuższej rozmowie drogą telefoniczną lub mailową, jeśli obie strony są zainteresowane, umawiamy się na spotkanie w naszej hodowli. Do
          pierwszego spotkania, może dojść dopiero, gdy maluszki skończą cztery tygodnie. Wcześniej nie niepokoimy mamy i szczeniaczków.'
        headerText='Rozmowa'
      />
      <Step
        text='Będziemy wdzięczni za przygotowanie pytań do hodowcy. Na wszystkie cierpliwie odpowiemy. Zawsze sunia, która akurat ma miot, wita
          potencjalnych przyszłych właścicieli. Jej zachowanie wiele nam mówi o człowieku. Następnie zaprosimy Was do salonu, gdzie będziecie mogli
          nawiązać pierwszy kontakt z maluchami.'
        headerText='Spotkanie'
      />
      <Step
        text='Jeśli obydwie strony będą zadowolone ze spotkania, istnieje możliwość podpisania umowy przedwstępnej. Wtedy dla Państwa piesek automatycznie
          jest zarezerwowany.'
        headerText='Umowa'
      />
      <Step
        text='Wszystkie nasze szczenięta w dniu odbioru otrzymują:'
        headerText='Wyprawka'
        list={[
          'Książeczkę zdrowia z udokumentowanymi odrobaczeniami oraz szczepieniami',
          'Umowę cywilno-prawną zakupu psa rasowego',
          'Metrykę urodzeniową wydaną przez ZkwP, która upoważnia nowego właściciela do wyrobienia rodowodu',
          'Instrukcję hodowlaną',
          'Wyprawkę (zabawki, kocyk, smycz, obróżkę, karmę itp.)',
        ]}
      />
    </SectionItemsWrapper>
  </ContentWrapper>

BuyingProcess.propTypes = {
  setCurrentSection: PropTypes.func.isRequired,
};

export default BuyingProcess;
