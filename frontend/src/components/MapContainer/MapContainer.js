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
        // padding: "10px",        
        height: "91vh",
        width: "150%"
    };
    
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
      
      const defaultCenter = {
        lat: 40.6958, lng: -73.9171
      }
    

      
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDnX846EEYsa7iPVXacYUrZsHxX9MDIiN0'>
        <GoogleMap className='index-map'
          mapContainerStyle={mapStyles}
          zoom={11}
          center={defaultCenter}
          options={{styles: styles}}>
         {
            locations.map(item => {
              return (
              <Marker className='marker' key={item.name} 
                position={item.location}
                onClick={() => onSelect(item)}
                // onMouseOver={() => onSelect(item)}
                // onMouseOut={() => setSelected({})}
                // label={'$'+item.price}
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