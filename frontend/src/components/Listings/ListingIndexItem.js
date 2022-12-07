import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import './Listings.css'


const ListingIndexItem = (props) => {
    const listing = props.listing
    // const dispatch = useDispatch()

    // const handleClick = (e) => {
    //     dispatch(deleteListing(listing.id))
    // }

    const image_url = listing.picturesUrl

    return (
        <li>
            <Link to={`/listings/${listing.id}`}>
                <img className="listing-index-image" src={image_url} />
                {listing.city}, {listing.country} ${listing.price}
            </Link>
            {/* <button onClick={handleClick}>Delete</button> */}
        </li>
    )
}


export default ListingIndexItem