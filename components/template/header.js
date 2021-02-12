import { Fragment } from 'react';
import utils from '../../styles/utils';
const Header = (props) => {
  return (
    <Fragment>
      <div className='font-bold text-header text-secondary'>
        {props.head} <span className='text-contrast'>{props.body}</span>
      </div>
      <style jsx>{utils}</style>
    </Fragment>
  );
};

export default Header;
