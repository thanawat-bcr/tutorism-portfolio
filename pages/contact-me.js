import { Fragment } from 'react';
import utils from '../styles/utils';
import General from '../components/layouts/general';
const ContactMe = (props) => {
  return (
    <Fragment>
      <General>
        <div>This is a Contact Me Page!</div>
      </General>
      <style jsx>{utils}</style>
    </Fragment>
  );
};

export default ContactMe;
