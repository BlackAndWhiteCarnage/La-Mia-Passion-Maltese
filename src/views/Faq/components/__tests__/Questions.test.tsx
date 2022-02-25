import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import Question from '../Question';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { faqData } from 'data/faqData';

const MockQuestion = () => {
  return (
    <ThemeProvider theme={theme}>
      {faqData.map(({question, answer}) => (
        <Question  question={question} answer={answer} />
      ))}
    </ThemeProvider>
  );
};

const getAllQuestions = (isDubleClick: boolean) => {
  faqData.forEach(({ question, answer }) => {
    const faqQuestionElement = screen.getByText(question);
    const faqAnswerElement = screen.getByText(answer);
    if(isDubleClick){
      fireEvent.doubleClick(faqQuestionElement)
      expect(faqAnswerElement).not.toHaveClass('toggle')
    } else {
      fireEvent.click(faqQuestionElement)
      expect(faqAnswerElement).toHaveClass('toggle')
    }
  })
}

describe('Question', () => {
    it('shoud show answer after question beeing clicked', () => {
      render(<MockQuestion />);
      getAllQuestions(false)
    });
    it('shoud hide answer after question beeing clicked for the second time', () => {
      render(<MockQuestion />);
      getAllQuestions(true)
    });
  });
