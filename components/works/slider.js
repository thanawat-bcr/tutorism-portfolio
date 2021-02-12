import { Fragment, useEffect } from 'react';
import utils from '../../styles/utils';
const Slider = (props) => {
  const preSelect = () => {
    document.getElementById('s1').checked = true;
  };
  useEffect(() => {
    preSelect();
  }, []);

  return (
    <Fragment>
      <div id='slider' style={{ marginBottom: '3rem' }}>
        {props.work.slides.map((slide, index) => (
          <input
            key={index}
            name='slider'
            id={`s${index + 1}`}
            type='radio'
          ></input>
        ))}
        {props.work.slides.map((slide, index) => (
          <label key={index} htmlFor={`s${index + 1}`} id={`slide${index + 1}`}>
            <div
              style={{
                backgroundImage: `url('${props.imgPath(
                  props.work.path,
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
                  bottom: '-1rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  textAlign: 'center',
                }}
                className='text-secondary font-light w-full'
              >
                {slide.desc}
              </span>
            </div>
          </label>
        ))}
      </div>

      <style jsx>{utils}</style>
      <style jsx>{`
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
          height: 70%;
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

export default Slider;
