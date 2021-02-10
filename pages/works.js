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
        <div className='flex flex-col justify-even'>
          <Header head='My' body='Works'></Header>
          <div style={{ height: isMobile ? 'auto' : '75vh' }} className='flex'>
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
            ) : modal ? (
              <div
                className='fixed inset-0 bg-screen px-4 flex flex-col justify-center'
                style={{ top: '4rem', paddingBottom: '10rem' }}
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
            ) : null}
          </div>
        </div>
      </General>
      <style jsx>{utils}</style>
      <style jsx>{``}</style>
    </Fragment>
  );
};

export default Works;
