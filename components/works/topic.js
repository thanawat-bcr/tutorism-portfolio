import { Fragment, useEffect } from 'react';
import utils from '../../styles/utils';
import useWindowSize from '../size';
const Topic = (props) => {
  const isMobile = useWindowSize().width < 768;
  return (
    <Fragment>
      <div className='topic-section'>
        <div className='flex font-thick text-subheader '>
          <div className='text-contrast'>{props.work.title.head}</div>
          <div className='text-secondary'>{props.work.title.body}</div>
        </div>
        <div
          className='flex text-md'
          style={{ marginTop: isMobile ? '1rem' : '' }}
        >
          <div
            className={`text-lg font-thick `}
            style={{ marginRight: '0.5rem' }}
          >
            Stack:{' '}
          </div>
          <div className={`flex ${isMobile ? 'wrap' : 'flex-col'}`}>
            {props.work.stacks.map((stack, index) => (
              <div key={index} className='my-1 font-light'>
                {isMobile
                  ? `${stack} ${
                      index == props.work.stacks.length - 1 ? '' : ','
                    }`
                  : `- ${stack}`}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{utils}</style>
      <style jsx>{`
        @media only screen and (min-width: 768px) {
          .topic-section {
            flex: 0 0 10rem;
          }
        }

        @media only screen and (min-width: 1200px) {
          .topic-section {
            flex: 0 0 15rem;
          }
        }
        .wrap {
          flex-wrap: wrap;
        }
      `}</style>
    </Fragment>
  );
};

export default Topic;
