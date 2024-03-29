import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListingIndexItem from '../Listings/ListingIndexItem';
import { fetchListings, getListings } from '../../store/listings';
import '../Listings/listings.css'
import FilteredMapContainer from './FilteredMapContainer';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './Filter.css'
import MapContainer from '../MapContainer/MapContainer';
import '../MapContainer/MapContainer.css'



const FilteredListings = () => {
    const dispatch = useDispatch();
    const filter = useParams();
    const listings = useSelector(getListings)
    .filter((listing) => {
        switch(filter.filter) {
            case 'ocean':
                return listing.typeOfWater == 'ocean' ? listing : null
            case 'lake':
                return listing.typeOfWater == 'lake' || listing.typeOfWater == 'lagoon' ? listing : null
            case 'sea':
                return listing.typeOfWater == 'sea'|| listing.typeOfWater == 'lagoon' ? listing : null
            case 'falls':
                return listing.typeOfWater == 'falls' ? listing : null
            case 'pets':
                return listing.petsAllowed ? listing : null
            case 'popular':
                return listing.numberOfRatings >= 5 && listing.rating >= 4.75 ? listing : null
            default:
                if (parseInt(filter.filter)) {
                    return (listing.price <= parseInt(filter.filter)) ? listing : null
                } else {
                    return listing
                }
        }
    })


    useEffect(() => {
        dispatch(fetchListings())
    }, [])

    const locations = []

    const listingItems = listings.map((listing) => {
        if (listing) {
            return <ListingIndexItem className='filter-index-item' key={listing.id} listing={listing} />
        } else {
            return null
        }
    })

    for (let i = 0; i < listings.length; i++) {
        if (listings[i]) {
        locations.push({
            id: listings[i].id,
            title: listings[i].listerName+"'s " + listings[i].buildingType,
            rating: (parseFloat(listings[i].rating).toFixed(1)),
            place: listings[i].city + ', ' + listings[i].country,
            price: listings[i].price,
            location: {
                lat: parseFloat(listings[i].latitude),
                lng: parseFloat(listings[i].longitude)
            }
        })}
    }

    

    return (
        <div className='listings-index'>
            <ul id='listings-index-ul'>
                {listingItems}
            </ul>
        </div>
    )
}


export default FilteredListings