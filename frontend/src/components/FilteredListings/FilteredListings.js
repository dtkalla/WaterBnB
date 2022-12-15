import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import ListingIndexItem from '../Listings/ListingIndexItem';
import { fetchListings, getListings } from '../../store/listings';
import '../Listings/listings.css'
import MapContainer from '../MapContainer/MapContainer';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';



const FilteredListings = () => {
    const dispatch = useDispatch();
    const filter = useParams();
    console.log(filter)
    const listings = useSelector(getListings)
    .filter((listing) => listing.typeOfWater == filter.filter ? listing : null)
    console.log(listings)

    useEffect(() => {
        dispatch(fetchListings())
    }, [])

    const locations = []

    const listingItems = listings.map((listing) => {
        if (listing) {
            return <ListingIndexItem key={listing.id} listing={listing} />
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
        <div className='listings-index'>
            {/* <div className='solid-line'></div> */}
            <ul id='listings-index-ul'>
                <div className='index-map'>
                    <MapContainer locations={locations} />
                </div>
                {listingItems}
            </ul>
            
        </div>
    )
}


export default FilteredListings