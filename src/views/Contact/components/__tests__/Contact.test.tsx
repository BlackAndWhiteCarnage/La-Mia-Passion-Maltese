import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import Form from '../Form';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const MockForm = () => (
    <ThemeProvider theme={theme}>
      <Form />
    </ThemeProvider>
);

const passInputValues = (subject: string, email: string, message: string) => {
    const subjectInputElement = screen.getByLabelText('Temat');
    const emailInputElement = screen.getByLabelText('Email');
    const messageInputElement = screen.getByLabelText('Wiadomość');
    const buttonElement = screen.getByRole('button');

    fireEvent.change(subjectInputElement, { target: { value: subject } })
    fireEvent.change(emailInputElement, { target: { value: email } })
    fireEvent.change(messageInputElement, { target: { value: message } })

    if(!subject || !email || !message){
        fireEvent.click(buttonElement)
    }

    if(!subject && !email && !message){
        expect(subjectInputElement).toHaveClass('ERROR')
        expect(emailInputElement).toHaveClass('ERROR')
        expect(messageInputElement).toHaveClass('ERROR')
    } else if (!subject && email && message){
        expect(subjectInputElement).toHaveClass('ERROR')
        expect(emailInputElement).toHaveClass('VALID')
        expect(messageInputElement).toHaveClass('VALID')
    } else if (subject && !email && message){
        expect(subjectInputElement).toHaveClass('VALID')
        expect(emailInputElement).toHaveClass('ERROR')
        expect(messageInputElement).toHaveClass('VALID')
    } else if (subject && email && !message){
        expect(subjectInputElement).toHaveClass('VALID')
        expect(emailInputElement).toHaveClass('VALID')
        expect(messageInputElement).toHaveClass('ERROR')
    } else if (subject && email && message){
        expect(subjectInputElement).toHaveClass('VALID')
        expect(emailInputElement).toHaveClass('VALID')
        expect(messageInputElement).toHaveClass('VALID')
    }
}

describe('Form', () => {
    it('shoud warn while all inputs are invalid', () => {
      render(<MockForm />);
      passInputValues('', '', '')
    });
    it('shoud warn if subject is invalid', () => {
      render(<MockForm />);
      passInputValues('', 'example@email.com', 'Message to a good people!')
    });
    it('shoud warn if email is invalid', () => {
        render(<MockForm />);
        passInputValues('Passing any subject', '', 'Message to a good people!')
    });
    it('shoud warn if message is invalid', () => {
        render(<MockForm />);
        passInputValues('Passing any subject', 'example@email.com', '')
    });
    it('shoud all inputs get VALID class while they are valid', () => {
        render(<MockForm />);
        passInputValues('Passing any subject', 'example@email.com', 'Message to a good people!')
    });
});
