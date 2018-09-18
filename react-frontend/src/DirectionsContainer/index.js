import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import styled from 'styled-components';
import Body from '../Body';


class Map extends Component {
   render() {
   const GoogleLocation = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 30.275024, lng: -97.742764 } }
        defaultZoom = { 14 }
      >
      </GoogleMap>
   ));

   return(
      <div>
        <GoogleLocation className = "location"
          containerElement={ <div style={{ height: '60vh', width: '50vw', margin: '0'}} /> }
          mapElement={ <div style={{ height: `100%`, }} /> }
        />
      </div>
   );
   }
};


export default Map;
