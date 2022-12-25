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
            id: listings[i].id,
            title: listings[i].listerName+"'s " + listings[i].buildingType,
            rating: (parseFloat(listings[i].rating).toFixed(1)),
            place: listings[i].city + ', ' + listings[i].country,
            price: listings[i].price,
            pic: listings[i].picturesUrl,
            location: {
                lat: parseFloat(listings[i].latitude),
                lng: parseFloat(listings[i].longitude)
            }
        })
    }

    const listingItems = listings.map((listing) => {
        return <ListingIndexItem key={listing.id} listing={listing} />
    })

    return (
        <div className='listings-index'>
            <ul id='listings-index-ul'>
                {/* <div className='index-map'>
                    <MapContainer locations={locations} />
                </div> */}
                {listingItems}
            </ul>       
        </div>
    )
}


export default ListingIndex