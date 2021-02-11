import { Fragment, useEffect } from 'react';
import utils from '../../styles/utils';
import useWindowSize from '../size';
const Email = (props) => {
  const isMobile = useWindowSize().width < 768;

  return (
    <Fragment>
      <a
        className='send-mail'
        href='mailto:thanawat.bcr@gmail.com'
        target='_blank'
      >
        Send email
      </a>
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

export default Email;
