import { Fragment, useState, useEffect } from 'react';
import utils from '../styles/utils';
import { works } from '../assets/data/works';
import useWindowSize from '../components/size';

import General from '../components/layouts/general';
import Header from '../components/template/header';

import Slider from '../components/works/slider';
import Timeline from '../components/works/timeline';
import Description from '../components/works/description';
import Topic from '../components/works/topic';

const Works = (props) => {
  const isMobile = useWindowSize().width < 768;
  const { height } = useWindowSize();
  const imgPath = (path, img) => {
    return `https://cdn.jsdelivr.net/gh/thanawat-bcr/tutorism-portfolio-resources/${path}/${img}.png`;
  };
  const [workIndex, setWorkIndex] = useState(0);
  const work = () => {
    return works[workIndex];
  };

  const [modal, setModal] = useState(false);
  return (
    <Fragment>
      <General>
        <div className='h-full flex flex-col' style={{ marginTop: '4rem' }}>
          <Header head='My' body='Works'></Header>
          <div style={{ flexGrow: '1' }} className='flex my-2'>
            <Timeline
              works={works}
              workIndex={workIndex}
              setWorkIndex={setWorkIndex}
              imgPath={imgPath}
              setModal={setModal}
            ></Timeline>
            {!isMobile ? (
              <>
                <Topic work={work()}></Topic>
                <div className={`w-full`}>
                  <Slider work={work()} imgPath={imgPath}></Slider>
                  <Description work={work()}></Description>
                </div>
              </>
            ) : (
              <div
                className={`flex flex-col mx-auto bg-screen  ${
                  modal ? 'work-slide' : ''
                }`}
                style={{
                  position: 'fixed',
                  top: `${height}px`,
                  width: '100vw',
                  height: `calc(${height}px - 4rem)`,
                  left: '0',
                  padding: '1.5rem 1rem',
                  transition: '300ms ease-in-out',
                }}
              >
                <div
                  className='absolute top-0 right-0 my-8 mx-8 font-light text-lg pointer'
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  x
                </div>
                <div style={{ paddingLeft: '1rem' }}>
                  <Topic work={work()}></Topic>
                </div>
                <div className={`w-full`} style={{ height: '50%' }}>
                  <Slider work={work()} imgPath={imgPath}></Slider>
                  <Description work={work()}></Description>
                </div>
              </div>
            )}
          </div>
        </div>
      </General>
      <style jsx>{utils}</style>
      <style jsx>{`
        .work-slide {
          transform: translateY(-${height - 64}px);
        }
      `}</style>
    </Fragment>
  );
};

export default Works;
