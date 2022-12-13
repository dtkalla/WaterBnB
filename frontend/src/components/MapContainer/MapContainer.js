import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import './MapContainer.css'

export const MapContainer = (props) => {
    const locations = props.locations
    
    const mapStyles = {
        padding: "10px",        
        height: "60vh",
        width: "120%"};
      
      const defaultCenter = {
        lat: 41.3851, lng: 2.1734
      }
    
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDnX846EEYsa7iPVXacYUrZsHxX9MDIiN0'>
        <GoogleMap className='index-map'
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }
     </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;