import { Fragment } from 'react';
import Header from './header';
import utils from '../../styles/utils';
const General = (props) => {
  return (
    <Fragment>
      <Header></Header>
      <div className='w-screen h-screen bg-screen fixed inset-0 '>
        <main>{props.children}</main>
      </div>
      <style jsx>{utils}</style>
    </Fragment>
  );
};

export default General;
