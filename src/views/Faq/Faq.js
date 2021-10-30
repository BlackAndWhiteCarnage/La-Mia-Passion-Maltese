import React from 'react';
import ContentWrapper from 'hoc/ContentWrapper';
import { faqData } from 'data/faqData';
import Question from './components/Question';
import { Wrapper } from './Faq.styles';

const Faq = ({ setCurrentSection }) => {
  return (
    <ContentWrapper setCurrentSection={setCurrentSection} sectionIndex={6}>
      <Wrapper>
        {faqData.map((obj) => (
          <Question key={obj.question} {...obj} />
        ))}
      </Wrapper>
    </ContentWrapper>
  );
};

export default Faq;
