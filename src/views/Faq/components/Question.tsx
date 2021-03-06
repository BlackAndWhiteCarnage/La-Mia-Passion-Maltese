import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, FaqQuestion, FaqAnswer } from './Question.styles';
import { useScroll } from 'helpers/useScroll';
import { fadeAnim } from 'assets/animations/animation';

interface QuestionProps {
  question: string
  answer: string
}

interface ToggleAnswerType {
  toggleAnswer: boolean
  setToggleAnswer: React.Dispatch<React.SetStateAction<boolean>>
}

const Question = ({ question, answer }: QuestionProps) => {
  const [toggleAnswer, setToggleAnswer] = useState<ToggleAnswerType["toggleAnswer"]>(false);
  const [element, controls] = useScroll();

  const toggleAnswerHandler = (): void=> {
    setToggleAnswer(!toggleAnswer);
  };

  return (
    <Wrapper className={`${toggleAnswer && 'toggle'}`} variants={fadeAnim} animate={controls as any} initial='hidden' ref={element as React.Ref<HTMLDivElement>}>
      <FaqQuestion onClick={toggleAnswerHandler}>{question}</FaqQuestion>
      <FaqAnswer className={`${toggleAnswer && 'toggle'}`}>{answer}</FaqAnswer>
    </Wrapper>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Question;
