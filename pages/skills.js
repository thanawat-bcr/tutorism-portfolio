import { Fragment, useState } from 'react';
import utils from '../styles/utils';
import General from '../components/layouts/general';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

import { skills } from '../assets/data/skills';

import Header from '../components/template/header';
import useWindowSize from '../components/size';
import Description from '../components/skills/description';

const Skills = (props) => {
  const isMobile = useWindowSize().width < 768;
  const { height } = useWindowSize();
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Fragment>
      <General>
        <div className='h-full flex items-center justify-even'>
          <div
            className={`flex flex-col justify-center ${
              isMobile ? 'w-full' : 'w-45'
            }`}
          >
            <Header head='My' body='Skills'></Header>
            <Description></Description>
            {isMobile ? (
              <div
                style={{
                  position: 'fixed',
                  left: '50%',
                  bottom: '2rem',
                  transform: 'translateX(-50%)',
                  width: '1rem',
                  height: '1rem',
                }}
                onClick={() => setToggleMenu(true)}
              >
                <FontAwesomeIcon icon={faAngleDoubleUp} color={'#444444'} />
              </div>
            ) : null}
          </div>
          {!isMobile ? (
            <div className='flex flex-col' style={{ width: '45%' }}>
              {skills.map((s, i) => (
                <div className='my-4' key={i}>
                  <div className='text-body font-thick text-secondary'>
                    <span className='text-contrast'>{s.title.head}</span>{' '}
                    {s.title.body}
                  </div>
                  <div className='flex'>
                    {s.icons.map((i, index) => (
                      <div className=' flex flex-col items-center' key={index}>
                        <div className='icon-size pointer'>
                          {i.icon ? (
                            <FontAwesomeIcon icon={['fab', i.icon]} />
                          ) : (
                            <Image
                              src={`/icons/${i.path}.png`}
                              alt='me'
                              width='64'
                              height='64'
                            />
                          )}
                        </div>

                        <div className='text-sm font-thin text-secondary'>
                          {i.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`flex flex-col bg-screen  ${
                toggleMenu ? 'skill-slide' : ''
              }`}
              style={{
                position: 'fixed',
                top: `${height}px`,
                width: '100vw',
                height: `calc(${height}px - 4rem)`,
                left: '0',
                padding: '2rem 1rem',
                transition: '300ms ease-in-out',
              }}
            >
              <div
                style={{ position: 'fixed', top: '1rem', right: '2rem' }}
                className={` pointer `}
                onClick={() => setToggleMenu(false)}
              >
                x
              </div>
              {skills.map((s, i) => (
                <div className='my-4' key={i}>
                  <div className='text-body font-thick text-secondary'>
                    <span className='text-contrast'>{s.title.head}</span>{' '}
                    {s.title.body}
                  </div>
                  <div className='flex' style={{ flexWrap: 'wrap' }}>
                    {s.icons.map((i, index) => (
                      <div className=' flex flex-col items-center' key={index}>
                        <div className='icon-mobile pointer'>
                          {i.icon ? (
                            <FontAwesomeIcon icon={['fab', i.icon]} />
                          ) : (
                            <Image
                              src={`/icons/${i.path}.png`}
                              alt='me'
                              width='64'
                              height='64'
                            />
                          )}
                        </div>

                        <div className='text-sm font-thin text-secondary'>
                          {i.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </General>
      <style jsx>{utils}</style>
      <style jsx>{`
        .icon-size {
          width: 2.125rem;
          height: 2.125rem;
          margin: 1rem 1.5rem;
        }
        .icon-mobile {
          width: 2rem;
          height: 2rem;
          margin: 1rem;
        }
        .w-45 {
          width: 45%;
        }
        .skill-slide {
          transform: translateY(-${height - 64}px);
        }
      `}</style>
    </Fragment>
  );
};

export default Skills;
