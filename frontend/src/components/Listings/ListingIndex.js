import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import ListingIndexItem from './ListingIndexItem';
import { fetchListings, getListings } from '../../store/listings';
import './listings.css'
import MapContainer from '../MapContainer/MapContainer';



const ListingIndex = () => {
    const dispatch = useDispatch();
    const listings = useSelector(getListings)
    // if(listings[0].id === 1) listings.sort(() => Math.random() - 0.5)

    useEffect(() => {
        dispatch(fetchListings())
    }, [])

    // const locations = [
    //     {
    //       name: "Location 1",
    //       location: { 
    //         lat: 41.3954,
    //         lng: 2.162 
    //       },
    //     },
    //     {
    //       name: "Location 2",
    //       location: { 
    //         lat: 41.3917,
    //         lng: 2.1649
    //       },
    //     },
    //     {
    //       name: "Location 3",
    //       location: { 
    //         lat: 41.3773,
    //         lng: 2.1585
    //       },
    //     },
    //     {
    //       name: "Location 4",
    //       location: { 
    //         lat: 41.3797,
    //         lng: 2.1682
    //       },
    //     },
    //     {
    //       name: "Location 5",
    //       location: { 
    //         lat: 41.4055,
    //         lng: 2.1915
    //       },
    //     }
    //   ];

    const locations = []

    for (let i = 0; i < listings.length; i++) {
        locations.push({
            name: listings[i].id,
            location: {
                lat: parseFloat(listings[i].latitude),
                lng: parseFloat(listings[i].longitude)
            }
        })
        console.log(locations)
    }

    const listingItems = listings.map((listing) => {
        return <ListingIndexItem key={listing.id} listing={listing} />
    })

    return (
        <div className='listings-index'>
            <div className='solid-line'></div>
            <ul id='listings-index-ul'>
                <div className='index-map'>
                    <MapContainer locations={locations} />
                </div>
                {listingItems}
            </ul>
            
        </div>
    )
}


export default ListingIndex