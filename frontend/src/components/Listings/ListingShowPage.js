import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListing, getListing } from "../../store/listings";
import parking from './parking.png';
import pets from './pets.png';
import wifi from './wifi.png';
import boat from './boat.png';
import checkin from './checkin.png';
import kitchen from './kitchen.png';


const ListingShow = () => {
    const { listingId } = useParams();
    const dispatch = useDispatch();
    const l = useSelector(getListing(listingId))

    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, [listingId])

    return (
        <div>
            <div id='listing-show-page'>
            <img className="listing-index-image-main" src={l.picturesUrl} />
            <b>{l.listerName}'s {l.buildingType} near the {l.typeOfWater}</b>
            <span>{l.bedrooms} {l.bedrooms > 1 ? "bedrooms" : "bedroom"} · {l.beds} {l.beds > 1 ? "beds" : "bed"} · {l.bathrooms} {l.bathrooms > 1 ? "bathrooms" : "bathroom"}</span>
            <span>{l.city}, {l.country}</span>
            <span>{l.latitude > 0 ? l.latitude + ' N' : -1*l.latitude + ' S'}
            , {l.longitude > 0 ? l.longitude + ' E' : -1*l.longitude + ' W'}</span>
            <span>${l.price} per night</span>
            <span>{l.description}</span>
            </div>
            
            {/* <Link to='/'>ListingIndex</Link> */}
            <h2>What this place offers:</h2>
            <ul className='amenities'>
                {l.petsAllowed ? <li><img src={pets}/>Pets allowed</li> : ''}
                {l.parking ? <li><img src={parking}/>Parking</li> : ''}
                {l.kitchen ? <li><img src={kitchen}/>Kitchen</li> : ''}
                {l.boat ? <li><img src={boat}/>Boat</li> : ''}
                {l.wifi ? <li><img src={wifi}/>Wifi</li> : ''}
                {l.selfCheckIn ? <li><img src={checkin}/>Self Check-in</li> : ''}
            </ul>
        </div>
    )
}


export default ListingShow