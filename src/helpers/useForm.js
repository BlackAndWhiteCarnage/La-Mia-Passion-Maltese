import { useState } from 'react';
import emailjs from 'emailjs-com';

export const useForm = () => {
  const [emailSend, setEmailSend] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validSubject, setValidSubject] = useState(false);
  const [validMessage, setValidMessage] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [waiting, setWaiting] = useState(false);

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

  return {
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
  };
};
