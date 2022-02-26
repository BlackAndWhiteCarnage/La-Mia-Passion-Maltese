import { useRef } from 'react';
import { Wrapper, Label, Input, Textarea, WaitingWrapper } from './Form.styles';
import Button from 'components/Button/Button';
import { useForm } from 'helpers/useForm';

const Form = () => {
  const form = useRef<HTMLFormElement>(null);

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
    <Wrapper onSubmit={sendEmail} ref={form}>
      <Label htmlFor='title'>Temat</Label>
      <Input
        id='title'
        name='title'
        className={`${feedback === 2 && !validSubject && 'ERROR'} ${validSubject && 'VALID'}`}
        onChange={subjectHandler}
      />
      <Label htmlFor='email'>Email</Label>
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
      <WaitingWrapper className={`${waiting && 'show'}`}>
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
    </Wrapper>
  );
};

export default Form;
