import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import './listings.css'
import star from '../../assets/star.png'


const ListingIndexItem = (props) => {
    const listing = props.listing
    // const dispatch = useDispatch()

    // const handleClick = (e) => {
    //     dispatch(deleteListing(listing.id))
    // }

    // const image_url = listing.picturesUrl
    
    if (listing.id) {
        return (
            <div className="listing-index-item">
                <Link className='index-show-list-element' to={`/listings/${listing.id}`}>
                    {/* <div id='listing-item-idx-div'> */}
                        <img className="listing-index-image" src={`https://waterbnb-seeds.s3.amazonaws.com/${listing.id}_0a.png`} alt="" />
                    {/* </div> */}
                    <div id='location-rating'>
                        <span id='title'>{listing.city}, {listing.country}</span>
                        <span id='stars'><img id='star' src={star}/>{listing.rating % 1 == 0 ? listing.rating : Math.round(listing.rating * 100) / 100}</span>
                    </div>
                    <span id='location'>{listing.listerName}'s {listing.buildingType} near the {listing.typeOfWater}</span>
                    
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