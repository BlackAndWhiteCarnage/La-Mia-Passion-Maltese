import React, { useState } from 'react';
import { Wrapper, FaqQuestion, FaqAnswer } from './Question.styles';
import { useScroll } from 'helpers/useScroll';
import { fadeAnim } from 'assets/animations/animation';

const Question = ({ question, answer }) => {
  const [toggleAnswer, setToggleAnswer] = useState(false);
  const [element, controls] = useScroll();

  const toggleAnswerHandler = () => {
    setToggleAnswer(!toggleAnswer);
  };

  return (
    <Wrapper className={toggleAnswer && 'toggle'} variants={fadeAnim} animate={controls} initial='hidden' ref={element}>
      <FaqQuestion onClick={toggleAnswerHandler}>{question}</FaqQuestion>
      <FaqAnswer className={toggleAnswer && 'toggle'}>{answer}</FaqAnswer>
    </Wrapper>
  );
};

Question.propTypes = {};

export default Question;
