import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './Filter.css'
import '../MapContainer/MapContainer.css'
import button4 from './button4.png'

export const FilteredMapContainer = (props) => {
  const filter = useParams();
  const [ selected, setSelected ] = useState({});

  const onSelect = item => {
      setSelected(item);
  }
  
  const locations = props.locations.filter((location) => {
    switch(filter.filter) {
        case 'ocean':
            return location.typeOfWater == 'ocean' ? location : null
        case 'lake':
            return location.typeOfWater == 'lake' ? location : null
        case 'sea':
            return location.typeOfWater == 'sea' ? location : null
        case 'sea':
            return location.typeOfWater == 'falls' ? location : null
        case 'pets':
            return location.petsAllowed ? location : null
        case 'popular':
            return location.numberOfRatings > 5 && location.rating > 4.5 ? location : null
        default:
            if (parseInt(filter.filter)) {
                return (location.price <= parseInt(filter.filter)) ? location : null
            } else {
                return location
            }
          }
        })
  
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
        lat: 10, lng: -60
      }
    

      
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDnX846EEYsa7iPVXacYUrZsHxX9MDIiN0'>
        <GoogleMap className='filtered-index-map'
          mapContainerStyle={mapStyles}
          zoom={1.5}
          center={defaultCenter}
          options={{styles: styles}}>
         {
            locations.map(item => {
              return (
              <Marker key={item.id} 
                position={item.location}
                onClick={() => onSelect(item)}
                icon={button4}
                // onMouseOver={() => onSelect(item)}
                // onMouseOut={() => setSelected({})}
                label={'$'+item.price}
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
                <Link to={`/listings/${selected.id}`} className='map-modal-elements'>
                    <img id='google-map-index-image' src={`https://waterbnb-seeds.s3.amazonaws.com/${selected.id}_0.png`} />
                    <p id='map-stars'><b>{selected.title}</b> <span>&#9733; {selected.rating}</span></p>
                    <p>{selected.place}</p>
                    <p><b>${selected.price}</b> night</p>
                </Link>
            </InfoWindow>
            )
         }
     </GoogleMap>
     </LoadScript>
  )
}

export default FilteredMapContainer;