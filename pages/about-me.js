import { Fragment } from 'react';
import utils from '../styles/utils';
import General from '../components/layouts/general';
const AboutMe = (props) => {
  return (
    <Fragment>
      <General>
        <div className='font-bold text-header text-secondary'>
          About <span className='text-contrast'>Me</span>
        </div>
        <div
          className='text-lg font-light'
          style={{ width: '35%', textIndent: '3rem', textAlign: 'justify' }}
        >
          I'm a{' '}
          <span className='font-bold text-contrast'>frontend developer</span>{' '}
          and <span className='font-bold text-contrast'>mobile developer</span>{' '}
          with a passion for UX and UI in application development. For web
          development, I am interested in Vue.js and React with pure CSS and
          other CSS frameworks. For mobile development, I am interested in
          Flutter. Currently, I have a little experience in frontend and mobile
          development from freelance works and university projects. So, I am
          looking forward to gain more working experience and improve my skills.
        </div>
      </General>
      <style jsx>{utils}</style>
    </Fragment>
  );
};

export default AboutMe;
