import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import { useState } from 'react';
import './MapContainer.css'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const ShowMapContainer = (props) => {
    
    const locations = props.locations
    
    const mapStyles = {
        margin: "5% 5% 1% 5%",
        height: "100vh",
        width: "90%"
    };
      
      const defaultCenter = {
        lat: locations[0].lat, lng: locations[0].lng
      }
    

      
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDnX846EEYsa7iPVXacYUrZsHxX9MDIiN0'>
        <GoogleMap className='index-map'
          mapContainerStyle={mapStyles}
          zoom={14}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} 
                position={item.location}
              />
              )
            })
         }
     </GoogleMap>
     </LoadScript>
  )
}

export default ShowMapContainer;