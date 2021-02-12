import { Fragment, useEffect } from 'react';
import utils from '../../styles/utils';
import useWindowSize from '../size';
const Description = (props) => {
  const isMobile = useWindowSize().width < 768;
  return (
    <Fragment>
      <div
        className={`text-size font-light ${isMobile ? 'my-2' : 'my-4'} `}
        style={{ textIndent: '3rem', textAlign: 'justify' }}
      >
        My main area of expertises are frontend development and mobile
        development.
      </div>
      <div
        className={`text-size font-light ${isMobile ? 'my-2' : 'my-4'} `}
        style={{ textIndent: '3rem', textAlign: 'justify' }}
      >
        {' '}
        HTML, CSS, Javascipt, building small and medium web apps with Vue.js and
        React + pure CSS. In addition, for mobile development with Dart and
        Flutter. Furthermore, I also work in backend development and database
        system.
      </div>
      <div
        className={`text-size font-light ${isMobile ? 'my-2' : 'my-4'} `}
        style={{ textIndent: '3rem', textAlign: 'justify' }}
      >
        {' '}
        You can visit my Github for more details and feel free to contact me.
      </div>
      <style jsx>{utils}</style>
      <style jsx>{`
        .text-size {
          font-size: 1rem;
        }

        @media only screen and (min-width: 768px) {
          .text-size {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Description;
