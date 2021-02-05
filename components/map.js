import { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

class Map extends Component {
  state = {
    viewport: {
      width: '100%',
      height: '100%',
      latitude: 13.7279488,
      longitude: 100.4470233,
      zoom: 12,
    },
  };

  render() {
    return (
      <ReactMapGL
        mapStyle='mapbox://styles/tutorism/ckks4acd80u4k17p5mj3x6av0'
        mapboxApiAccessToken='pk.eyJ1IjoidHV0b3Jpc20iLCJhIjoiY2trczRoOTJnMTMwajJuczFubW1rcGtvcCJ9.4QCWNFjNdAgZMFb_aGyuew'
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      >
        <Marker latitude={13.7279488} longitude={100.4470233}>
          <div
            className=' pointer'
            style={{
              width: '1.5rem',
              height: '1.5rem',
              margin: '2rem 0.5rem',
            }}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} color='#ff88cc' />
          </div>
        </Marker>
      </ReactMapGL>
    );
  }
}

export default Map;
