import { Fragment } from 'react';
import utils from '../styles/utils';
import General from '../components/layouts/general';

const ContactMe = (props) => {
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
          <div className='w-full flex' style={{ justifyContent: 'flex-end' }}>
            <a
              className='send-mail'
              href='mailto:thanawat.bcr@gmail.com'
              target='_blank'
            >
              Send email
            </a>
          </div>
        </div>
      </General>
      <style jsx>{utils}</style>
      <style jsx>{`
        .send-mail {
          text-decoration: none;
          background-color: #ff88cc;
          color: #fefefe;
          font-weight: 600;
          font-size: 1rem;
          display: inline-block;
          padding: 0.5rem 2rem;
        }
      `}</style>
    </Fragment>
  );
};

export default ContactMe;
