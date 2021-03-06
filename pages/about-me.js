import { Fragment } from 'react';
import utils from '../styles/utils';
import General from '../components/layouts/general';
import Header from '../components/template/header';
import useWindowSize from '../components/size';
const AboutMe = (props) => {
  const isMobile = useWindowSize().width < 768;
  const { height } = useWindowSize();
  return (
    <Fragment>
      <General>
        <div className={`w-text h-full flex flex-col justify-center`}>
          <Header head='About' body='Me'></Header>
          <div
            className={`font-light spacing-sm text-body`}
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
        .w-text {
          margin: 0 auto;
          width: 20rem;
        }

        @media only screen and (min-width: 768px) {
          .w-text {
            width: 40rem;
            margin: 0;
          }
        }

        @media only screen and (min-width: 992px) {
          .w-text {
            width: 50rem;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default AboutMe;
