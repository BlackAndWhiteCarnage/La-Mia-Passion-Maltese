import PropTypes from 'prop-types';
import ContentWrapper from 'hoc/ContentWrapper';
import SectionItemsWrapper from 'hoc/SectionItemsWrapper';
import Question from './components/Question';
import { faqData } from 'data/faqData';
import { SectionType } from 'Root'

interface FaqProps {
  setCurrentSection: SectionType["setCurrentSection"]
}

const Faq = ({ setCurrentSection }: FaqProps) => (
  <ContentWrapper setCurrentSection={setCurrentSection} sectionIndex={6} id='faq' className='white'>
    <SectionItemsWrapper className='overflowHidden'>
      {faqData.map((obj) => (
        <Question key={obj.question} {...obj}/>
      ))}
    </SectionItemsWrapper>
  </ContentWrapper>
);

Faq.propTypes = {
  setCurrentSection: PropTypes.func.isRequired,
};

export default Faq;
