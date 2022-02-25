import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from '../Navigation';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const MockNavigation = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation currentSection={1} />
    </ThemeProvider>
  );
};

describe('Navigation', () => {
  it('shoud modal be closed after render', () => {
    render(<MockNavigation />);
    const modalElement = screen.getByTestId('modal');
    expect(modalElement).not.toHaveClass('toggle');
  });

  it('shoud modal open after hamburger beeing clicked for the first time', () => {
    render(<MockNavigation />);
    const hamburgerElement = screen.getByTitle('Rozwiń/Zamknij menu');
    const modalElement = screen.getByTestId('modal');
    fireEvent.click(hamburgerElement);
    expect(modalElement).toHaveClass('toggle');
  });

  it('shoud modal close after hamburger beeing clicked for the second time', () => {
    render(<MockNavigation />);
    const hamburgerElement = screen.getByTitle('Rozwiń/Zamknij menu');
    const modalElement = screen.getByTestId('modal');
    fireEvent.doubleClick(hamburgerElement);
    expect(modalElement).not.toHaveClass('toggle');
  });

  it('shoud modal close after beeing clicked anywhere', () => {
    render(<MockNavigation />);
    const hamburgerElement = screen.getByTitle('Rozwiń/Zamknij menu');
    const modalElement = screen.getByTestId('modal');
    fireEvent.click(hamburgerElement);
    fireEvent.click(modalElement);
    expect(modalElement).not.toHaveClass('toggle');
  });
});
