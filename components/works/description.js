import { Fragment, useEffect } from 'react';
import utils from '../../styles/utils';
const Description = (props) => {
  return (
    <Fragment>
      <div
        className='text-md font-light my-8 line-height-sm desc-text mx-4'
        style={{
          textIndent: '3rem',
          textAlign: 'justify',
        }}
      >
        {props.work.desc}
      </div>

      <style jsx>{utils}</style>
      <style jsx>{`
        .desc-text {
          position: relative;
          padding-left: 1rem;
          margin-left: 2rem;
        }
        .desc-text::before {
          content: '';
          position: absolute;
          width: 5px;
          height: 100%;
          background-color: #e5e5e5;
          left: 0;
        }
        @media only screen and (min-width: 768px) {
          .desc-text {
            width: 30rem;
          }
        }
        @media only screen and (min-width: 992px) {
          .desc-text {
            width: 35rem;
          }
        }

        @media only screen and (min-width: 1200px) {
          .desc-text {
            width: 45rem;
          }
        }
        @media only screen and (min-width: 1500px) {
          .desc-text {
            width: 60rem;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Description;
