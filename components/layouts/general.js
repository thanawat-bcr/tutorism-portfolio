import { Fragment } from 'react';
import Header from './header';
import Sidenav from '../template/sidenav';
import Uppernav from '../template/uppernav';
import utils from '../../styles/utils';
const General = (props) => {
  return (
    <Fragment>
      <Header></Header>
      <div className='w-screen h-screen bg-screen fixed inset-0 z-10'>
        {/* <Sidenav></Sidenav> */}
        <Uppernav></Uppernav>
        <div className='main-content h-full w-auto flex flex-col justify-center'>
          <main>{props.children}</main>
        </div>
      </div>
      <style jsx>{utils}</style>
      <style jsx>{`
        .main-content {
          margin-left: 10rem;
          margin-right: 10rem;
        }
        @media screen and (max-width: 768px) {
          .main-content {
            margin-left: 2rem;
            margin-right: 2rem;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default General;
