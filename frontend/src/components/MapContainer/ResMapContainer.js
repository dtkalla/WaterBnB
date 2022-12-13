import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';
import './MapContainer.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const ResMapContainer = (props) => {
    // const [ selected, setSelected ] = useState({});

    // const onSelect = item => {
    //     setSelected(item);
    // }
    
    const locations = props.locations
    
    const mapStyles = {
        padding: "20px",        
        height: "50vh",
        width: "500%"
    };
      
      const defaultCenter = {
        lat: locations[0].lat, lng: locations[0].lng
      }
    

      
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDnX846EEYsa7iPVXacYUrZsHxX9MDIiN0'>
        <GoogleMap className='index-map'
          mapContainerStyle={mapStyles}
          zoom={11}
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

export default ResMapContainer;