import { Fragment } from 'react';
import Header from './header';

const General = (props) => {
  return (
    <Fragment>
      <Header></Header>
      <div>
        <main>{props.children}</main>
      </div>
    </Fragment>
  );
};

export default General;
