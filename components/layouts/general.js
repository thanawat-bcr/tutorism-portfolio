import { Fragment } from 'react';
import Header from './header';
import Sidenav from '../template/sidenav';
import utils from '../../styles/utils';
const General = (props) => {
  return (
    <Fragment>
      <Header></Header>
      <div className='w-screen h-screen bg-screen fixed inset-0 z-10'>
        <Sidenav></Sidenav>
        <div style={{ marginLeft: '6rem', marginTop: '2rem' }}>
          <main>{props.children}</main>
        </div>
      </div>
      <style jsx>{utils}</style>
    </Fragment>
  );
};

export default General;
