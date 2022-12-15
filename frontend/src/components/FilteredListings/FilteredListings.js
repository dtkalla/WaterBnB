import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import ListingIndexItem from '../Listings/ListingIndexItem';
import { fetchListings, getListings } from '../../store/listings';
import '../Listings/listings.css'
import FilteredMapContainer from './FilteredMapContainer';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './Filter.css'



const FilteredListings = () => {
    const dispatch = useDispatch();
    const filter = useParams();
    console.log(filter)
    const listings = useSelector(getListings)
    .filter((listing) => {
        switch(filter.filter) {
            case 'ocean':
                return listing.typeOfWater == 'ocean' ? listing : null
            case 'lake':
                return listing.typeOfWater == 'lake' ? listing : null
            case 'sea':
                return listing.typeOfWater == 'sea' ? listing : null
            case 'pets':
                return listing.petsAllowed ? listing : null
            case 'well_rated':
                return listing.numberOfRatings > 5 && listing.rating > 4.5 ? listing : null
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
            name: listings[i].id,
            title: listings[i].listerName+"'s " + listings[i].buildingType,
            rating: (parseFloat(listings[i].rating).toFixed(1)),
            place: listings[i].city + ', ' + listings[i].country,
            price: listings[i].price,
            pic: listings[i].picturesUrl,
            location: {
                lat: parseFloat(listings[i].latitude),
                lng: parseFloat(listings[i].longitude)
            }
        })}
    }

    

    return (
        <div className='filtered-listings-index'>
            <ul id='filtered-listings-index-ul'>
                <div className='filtered-index-map'>
                    <FilteredMapContainer locations={locations} />
                </div>
                {listingItems}
            </ul>
        </div>
    )
}


export default FilteredListings