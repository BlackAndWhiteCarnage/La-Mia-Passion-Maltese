import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from 'hoc/ContentWrapper';
import styled, { keyframes } from 'styled-components';
import emailjs from 'emailjs-com';

export const Wrapper = styled.div`
  position: relative;
  width: 65%;
  height: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1400px) {
    width: 80%;
  }
`;

const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 200px;
  input,
  textarea {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.m};
    outline: none;
    background: none;
    width: 100%;
    transition: 0.5s ease;
  }
  input:focus {
    padding: 20px 0;
    transition: 0.5s ease;
  }
  textarea:focus {
    padding: 20px;
    transition: 0.5s ease;
  }
`;

const Label = styled.label`
  width: 100%;
  margin-bottom: 35px;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  margin-bottom: 100px;
  outline: none;
  padding: 10px 0;
  &.ERROR {
    background: #1e0000;
  }
  &.VALID {
    background: #001502;
  }
`;

const Textarea = styled.textarea`
  min-height: 200px;
  border: none;
  border: 2px solid ${({ theme }) => theme.colors.white};
  padding: 10px;
  resize: none;
  &.ERROR {
    background: #1e0000;
  }
  &.VALID {
    background: #001502;
  }
`;

const Button = styled.button`
  max-width: fit-content;
  font-size: ${({ theme }) => theme.fontSize.l};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 50px;
  letter-spacing: 3px;
  cursor: pointer;
`;

const waitingAnim = keyframes`
  50%{
    transform: translateY(-50px);
  }
`;

export const WaitingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 105%;
  height: 105%;
  opacity: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.25s ease;
  background: rgba(8, 8, 8, 80%);
  backdrop-filter: blur(3px);
  p {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  div {
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.white};
    margin: 25px;
    border-radius: 50%;
    @media screen and (max-width: 620px) {
      width: 30px;
      height: 30px;
    }
  }
  &.show {
    top: -2.5%;
    left: -2.5%;
    opacity: 1;
    pointer-events: all;
    transition: 0.25s ease;
    div {
      :nth-child(1) {
        animation: ${waitingAnim} 1.5s infinite;
      }
      :nth-child(2) {
        animation: ${waitingAnim} 1.5s 0.25s infinite;
      }
      :nth-child(3) {
        animation: ${waitingAnim} 1.5s 0.5s infinite;
      }
    }
  }
`;

const Contact = ({ setCurrentSection }) => {
  const [emailSend, setEmailSend] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validSubject, setValidSubject] = useState(false);
  const [validMessage, setValidMessage] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [waiting, setWaiting] = useState(false);

  const form = useRef();

  const emailHandler = (e) => {
    const valid = /\S+@\S+\.\S+/;
    if (valid.test(e.target.value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const subjectHandler = (e) => {
    if (e.target.value.length >= 5) {
      setValidSubject(true);
    } else {
      setValidSubject(false);
    }
  };

  const messageHandler = (e) => {
    if (e.target.value.length >= 20) {
      setValidMessage(true);
    } else {
      setValidMessage(false);
    }
  };

  function sendEmail(e) {
    e.preventDefault();

    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;

    if (validEmail && validMessage && validSubject) {
      setWaiting(true);
      emailjs.sendForm(`${serviceID}`, `${templateID}`, e.target, `${userID}`).then(
        (result) => {
          setFeedback(0);
          console.log(result.text);
          setEmailSend(true);
          setFeedback(0);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  }

  const checkValid = () => {
    if (validEmail && validMessage && validSubject) {
      setFeedback(1);
    } else {
      setFeedback(2);
      setTimeout(() => {
        setFeedback(0);
      }, 2000);
    }
  };

  return (
    <ContentWrapper setCurrentSection={setCurrentSection} sectionIndex={7}>
      <Wrapper>
        <Form onSubmit={sendEmail} ref={form}>
          <Label>Temat</Label>
          <Input
            id='title'
            name='title'
            className={`${feedback === 2 && !validSubject && 'ERROR'} ${validSubject && 'VALID'}`}
            onChange={subjectHandler}
          />
          <Label>Emial</Label>
          <Input id='email' name='email' className={`${feedback === 2 && !validEmail && 'ERROR'} ${validEmail && 'VALID'}`} onChange={emailHandler} />
          <Label>Wiadomość</Label>
          <Textarea
            id='message'
            name='message'
            placeholder='Minimum 20 znaków'
            className={`${feedback === 2 && !validMessage && 'ERROR'} ${validMessage && 'VALID'}`}
            onChange={messageHandler}
          />
          <Button type='submit' onClick={checkValid}>
            Wyślij
          </Button>
          <WaitingWrapper className={waiting && 'show'}>
            {!emailSend ? (
              <>
                <div />
                <div />
                <div />
              </>
            ) : (
              <p>Email wysłany!</p>
            )}
          </WaitingWrapper>
        </Form>
      </Wrapper>
    </ContentWrapper>
  );
};

Contact.propTypes = {};

export default Contact;
