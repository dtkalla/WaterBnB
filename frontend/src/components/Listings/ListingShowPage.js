import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListing, getListing } from "../../store/listings";
import parking from './parking.png';
import pets from './pets.png';
import wifi from './wifi.png';
import boat from './boat.png';
import checkin from './checkin.png';
import kitchen from './kitchen.png';
import './listings.css'
import ReservationForm from '../Reservations/ReservationForm';
import ShowMapContainer from '../MapContainer/ShowMapContainer';
import ReviewsIndex from '../Reviews/ReviewsIndex';
// import ReviewForm from '../Reviews/ReviewForm';
import star from '../../assets/star.png'


const ListingShow = () => {
    const { listingId } = useParams();
    const dispatch = useDispatch();
    const l = useSelector(getListing(listingId))
    const [showModal, setShowModal] = useState(false);


    const locations = [{
        lat: l ? parseFloat(l.latitude) : 40.7531,
        lng: l ? parseFloat(l.longitude) : -74.0060,
        location: {
            lat: l ? parseFloat(l.latitude) : 40.7531,
            lng: l ? parseFloat(l.longitude) : -74.0060
        }
    }]

    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, [listingId])

    if (!l) {
        return null
    }

    function ListingPicsModal() {
        if (showModal) {
            return (
                <>
                    <div id="modal3-background" onClick={() => setShowModal(false)} />
                    <div id='ListingPicsModal'>
                        <ul>
                            <img src={`https://waterbnb-seeds.s3.amazonaws.com/${l.id}_0.png`} alt='' />
                            <img src={`https://waterbnb-seeds.s3.amazonaws.com/${l.id}_1.png`} alt='' />
                            <img src={`https://waterbnb-seeds.s3.amazonaws.com/${l.id}_2.png`} alt='' />
                            <img src={`https://waterbnb-seeds.s3.amazonaws.com/${l.id}_3.png`} alt='' />
                            <img src={`https://waterbnb-seeds.s3.amazonaws.com/${l.id}_4.png`} alt='' />
                        </ul>
                    </div>
                </>
                
            );
        }
    }

    return (
        <div>
            <ListingPicsModal id='listing-pics-modal-container'/>
            <div className='show-page-images' onClick={() => setShowModal(true)}>
                <div id='listing-show-idx-div'>
                    <img className="listing-show-image-main" src={`https://waterbnb-seeds.s3.amazonaws.com/${l.id}_0.png`} alt='' />
                </div>
                <div className='show-page-small-images'>
                    <img className="listing-show-image-small" src={`https://waterbnb-seeds.s3.amazonaws.com/${l.id}_1.png`} alt='' />
                    <img className="listing-show-image-small" id='small-2' src={`https://waterbnb-seeds.s3.amazonaws.com/${l.id}_2.png`} alt='' />
                    <img className="listing-show-image-small" src={`https://waterbnb-seeds.s3.amazonaws.com/${l.id}_3.png`} alt='' />
                    <img className="listing-show-image-small" id='small-4' src={`https://waterbnb-seeds.s3.amazonaws.com/${l.id}_4.png`} alt='' />
                </div>
            </div>

            <div className='listing-map'>
                <ReservationForm id='reservation-form' />
            </div>

            <div id='listing-show-page'>
            
            <div id='show-page-title-pic'>
                <h2>{l.listerName}'s {l.buildingType} near the {l.typeOfWater}</h2>
                <img id='profile-pic-1' src={l.profilePic} />
            </div>

            
            <span>{l.beds + 1} guests · {l.bedrooms} {l.bedrooms > 1 ? "bedrooms" : "bedroom"} · {l.beds} {l.beds > 1 ? "beds" : "bed"} · {l.bathrooms} {l.bathrooms > 1 ? "bathrooms" : "bathroom"}</span>
            <span>{l.city}, {l.country}</span>
            <div className='solid-line'></div>
            <span>{l.latitude > 0 ? l.latitude + '° N' : -1*l.latitude + '° S'}
            , {l.longitude > 0 ? l.longitude + '° E' : -1*l.longitude + '° W'}</span>
            <span>${l.price} per night</span>
            <div className='solid-line'></div>
            <span>{l.description}</span>
            <div className='solid-line'></div>
            </div>
            
            {/* <Link to='/'>ListingIndex</Link> */}
            <div id='amenities-container'>
                <h2>What this place offers</h2>
                <ul className='amenities'>
                    {l.petsAllowed ? <li><img src={pets}/>Pets allowed</li> : ''}
                    {l.parking ? <li><img src={parking}/>Parking</li> : ''}
                    {l.kitchen ? <li><img src={kitchen}/>Kitchen</li> : ''}
                    {l.boat ? <li><img src={boat}/>Boat</li> : ''}
                    {l.wifi ? <li><img src={wifi}/>Wifi</li> : ''}
                    {l.selfCheckIn ? <li><img src={checkin}/>Self Check-in</li> : ''}
                </ul>
            </div>
            <ShowMapContainer locations={locations} />
            <h3 id='reviews-title'>
                <span id='stars-2'><img id='star-2' src={star}/>{l.rating % 1 == 0 ? l.rating : Math.round(l.rating * 100) / 100} · {l.numberOfRatings} ratings</span>
            </h3>
            <ReviewsIndex />
            
        </div>
    )
}


export default ListingShow