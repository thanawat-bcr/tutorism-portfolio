import { Fragment } from 'react';
import General from '../components/layouts/general';
import utils from '../styles/utils';

import useWindowSize from '../components/size';
const Home = () => {
  const isMobile = useWindowSize().width < 768;
  return (
    <Fragment>
      <General>
        <div className='h-full flex flex-col justify-center'>
          <div className={`text-header font-bold text-primary`}>
            <div>Hey,</div>
            <div>
              I'm <span className='text-contrast'>Tutorism.</span>
            </div>
          </div>
          <div className='text-body spacing-sm text-secondary font-light'>
            Freelancer Developer with a passion.
          </div>
        </div>
      </General>
      <style jsx>{utils}</style>
    </Fragment>
  );
};
export default Home;
