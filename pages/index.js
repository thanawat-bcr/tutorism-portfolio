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
        <div className='text-body spacing-sm text-secondary font-light'>
          Freelancer Developer with a passion.
        </div>
        {/* <div
          className='inset-0'
          style={{
            backgroundSize: 'contain',
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            backgroundImage:
              "url('https://cdn.jsdelivr.net/gh/thanawat-bcr/tutorism-portfolio-resources/CSB/home.png')",
          }}
        ></div> */}
      </General>
      <style jsx>{utils}</style>
    </Fragment>
  );
};
export default Home;
