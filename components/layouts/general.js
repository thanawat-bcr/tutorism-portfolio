import { Fragment } from 'react';
import Header from './header';
import Sidenav from '../template/sidenav';
import Uppernav from '../template/uppernav';
import utils from '../../styles/utils';
import useWindowSize from '../size';
const General = (props) => {
  const isMobile = useWindowSize().width < 768;
  return (
    <Fragment>
      <Header></Header>
      <div className='w-screen h-screen bg-screen fixed inset-0 z-10'>
        {isMobile ? <Uppernav></Uppernav> : <Sidenav></Sidenav>}
        <div
          className={`main-content w-auto flex flex-col ${
            isMobile ? 'm-mobile' : 'm-desktop'
          }`}
        >
          <main className='h-full'>{props.children}</main>
        </div>
      </div>
      <style jsx>{utils}</style>
      <style jsx>{`
        .main-content {
          margin: 2rem;
        }
        .m-mobile {
          margin-top: 4rem;
          height: calc(100vh - 128px);
        }
        .m-desktop {
          margin-left: 6rem;
          height: calc(100vh - 64px);
        }
      `}</style>
    </Fragment>
  );
};

export default General;
