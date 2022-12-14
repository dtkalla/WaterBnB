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

    useEffect(() => {
        dispatch(fetchListings())
    }, [])

    const locations = []

    for (let i = 0; i < listings.length; i++) {
        locations.push({
            name: listings[i].id,
            title: listings[i].listerName+"'s "+listings[i].buildingType,
            place: listings[i].city + ', ' + listings[i].country,
            price: listings[i].price,
            pic: listings[i].picturesUrl,
            location: {
                lat: parseFloat(listings[i].latitude),
                lng: parseFloat(listings[i].longitude)
            }
        })
        if(listings[0] && listings[0].id === 1 && listings[1].id === 2) listings.sort(() => Math.random() - 0.5) 
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