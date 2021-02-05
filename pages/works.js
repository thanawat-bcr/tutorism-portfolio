import { Fragment, useState } from 'react';
import utils from '../styles/utils';
import General from '../components/layouts/general';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import worksData from '../assets/data/works';
const Works = (props) => {
  const [page, setPage] = useState(0);
  const pageLength = Math.ceil(worksData.length / 16);
  const [works, setWorks] = useState(worksData.slice(page, page + 16));
  const [work, setWork] = useState(works[0]);
  const [fullImage, setFullImage] = useState(null);
  const COLORS = {
    secondary: '#444444',
    contrast: '#ff88cc',
    white: '#fefefe',
  };
  const imgPath = (path, img) => {
    return `https://cdn.jsdelivr.net/gh/thanawat-bcr/tutorism-portfolio-resources/${path}/${img}.png`;
  };
  return (
    <Fragment>
      <General>
        <div className='flex flex-col justify-even h-screen'>
          <div
            className='flex flex-col justify-center'
            style={{ height: '45vh' }}
          >
            <div className='font-bold text-header text-secondary'>
              My <span className='text-contrast'>Works</span>
            </div>
            <div className='flex items-center w-full my-4'>
              <div
                className={`icon-size ${
                  page > 0 ? 'pointer' : ''
                } flex items-center`}
                onClick={() => {
                  if (page < 1) return;
                  const index = (page - 1) * 16;
                  setPage(page - 1);
                  setWorks(worksData.slice(index, index + 16));
                }}
              >
                <FontAwesomeIcon
                  icon={faCaretLeft}
                  color={page > 0 ? COLORS.secondary : COLORS.white}
                />
              </div>
              <div className='grid-8-2 mx-8'>
                {works.map((work, index) => (
                  <div
                    key={index}
                    className='box pointer '
                    onClick={() => {
                      setWork(work);
                    }}
                  >
                    <div
                      className='box'
                      style={{
                        backgroundImage: `url('${imgPath(
                          work.path,
                          work.logo
                        )}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                      onClick={() => {
                        document.getElementById('slider').scrollLeft = 0;
                      }}
                    ></div>
                  </div>
                ))}
                {[...Array(16 - works.length)].map((i, index) => (
                  <div className='box dashed' key={index}></div>
                ))}
              </div>
              <div
                className={`icon-size ${
                  page < pageLength - 1 ? 'pointer' : ''
                } flex items-center`}
                onClick={() => {
                  if (page >= pageLength - 1) return;
                  const index = (page + 1) * 16;
                  setPage(page + 1);
                  setWorks(worksData.slice(index, index + 16));
                }}
              >
                <FontAwesomeIcon
                  icon={faCaretRight}
                  color={
                    page < pageLength - 1 ? COLORS.secondary : COLORS.white
                  }
                />
              </div>
            </div>
          </div>
          <div className='flex' style={{ height: '45vh' }}>
            <div style={{ width: '25rem' }}>
              <div className='text-subheader font-thick text-secondary'>
                {work.title.head}
                <span className='text-contrast'>{work.title.body}</span>
              </div>
              <div
                className='text-md font-light my-4 line-height-sm '
                style={{ textIndent: '3rem', textAlign: 'justify' }}
              >
                {work.desc}
              </div>
              <div className='text-lg font-thick text-contrast'>
                Stack:{' '}
                <span className='text-md font-light text-secondary'>
                  {work.stacks.map((st, i) => (
                    <span key={i}>
                      {st}
                      {i < work.stacks.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </span>
              </div>
            </div>
            <div
              className='slider'
              id='slider'
              style={{ width: 'calc(100% - 25rem)' }}
            >
              <div className='flex-container'>
                {work.slides.map((slide, index) => (
                  <div
                    style={{ width: 'calc((100vw - 25rem) * 0.5)' }}
                    key={index}
                  >
                    <div
                      className='flex-item pointer'
                      onClick={() => {
                        setFullImage(slide.img);
                      }}
                    >
                      <div
                        style={{
                          backgroundImage: `url('${imgPath(
                            work.path,
                            slide.img
                          )}')`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          height: '100%',
                          width: '100%',
                        }}
                      ></div>
                    </div>
                    <div
                      style={{ textAlign: 'center' }}
                      className='font-light text-md text-secondary'
                    >
                      {slide.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {fullImage ? (
              <div
                className='fixed inset-0 bg-modal flex justify-center items-center'
                onClick={() => {
                  setFullImage(null);
                }}
              >
                <div
                  style={{
                    width: '80vw',
                    height: '100vh',
                    backgroundImage: `url('${imgPath(work.path, fullImage)}')`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>
              </div>
            ) : null}
          </div>
        </div>
      </General>
      <style jsx>{utils}</style>
      <style jsx>{`
        .box {
          width: 6.5rem;
          height: 6.5rem;
        }
        .dashed {
          background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='2' stroke-dasharray='5%2c10' stroke-dashoffset='7' stroke-linecap='square'/%3e%3c/svg%3e");
        }
        .grid-8-2 {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .icon-size {
          width: 0.5rem;
          height: 0.5rem;
        }
        .text-subheader {
          font-size: 3rem;
        }

        .slider {
          overflow-x: auto;
          margin-left: 2rem;
        }
        .slider .flex-container {
          list-style: none;
          padding: 0rem;
          display: inline-flex;
          height: 100%;
        }
        .slider .flex-container .flex-item {
          width: 100%;
          height: 90%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .slider .flex-container .flex-item.flex-item:not(:last-of-type) {
          margin-right: 1rem;
        }
        .bg-modal {
          background-color: rgba(10, 10, 10, 0.2);
        }
      `}</style>
    </Fragment>
  );
};

export default Works;
