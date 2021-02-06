import { Fragment } from 'react';
import utils from '../styles/utils';
import General from '../components/layouts/general';
import useWindowSize from '../components/size';
const AboutMe = (props) => {
  const size = useWindowSize();
  return (
    <Fragment>
      <General>
        <div className={`${size.width > 768 ? 'w-50 ' : 'w-full'}`}>
          <div className='font-bold text-header text-secondary'>
            About <span className='text-contrast'>Me</span>
          </div>
          <div
            className={`text-lg font-light my-4 spacing-sm `}
            style={{ textIndent: '3rem', textAlign: 'justify' }}
          >
            I'm a{' '}
            <span className='font-bold text-contrast'>frontend developer</span>{' '}
            and{' '}
            <span className='font-bold text-contrast'>mobile developer</span>{' '}
            with a passion for UX and UI in application development. For web
            development, I am interested in Vue.js and React with pure CSS and
            other CSS frameworks. For mobile development, I am interested in
            Flutter. Currently, I have a little experience in frontend and
            mobile development from freelance works and university projects. So,
            I am looking forward to gain more working experience and improve my
            skills.
          </div>
        </div>
      </General>
      <style jsx>{utils}</style>
      <style jsx>{`
        .w-50 {
          width: 50%;
        }
      `}</style>
    </Fragment>
  );
};

export default AboutMe;
