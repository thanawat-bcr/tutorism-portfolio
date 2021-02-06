import { Fragment, useState } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import CSSTransition from 'react-transition-group/CSSTransition';

import utils from '../../styles/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSmile,
  faLaptopCode,
  faCode,
  faEnvelope,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

const Uppernav = () => {
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
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Fragment>
      <div className='w-screen h-sidenav bg-navbar flex justify-between'>
        <Link href={routeName.home}>
          <div className='sidenav-logo bg-navbar-logo flex justify-center items-center text-body font-black pointer'>
            <div>T</div>
          </div>
        </Link>
        <div className={` flex items-center `}>
          <CSSTransition
            mountOnEnter
            unmountOnExit
            in={toggleMenu}
            timeout={{ enter: 600, exit: 600 }}
            classNames={{ enterActive: 'menu-open', exitActive: 'menu-close' }}
          >
            <div
              id='menu-set'
              className='flex justify-center items-center fixed'
              style={{ top: '1.5rem', right: '4rem' }}
            >
              <Link href={routeName.home}>
                <div className='icon-size pointer'>
                  <FontAwesomeIcon
                    icon={faHome}
                    color={
                      current(routeName.home)
                        ? COLORS.contrast
                        : COLORS.secondary
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
                      current(routeName.skills)
                        ? COLORS.contrast
                        : COLORS.secondary
                    }
                  />
                </div>
              </Link>
              <Link href={routeName.works}>
                <div className='icon-size pointer'>
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    color={
                      current(routeName.works)
                        ? COLORS.contrast
                        : COLORS.secondary
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
          </CSSTransition>
        </div>
        <div className='sidenav-logo flex justify-center items-center text-body font-black bg-screen z-1'>
          <div
            className='menu-size pointer'
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <FontAwesomeIcon
              icon={toggleMenu ? faTimes : faBars}
              color={toggleMenu ? COLORS.contrast : COLORS.secondary}
            />
          </div>
        </div>
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={toggleMenu}
          timeout={{ enter: 600, exit: 600 }}
          classNames={{
            enterActive: 'social-open',
            exitActive: 'social-close',
          }}
        >
          <div
            className='w-sidenav flex flex-col bg-screen justify-center items-center text-body fixed'
            style={{ top: '4rem', right: '1rem', zIndex: '-1' }}
          >
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
        </CSSTransition>
      </div>

      <style jsx>{utils}</style>
      <style jsx>{`
        .h-sidenav {
          height: 4rem;
        }
        .sidenav-logo {
          width: 4rem;
          height: 4rem;
        }
        .icon-size {
          width: 1.25rem;
          height: 1.25rem;
          margin: auto 0.8rem;
        }
        .social-size {
          width: 1rem;
          height: 1rem;
          margin: 0.5rem;
        }
        .menu-size {
          width: 2rem;
          height: 2rem;
          padding: 0.5rem;
        }
        #menu-set {
          // transform: translateX(120%);
        }
        .menu-open {
          animation: menu-open 600ms ease-in-out forwards;
        }
        .menu-close {
          animation: menu-close 600ms ease-in-out forwards;
        }
        @keyframes menu-open {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }
        @keyframes menu-close {
          0% {
            transform: translateX(0%);
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        .social-open {
          animation: social-open 600ms ease-in-out forwards;
        }
        .social-close {
          animation: social-close 600ms ease-in-out forwards;
        }
        @keyframes social-open {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(0%);
            opacity: 1;
          }
        }
        @keyframes social-close {
          0% {
            transform: translateY(0%);
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Uppernav;
