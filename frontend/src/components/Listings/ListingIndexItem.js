import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import './listings.css'


const ListingIndexItem = (props) => {
    const listing = props.listing
    // console.log(listing.picturesUrl)
    // const dispatch = useDispatch()

    // const handleClick = (e) => {
    //     dispatch(deleteListing(listing.id))
    // }

    // const image_url = listing.picturesUrl
    
    if (listing.id) {
        return (
            <div className="listing-index-item">
                <Link className='index-show-list-element' to={`/listings/${listing.id}`}>
                    <img className="listing-index-image" src={listing.picturesUrl} alt="" />
                    <span id='title'>{listing.listerName}'s {listing.buildingType} near the {listing.typeOfWater}</span>
                    <span id='location'>{listing.city}, {listing.country}</span>
                    <span id='price'><span id='price-number'>${listing.price}</span>/night</span>
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