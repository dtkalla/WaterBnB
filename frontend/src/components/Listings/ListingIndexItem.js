import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';


const ListingIndexItem = (props) => {
    const listing = props.listing
    // const dispatch = useDispatch()

    // const handleClick = (e) => {
    //     dispatch(deleteListing(listing.id))
    // }

    return (
        <li>
            <Link to={`/listings/${listing.id}`}>
                {listing.city}, {listing.country} ${listing.price}
            </Link>
            {/* <button onClick={handleClick}>Delete</button> */}
        </li>
    )
}


export default ListingIndexItem