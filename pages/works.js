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
  const [test, setTest] = useState(-1);
  const [right, setRight] = useState(0);

  const preSelect = () => {
    document.getElementById('s1').checked = true;
  };
  useEffect(() => {
    preSelect();
  }, []);
  return (
    <Fragment>
      <General>
        <div className='flex flex-col justify-even'>
          <div className='font-bold text-header text-secondary my-8'>
            My <span className='text-contrast'>Works</span>
          </div>
          <div style={{ height: '75vh' }} className='flex'>
            <div
              className='h-full scroll-container flex flex-col items-center '
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
                    onClick={() => {
                      setWorkIndex(index);
                      preSelect();
                    }}
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
            <div className='flex flex-col' style={{ flexGrow: '1' }}>
              <div className='flex' style={{ alignItems: 'flex-start' }}>
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

              {/* carousel */}
              <div id='slider'>
                {work().slides.map((slide, index) => (
                  <input
                    key={index}
                    name='slider'
                    id={`s${index + 1}`}
                    type='radio'
                  ></input>
                ))}
                {work().slides.map((slide, index) => (
                  <label
                    key={index}
                    htmlFor={`s${index + 1}`}
                    id={`slide${index + 1}`}
                  >
                    <div
                      style={{
                        backgroundImage: `url('${imgPath(
                          work().path,
                          slide.img
                        )}')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <span
                        id={`d${index + 1}`}
                        style={{
                          position: 'absolute',
                          bottom: '0.5rem',
                          left: '50%',
                          transform: 'translateX(-50%)',
                        }}
                        className='text-secondary font-light'
                      >
                        {slide.desc}
                      </span>
                    </div>
                  </label>
                ))}
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
        input[type='radio'] {
          display: none;
        }
        #d1,
        #d2,
        #d3,
        #d4,
        #d5 {
          display: none;
        }
        #s1:checked ~ #slide1 #d1,
        #s2:checked ~ #slide2 #d2,
        #s3:checked ~ #slide3 #d3,
        #s4:checked ~ #slide4 #d4,
        #s5:checked ~ #slide5 #d5 {
          display: block;
        }
        #slider {
          height: 80%;
          position: relative;
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        #slider label {
          margin: auto;
          width: 60%;
          height: 100%;
          border-radius: 4px;
          position: absolute;
          left: 0;
          right: 0;
          cursor: pointer;
          transition: transform 400ms ease;
        }

        #s1:checked ~ #slide4,
        #s2:checked ~ #slide5,
        #s3:checked ~ #slide1,
        #s4:checked ~ #slide2,
        #s5:checked ~ #slide3 {
          transform: translate3d(-30%, 0, -200px);
        }
        #s1:checked ~ #slide5,
        #s2:checked ~ #slide1,
        #s3:checked ~ #slide2,
        #s4:checked ~ #slide3,
        #s5:checked ~ #slide4 {
          transform: translate3d(-15%, 0, -100px);
        }
        #s1:checked ~ #slide1,
        #s2:checked ~ #slide2,
        #s3:checked ~ #slide3,
        #s4:checked ~ #slide4,
        #s5:checked ~ #slide5 {
          transform: translate3d(0, 0, 0);
        }
        #s1:checked ~ #slide2,
        #s2:checked ~ #slide3,
        #s3:checked ~ #slide4,
        #s4:checked ~ #slide5,
        #s5:checked ~ #slide1 {
          transform: translate3d(15%, 0, -100px);
        }
        #s1:checked ~ #slide3,
        #s2:checked ~ #slide4,
        #s3:checked ~ #slide5,
        #s4:checked ~ #slide1,
        #s5:checked ~ #slide2 {
          transform: translate3d(30%, 0, -200px);
        }
      `}</style>
    </Fragment>
  );
};

export default Works;
