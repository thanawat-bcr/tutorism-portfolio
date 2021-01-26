import { Fragment } from 'react';
import utils from '../styles/utils';
import General from '../components/layouts/general';
const AboutMe = (props) => {
  return (
    <Fragment>
      <General>
        <div>This is a About me Page!</div>
      </General>
      <style jsx>{utils}</style>
    </Fragment>
  );
};

export default AboutMe;
