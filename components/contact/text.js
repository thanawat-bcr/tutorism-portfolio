import { Fragment, useEffect } from 'react';
import utils from '../../styles/utils';
import useWindowSize from '../size';
const Text = (props) => {
  const isMobile = useWindowSize().width < 768;

  return (
    <Fragment>
      <div
        className={`text-lg font-light my-4 w-text w-full ${
          isMobile ? 'mx-auto' : ''
        }`}
        style={{ textIndent: '3rem', textAlign: 'justify' }}
      >
        I am interested in freelance opportunities to gain more working
        experience and improve more working skills, especially the frontend and
        mobile development projects.
      </div>
      <style jsx>{utils}</style>
      <style jsx>{``}</style>
    </Fragment>
  );
};

export default Text;
