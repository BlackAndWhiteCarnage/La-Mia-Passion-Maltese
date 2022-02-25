import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import Exhibitions from '../Exhibitions';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { year2015, year2020 } from 'data/exhibitionsData'

window.HTMLElement.prototype.scrollIntoView = jest.fn()

const MockExhibitions = () => {
  return (
    <ThemeProvider theme={theme}>
      <Exhibitions setCurrentSection={() => {}} />
    </ThemeProvider>
  );
};

describe('Exhibitions', () => {
    it('shoud render year2015 exhibitions at first', () => {
      render(<MockExhibitions />);
      const exhibitionElements = screen.getAllByTestId('exhibition');
      expect(exhibitionElements.length).toBe(year2015.length)
    });
    it('shoud exhibitions change after clicking different year button', () => {
      render(<MockExhibitions />);
      const buttonElement = screen.getByText('2020');
      fireEvent.click(buttonElement)
      const exhibitionElements = screen.getAllByTestId('exhibition');
      expect(exhibitionElements.length).toBe(year2020.length)
    });
  });
