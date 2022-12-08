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
    
    if (listing.id) {
        return (
            <div>
                <Link to={`/listings/${listing.id}`}>
                    <img className="listing-index-image" src={image_url} />
                    {/* {listing.city}, {listing.country} ${listing.price}/night */}
                </Link>
                {/* <button onClick={handleClick}>Delete</button> */}
            </div>
        )
    }
    else {
        return
    }
    
}


export default ListingIndexItem