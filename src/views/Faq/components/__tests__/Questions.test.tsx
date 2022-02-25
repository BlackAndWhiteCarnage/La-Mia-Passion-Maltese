import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import Question from '../Question';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

type MockQuestionProps = {
    question: string,
    answer: string
}

const MockQuestion = ({ question, answer }: MockQuestionProps) => {
  return (
    <ThemeProvider theme={theme}>
        <Question  question={question} answer={answer} />
    </ThemeProvider>
  );
};

describe('Question', () => {
    it('shoud show answer after question beeing clicked', () => {
      render(<MockQuestion question='Ile kosztuje Maltańczyk?' answer='Cena pieska jest ustalana indywidualnie.'/>);
      const faqQuestionElement = screen.getByText('Ile kosztuje Maltańczyk?');
      const faqAnswerElement = screen.getByText('Cena pieska jest ustalana indywidualnie.');
      fireEvent.click(faqQuestionElement)
      expect(faqAnswerElement).toHaveClass('toggle')
    });
    it('shoud hide answer after question beeing clicked for the second time', () => {
      render(<MockQuestion question='Ile kosztuje Maltańczyk?' answer='Cena pieska jest ustalana indywidualnie.'/>);
      const faqQuestionElement = screen.getByText('Ile kosztuje Maltańczyk?');
      const faqAnswerElement = screen.getByText('Cena pieska jest ustalana indywidualnie.');
      fireEvent.doubleClick(faqQuestionElement)
      expect(faqAnswerElement).not.toHaveClass('toggle')
    });
  });
