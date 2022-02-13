import React from 'react';
import PropTypes from 'prop-types'
import Header from 'components/Header/Header';
import { Wrapper, List } from './Step.styles';
import { fadeAnim } from 'assets/animations/animation';
import { useScroll } from 'helpers/useScroll';

interface StepProps {
  text: string
  headerText: string
  list?: string[]
}

const Step = ({ text, headerText, list }: StepProps) => {
  const [element, controls] = useScroll();

  return (
    <Wrapper variants={fadeAnim} animate={controls as any} initial='hidden' ref={element as React.Ref<HTMLDivElement>}>
      <Header text={[headerText]} className='xl large static' />
      {text}
      <List>{list && list.map((listItem) => <li key={listItem}>{listItem}</li>)}</List>
    </Wrapper>
  );
};

Step.propTypes = {
  text: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  list: PropTypes.array,
};

export default Step;
