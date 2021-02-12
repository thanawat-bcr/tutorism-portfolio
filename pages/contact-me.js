import { Fragment, useState } from 'react';
import dynamic from 'next/dynamic';

import CSSTransition from 'react-transition-group/CSSTransition';

import utils from '../styles/utils';
import useWindowSize from '../components/size';

import General from '../components/layouts/general';
import Header from '../components/template/header';

import Text from '../components/contact/text';
import Email from '../components/contact/email';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/contact/map'),
  {
    ssr: false,
  }
);

const ContactMe = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const isMobile = useWindowSize().width < 768;
  const { width } = useWindowSize();
  return (
    <Fragment>
      <General>
        <div
          className={`h-full flex flex-col justify-center ${
            isMobile ? 'mx-auto' : ''
          } desc-text `}
        >
          <Header head='Contact' body='Me'></Header>
          <Text></Text>
        </div>
        <div
          className={`fixed ${
            isMobile
              ? toggleMenu
                ? 'map-pos-mobile map-slide'
                : 'map-pos-mobile'
              : 'map-pos-wide'
          }`}
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          <DynamicComponentWithNoSSR />
        </div>
      </General>
      <style jsx>{utils}</style>
      <style jsx>{`
        .map-pos-wide {
          top: 0;
          right: 0;
          bottom: 0;
          left: ${width < 1000 ? '60%' : '45%'};
          // left: 30%;
        }
        .map-pos-mobile {
          top: 90%;
          bottom: -90%;
          left: 1rem;
          right: 1rem;
          z-index: 100;
          transition: 300ms;
        }
        .map-slide {
          transform: translateY(-80%);
        }
        .items-start {
          align-items: flex-start;
        }
        .desc-text {
          width: 19rem;
        }
        @media only screen and (min-width: 768px) {
          .desc-text {
            width: 23rem;
          }
        }
        @media only screen and (min-width: 1200px) {
          .desc-text {
            width: 25rem;
          }
        }
        @media only screen and (min-width: 1500px) {
          .desc-text {
            width: 35rem;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default ContactMe;
