import React from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapboxMap = () => {
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const initialViewState = {
    longitude: -112.28087722374462,
    latitude: 33.668897235094754,
    zoom: 12,
  };

  return (
    <Map
      initialViewState={initialViewState}
      mapboxAccessToken={accessToken}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      style={{ width: '100%', height: '100%' }}
    >
      <Marker 
        longitude={-112.28087722374462} 
        latitude={33.668897235094754} 
        color="red" 
      />
    </Map>
  );
};

export default MapboxMap;
