import { Fragment, useState, useEffect } from 'react';
import utils from '../styles/utils';
import General from '../components/layouts/general';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { works } from '../assets/data/works';
const Works = (props) => {
  const COLORS = {
    secondary: '#444444',
    contrast: '#ff88cc',
    white: '#fefefe',
  };
  const imgPath = (path, img) => {
    return `https://cdn.jsdelivr.net/gh/thanawat-bcr/tutorism-portfolio-resources/${path}/${img}.png`;
  };
  const [workIndex, setWorkIndex] = useState(0);
  const work = () => {
    return works[workIndex];
  };
  return (
    <Fragment>
      <General>
        <div className='flex flex-col justify-even'>
          <div className='font-bold text-header text-secondary my-8'>
            My <span className='text-contrast'>Works</span>
          </div>
          <div style={{ height: '75vh' }} className='flex'>
            <div
              className='h-full scroll-container flex flex-col items-center shadow'
              style={{
                flex: '0 0 7rem',
                borderRadius: '20px',
                marginLeft: '1rem',
                marginRight: '4rem',
                paddingTop: '1rem',
                overflowY: 'hidden',
                // overflowY: 'auto',
              }}
            >
              {works.map((work, index) => (
                <div
                  key={index}
                  style={{
                    width: '5rem',
                    height: '5rem',
                    border: '5px solid #E5E5E5',
                    borderRadius: '50%',
                    marginBottom: '5rem',
                  }}
                  className='relative'
                >
                  <div
                    style={{
                      backgroundImage: `url('${imgPath(work.path, 'logo')}')`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      border: '5px solid white',
                      height: '100%',
                      width: '100%',
                    }}
                    className={`${
                      workIndex == index ? '' : 'bw-filter'
                    } pointer`}
                    onClick={() => setWorkIndex(index)}
                  ></div>
                  <div
                    className='absolute'
                    style={{
                      width: '5px',
                      height: '100vh',
                      backgroundColor: '#e5e5e5',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <div className='flex w-full' style={{ alignItems: 'flex-start' }}>
              <div className='topic-section'>
                <div className='flex font-thick text-subheader '>
                  <div className='text-contrast'>{work().title.head}</div>
                  <div className='text-secondary'>{work().title.body}</div>
                </div>
                <div className='flex text-md'>
                  <div
                    className='text-lg font-thick'
                    style={{ marginRight: '0.5rem' }}
                  >
                    Stack:{' '}
                  </div>
                  <div>
                    {work().stacks.map((stack, index) => (
                      <div key={index} className='my-1 font-light'>
                        - {stack}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className='text-md font-light my-4 line-height-sm desc-text mx-4'
                style={{
                  textIndent: '3rem',
                  textAlign: 'justify',
                }}
              >
                {work().desc}
              </div>
            </div>
          </div>
        </div>
      </General>
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
          .topic-section {
            flex: 0 0 10rem;
          }
        }

        @media only screen and (min-width: 1200px) {
          .desc-text {
            width: 35rem;
          }
          .topic-section {
            flex: 0 0 15rem;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Works;
