import React from 'react';
import PropTypes from 'prop-types'
import ContentWrapper from 'hoc/ContentWrapper';
import SectionItemsWrapper from 'hoc/SectionItemsWrapper';
import Form from './components/Form';
import { SectionType } from 'Root'

interface ContactProps {
  setCurrentSection: SectionType["setCurrentSection"]
}

const Contact: React.FC<ContactProps> = ({ setCurrentSection }) =>
  <ContentWrapper setCurrentSection={setCurrentSection} sectionIndex={7} id='contact'>
    <SectionItemsWrapper>
      <Form />
    </SectionItemsWrapper>
  </ContentWrapper>

Contact.propTypes = {
  setCurrentSection: PropTypes.func.isRequired,
};

export default Contact;
