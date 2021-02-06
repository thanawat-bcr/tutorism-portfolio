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
        <div
          style={{ flexGrow: '1' }}
          className={`relative flex items-center `}
        >
          <CSSTransition
            mountOnEnter
            unmountOnExit
            in={toggleMenu}
            timeout={{ enter: 600, exit: 600 }}
            classNames={{ enterActive: 'menu-open', exitActive: 'menu-close' }}
          >
            <div id='menu-set' className='flex justify-center items-center'>
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
        <div className='sidenav-logo flex justify-center items-center text-body font-black'>
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
        {/* <div className='w-sidenav flex justify-center items-center text-body'>
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
        </div> */}
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
          margin: auto 1rem;
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
          transform: translateX(120%);
        }
        .menu-open {
          animation: menu-open 600ms ease-in-out forwards;
        }
        .menu-close {
          animation: menu-close 600ms ease-in-out forwards;
        }
        @keyframes menu-open {
          from {
            transform: translateX(120%);
          }
          to {
            transform: translateX(0%);
          }
        }
        @keyframes menu-close {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(120%);
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Uppernav;
