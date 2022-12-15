import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';
import './MapContainer.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const MapContainer = (props) => {
    const [ selected, setSelected ] = useState({});

    const onSelect = item => {
        setSelected(item);
    }
    
    const locations = props.locations
    
    const mapStyles = {
        padding: "10px",        
        height: "55vh",
        width: "150%"
    };
      
      const defaultCenter = {
        lat: 40.7531, lng: -74.0060
      }
    

      
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDnX846EEYsa7iPVXacYUrZsHxX9MDIiN0'>
        <GoogleMap className='index-map'
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} 
                position={item.location}
                onClick={() => onSelect(item)}
              />
              )
            })
         }
        {
            selected.location && 
            (
              <InfoWindow className='map-modal'
              position={selected.location}
              clickable={true}
            //   pixelOffset='0'
              onCloseClick={() => setSelected({})}
            >
                <Link to={`/listings/${selected.name}`} className='map-modal-elements'>
                    <img id='google-map-index-image' src={selected.pic} />
                    <p id='map-stars'><b>{selected.title}</b> <span>&#9733; {selected.rating}</span></p>
                    <p>{selected.place}</p>
                    <p><b>${selected.price}</b> night</p>
                    {/* <p>{selected.name}</p> */}
                </Link>
            </InfoWindow>
            )
         }
     </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;