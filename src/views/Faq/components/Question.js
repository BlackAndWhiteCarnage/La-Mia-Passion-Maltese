import React, { useState } from 'react';
import { Wrapper, FaqQuestion, FaqAnswer } from './Question.styles';

const Question = ({ question, answer }) => {
  const [toggleAnswer, setToggleAnswer] = useState(false);

  const toggleAnswerHandler = () => {
    setToggleAnswer(!toggleAnswer);
  };

  return (
    <Wrapper className={toggleAnswer && 'toggle'}>
      <FaqQuestion onClick={toggleAnswerHandler}>{question}</FaqQuestion>
      <FaqAnswer className={toggleAnswer && 'toggle'}>{answer}</FaqAnswer>
    </Wrapper>
  );
};

Question.propTypes = {};

export default Question;
