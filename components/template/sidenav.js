import { Fragment, useState } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import utils from '../../styles/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSmile,
  faLaptopCode,
  faCode,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const Sidenav = () => {
  const router = useRouter();
  const routeName = {
    home: '/',
    aboutme: '/about-me',
    skills: '/skills',
    works: '/works',
    contact: '/contact-me',
  };
  const current = (route) => {
    return route === router.pathname;
  };
  const COLORS = {
    secondary: '#444444',
    contrast: '#ff88cc',
  };
  return (
    <Fragment>
      <div className='h-screen w-sidenav bg-navbar fixed top-0 flex flex-col items-center justify-center'>
        <Link href={routeName.home}>
          <div className='sidenav-logo bg-navbar-logo fixed top-0 left-0 flex justify-center items-center text-body font-black pointer'>
            <div>T</div>
          </div>
        </Link>
        <div id='pages-group'>
          <Link href={routeName.home}>
            <div className='icon-size pointer'>
              <FontAwesomeIcon
                icon={faHome}
                color={
                  current(routeName.home) ? COLORS.contrast : COLORS.secondary
                }
              />
            </div>
          </Link>
          <Link href={routeName.aboutme}>
            <div className='icon-size pointer'>
              <FontAwesomeIcon
                icon={faSmile}
                color={
                  current(routeName.aboutme)
                    ? COLORS.contrast
                    : COLORS.secondary
                }
              />
            </div>
          </Link>
          <Link href={routeName.skills}>
            <div className='icon-size pointer'>
              <FontAwesomeIcon
                icon={faCode}
                color={
                  current(routeName.skills) ? COLORS.contrast : COLORS.secondary
                }
              />
            </div>
          </Link>
          <Link href={routeName.works}>
            <div className='icon-size pointer'>
              <FontAwesomeIcon
                icon={faLaptopCode}
                color={
                  current(routeName.works) ? COLORS.contrast : COLORS.secondary
                }
              />
            </div>
          </Link>
          <Link href={routeName.contact}>
            <div className='icon-size pointer'>
              <FontAwesomeIcon
                icon={faEnvelope}
                color={
                  current(routeName.contact)
                    ? COLORS.contrast
                    : COLORS.secondary
                }
              />
            </div>
          </Link>
        </div>
        <div className='w-sidenav fixed bottom-75 left-0 flex flex-col justify-center items-center text-body'>
          <div
            className='social-size pointer'
            color={COLORS.secondary}
            onClick={() => {
              window.open('https://github.com/thanawat-bcr');
            }}
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
          </div>
          <div
            className='social-size pointer'
            color={COLORS.secondary}
            onClick={() => {
              window.open('https://www.facebook.com/tutor34676/');
            }}
          >
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </div>
          <div
            className='social-size pointer'
            color={COLORS.secondary}
            onClick={() => {
              window.open('https://www.instagram.com/_tutorism/');
            }}
          >
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </div>
        </div>
      </div>
      <style jsx>{utils}</style>
      <style jsx>{`
        .w-sidenav {
          width: 4rem;
        }
        .sidenav-logo {
          width: 4rem;
          height: 4rem;
        }
        .icon-size {
          width: 1.35rem;
          height: 1.35rem;
          margin: 2rem 0.5rem;
        }
        .social-size {
          width: 1rem;
          height: 1rem;
          margin: 0.5rem;
        }
        .bottom-75 {
          bottom: 0.75rem;
        }
      `}</style>
    </Fragment>
  );
};

export default Sidenav;
