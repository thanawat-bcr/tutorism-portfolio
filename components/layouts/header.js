import React, { Fragment } from 'react';
import Head from 'next/head';
const Header = () => {
  return (
    <Fragment>
      <Head>
        <title>Tutorism</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css'
          rel='stylesheet'
        />
      </Head>
    </Fragment>
  );
};
export default Header;
