import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListing, getListing } from "../../store/listings";

const ListingShow = () => {
    const { listingId } = useParams();
    const dispatch = useDispatch();
    const listing = useSelector(getListing(listingId))

    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, [listingId])

    return (
        <>
            <img className="listing-index-image" src={listing.picturesUrl} />
            <h1>{listing.description}</h1>
            <h2>{listing.city}</h2>
            <h2>{listing.country}</h2>
            <h2>{listing.latitude > 0 ? listing.latitude + ' N' : listing.latitude + ' S'}</h2>
            <h2>{listing.longitude > 0 ? listing.longitude + ' E' : listing.longitude + ' W'}</h2>
            <h2>${listing.price}</h2>
            <Link to='/'>ListingIndex</Link>
        </>
    )
}


export default ListingShow