import { Fragment, useEffect } from 'react';
import utils from '../../styles/utils';
import useWindowSize from '../size';
const Timeline = (props) => {
  const isMobile = useWindowSize().width < 768;
  const { height } = useWindowSize();

  return (
    <Fragment>
      <div
        className={`h-full scroll-container flex flex-col ${
          isMobile ? '' : 'items-center'
        } `}
        style={{
          flex: isMobile ? '0 0 100%' : '0 0 7rem',
          borderRadius: '20px',
          marginLeft: isMobile ? 'auto' : '1rem',
          marginRight: isMobile ? 'auto' : '4rem',
          paddingTop: '1rem',
          // use this when less works
          overflowY: 'hidden',
          // use this when more works
          // overflowY: 'scroll',
        }}
      >
        {props.works.map((work, index) => (
          <div
            key={index}
            style={{
              width: '5rem',
              height: '5rem',
              border: '5px solid #E5E5E5',
              borderRadius: '50%',
              marginBottom: isMobile ? '2.5rem' : '5rem',
            }}
            className='relative'
            onClick={() => {
              props.setWorkIndex(index);
              props.setModal(true);
            }}
          >
            <div
              style={{
                backgroundImage: `url('${props.imgPath(work.path, 'logo')}')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '50%',
                backgroundColor: 'white',
                border: '5px solid white',
                height: '100%',
                width: '100%',
                position: 'relative',
              }}
              className={`${
                props.workIndex == index ? '' : isMobile ? '' : 'bw-filter'
              } pointer`}
            >
              {isMobile ? (
                <span
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '0',
                    transform: 'translate(150%,-50%)',
                  }}
                  className='flex font-thick text-lg'
                >
                  <div className='text-contrast'>{work.title.head}</div>
                  <div className='text-secondary'>{work.title.body}</div>
                </span>
              ) : null}
            </div>
            <div
              className='absolute'
              style={{
                width: '5px',
                // use this when less works
                height: height + 'px',
                // use this when more works
                // height: '5rem',
                backgroundColor: '#e5e5e5',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            ></div>
          </div>
        ))}
      </div>

      <style jsx>{utils}</style>
      <style jsx>{`
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
        .scroll-container {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .bw-filter {
          -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
          filter: grayscale(100%);
        }
      `}</style>
    </Fragment>
  );
};

export default Timeline;
