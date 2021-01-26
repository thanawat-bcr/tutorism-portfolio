import { Fragment } from 'react';
import General from '../components/layouts/general';
import utils from '../styles/utils';

const Home = () => {
  return (
    <Fragment>
      <General>
        <div className='text-header font-bold text-primary'>
          <div>Hey,</div>
          <div>
            I'm <span className='text-contrast'>Tutorism.</span>
          </div>
        </div>
        <div className='text-xl spacing-sm text-secondary font-light'>
          Freelancer Developer with a passion.
        </div>
      </General>
      <style jsx>{utils}</style>
    </Fragment>
  );
};
export default Home;
