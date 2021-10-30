import React, { useState, useRef } from 'react';
import ContentWrapper from 'hoc/ContentWrapper';
import { Wrapper, Form, Label, Input, Textarea, WaitingWrapper } from './Contact.styles';
import { fadeAnim } from 'assets/animations/animation';
import { useScroll } from 'helpers/useScroll';
import Button from 'components/Button/Button';
import { useForm } from 'helpers/useForm';

const Contact = ({ setCurrentSection }) => {
  const [element, controls] = useScroll();
  const form = useRef();

  const {
    sendEmail,
    feedback,
    validSubject,
    subjectHandler,
    validEmail,
    emailHandler,
    validMessage,
    messageHandler,
    checkValid,
    waiting,
    emailSend,
  } = useForm();

  return (
    <ContentWrapper setCurrentSection={setCurrentSection} sectionIndex={7} id='contact'>
      <Wrapper variants={fadeAnim} animate={controls} initial='hidden' ref={element}>
        <Form onSubmit={sendEmail} ref={form}>
          <Label htmlFor='title'>Temat</Label>
          <Input
            id='title'
            name='title'
            className={`${feedback === 2 && !validSubject && 'ERROR'} ${validSubject && 'VALID'}`}
            onChange={subjectHandler}
          />
          <Label htmlFor='email'>Emial</Label>
          <Input id='email' name='email' className={`${feedback === 2 && !validEmail && 'ERROR'} ${validEmail && 'VALID'}`} onChange={emailHandler} />
          <Label htmlFor='message'>Wiadomość</Label>
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
