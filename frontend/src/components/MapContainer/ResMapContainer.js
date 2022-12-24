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
    

      const styles = [
        {
            "featureType": "all",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#878787"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f9f5ed"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#c9c9c9"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#aee0f4"
                }
            ]
        }
    ]    
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDnX846EEYsa7iPVXacYUrZsHxX9MDIiN0'>
        <GoogleMap className='index-map'
          mapContainerStyle={mapStyles}
          zoom={11}
          center={defaultCenter}
          options={{styles: styles}}
          >
         {
            locations.map(item => {
              return (
              <Marker key={item.id} 
                position={item.location}              />
              )
            })
         }
     </GoogleMap>
     </LoadScript>
  )
}

export default ResMapContainer;