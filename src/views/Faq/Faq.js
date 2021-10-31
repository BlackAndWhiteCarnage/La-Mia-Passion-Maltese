import React from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from 'hoc/ContentWrapper';
import SectionItemsWrapper from 'hoc/SectionItemsWrapper';
import Question from './components/Question';
import { faqData } from 'data/faqData';

const Faq = ({ setCurrentSection }) => (
  <ContentWrapper setCurrentSection={setCurrentSection} sectionIndex={6} id='faq' className='white'>
    <SectionItemsWrapper className='overflowHidden'>
      {faqData.map((obj) => (
        <Question key={obj.question} {...obj} />
      ))}
    </SectionItemsWrapper>
  </ContentWrapper>
);

Faq.propTypes = {
  setCurrentSection: PropTypes.func.isRequired,
};

export default Faq;
