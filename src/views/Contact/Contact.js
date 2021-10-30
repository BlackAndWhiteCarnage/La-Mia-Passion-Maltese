import React, { useState, useRef } from 'react';
import ContentWrapper from 'hoc/ContentWrapper';
import emailjs from 'emailjs-com';
import { Wrapper, Form, Label, Input, Textarea, WaitingWrapper } from './Contact.styles';
import { fadeAnim } from 'assets/animations/animation';
import { useScroll } from 'helpers/useScroll';
import Button from 'components/Button/Button';

const Contact = ({ setCurrentSection }) => {
  const [emailSend, setEmailSend] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validSubject, setValidSubject] = useState(false);
  const [validMessage, setValidMessage] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const [element, controls] = useScroll();

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
    <ContentWrapper setCurrentSection={setCurrentSection} sectionIndex={7} id='contact'>
      <Wrapper variants={fadeAnim} animate={controls} initial='hidden' ref={element}>
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
          <Button type='submit' onClick={checkValid} className='form' text='Wyślij' />
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

export default Contact;
