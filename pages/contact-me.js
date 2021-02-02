import { Fragment } from 'react';
import utils from '../styles/utils';
import General from '../components/layouts/general';

import emailjs from 'emailjs-com';
const ContactMe = (props) => {
  const sendEmail = (e) => {
    e.preventDefault();

    location.reload();
    return;
    emailjs
      .sendForm(
        'service_yqolhpl',
        'template_b5b8v9h',
        e.target,
        'user_gCpX2dJ1OEUPYW19uDQrP'
      )
      .then(
        (result) => {
          console.log(result.text);
          location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Fragment>
      <General>
        <div style={{ width: '35%' }}>
          <div className='font-bold text-header text-secondary'>
            Contact <span className='text-contrast'>Me</span>
          </div>
          <div
            className='text-lg font-light my-4'
            style={{ textIndent: '3rem', textAlign: 'justify' }}
          >
            I am interested in freelance opportunities to gain more working
            experience and improve more working skills, especially the frontend
            and mobile development projects.
          </div>
          <form className='flex flex-col' onSubmit={sendEmail}>
            <div className='w-full flex'>
              <div className='input-group' style={{ width: '49%' }}>
                <input required placeholder=' ' type='text' name='from_name' />
                <label>Name</label>
              </div>
              <div style={{ width: '2%' }}></div>
              <div className='input-group' style={{ width: '49%' }}>
                <input
                  required
                  placeholder=' '
                  type='email'
                  name='from_email'
                />
                <label>Email</label>
              </div>
            </div>
            <div className='input-group'>
              <input required placeholder=' ' type='text' name='subject' />
              <label>Subject</label>
            </div>
            <div className='input-group'>
              <textarea required placeholder=' ' name='message' rows='5' />
              <label>Message</label>
            </div>
            <input type='submit' value='Submit' />
          </form>
        </div>
      </General>
      <style jsx>{utils}</style>
      <style jsx>{`
        input,
        textarea {
          background-color: #eeeeee;
          border: none;
          outline: none;
          padding: 1.15rem 0.75rem 0.5rem 0.75rem;
          width: 100%;
        }
        .input-group {
          position: relative;
          margin: 0.5rem 0;
        }
        .input-group label {
          color: #444444;
          position: absolute;
          margin-top: 0.825rem;
          left: 0.5rem;
          font-size: 0.8rem;
          transition: 300ms;
        }
        textarea:not(:placeholder-shown) + label,
        input:not(:placeholder-shown) + label,
        textarea:focus + label,
        input:focus + label {
          transform: translateY(-70%);
          font-size: 0.6rem;
        }
        input[type='submit'] {
          background-color: #ff88cc;
          color: #fefefe;
          font-weight: 600;
          font-size: 1rem;
          width: 8rem;
          padding: 0.75rem 2rem;
          margin-left: auto;
        }
      `}</style>
    </Fragment>
  );
};

export default ContactMe;
