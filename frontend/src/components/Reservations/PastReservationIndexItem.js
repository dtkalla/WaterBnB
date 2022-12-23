import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Reservation.css'
import { deleteReservation } from '../../store/reservations';
import { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { getListing } from '../../store/listings';
import ResMapContainer from '../MapContainer/ResMapContainer';
import { createReview } from "../../store/reviews";
import '../Reviews/Reviews.css'


const ReservationIndexItem = (props) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [rating, setRating] = useState(5);
    const [hover, setHover] = useState(0);

    let reviewerId
    let reviewerName
  
    if (sessionUser !== null) {
        reviewerId = sessionUser.id
        reviewerName = sessionUser.firstName
    }


    const [body, setBody] = useState("")

    const [errors, setErrors] = useState([]);

    const [messages, setMessages] = useState([]);

    const reviewDate = new Date()

    const reservation = props.reservation
    const listingId = reservation.listingId
    const listing = reservation.listing

    const locations = [{
        lat: listing ? parseFloat(listing.latitude) : 40.7531,
        lng: listing ? parseFloat(listing.longitude) : -74.0060,
        location: {
            lat: listing ? parseFloat(listing.latitude) : 40.7531,
            lng: listing ? parseFloat(listing.longitude) : -74.0060
        }
    }]

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        dispatch(createReview({ reviewDate, reviewerId, listingId, body, reviewerName, rating }))
          .catch(async (res) => {
            setMessages([]);
            let data;
            try {
              data = await res.clone().json();
            } catch {
              data = await res.text();
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
          });
          if (errors.length < 1) setMessages(['Rating/review successfully submitted!']);
          setBody('')
          setRating(5)
          setHover(5)
          return
      };


    const capitalize = (str) => {
        return str[0].toUpperCase() + str.slice(1)
    } 

    const month = {
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec',
      };
    

    if (reservation.id) {
        return (
            <div className="reservation-index-item">
                <div className='reservation-info'>
                    <h1 id='title'><Link id='title-link' to={`/listings/${listing.id}`}>{listing.city}</Link></h1>
                    <span id='title-details'>{capitalize(listing.building_type)} near the {listing.type_of_water} hosted by {listing.lister_name}</span>
                    <div className='solid-line-reservations'></div>
                    <div id='reservation-more-details'>
                        <span className='dates'>{month[reservation.startDate.slice(5,7)]} {parseInt(reservation.startDate.slice(8))} - {reservation.startDate[6] === reservation.endDate[6] ? '' : month[reservation.endDate.slice(5,7)] + ' '}{parseInt(reservation.endDate.slice(8))}</span>
                        {/* <span className='dates'>{reservation.endDate}</span> */}
                        <div className='vertical-line-reservations'></div>
                        <span id='location'>{listing.city}, {listing.country}</span>
                    </div>
                    <div id='reservation-more-details'>
                        {/* <span className='dates'>{reservation.numGuests} guest{reservation.numGuests > 1 ? 's' : ''}</span> */}

                        {/* <div className='vertical-line-reservations'></div> */}
                    </div>
                    <div className='solid-line-reservations'></div>

                    <h3>Rate and Review!</h3>
                    <form id='review-form-2' onSubmit={handleSubmit}>
                        <ul>
        
                            <div className="star-rating">
                                {[...Array(5)].map((star, index) => {
                                    index += 1;
                                return (
                                <button id='star-button' type="button" key={index}
                                className={index <= (hover || rating) ? "on" : "off"}
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                            >
                                <span className="star">&#9733;</span>
                            </button>
                            );
                        })}

                        </div>
  

                        <textarea className="review-body-2" type="text" value={body}
                        onChange={(e) => {setBody(e.target.value)}} rows='3' />
                        <button className="review-button" type="submit">Post Review</button>
                    </ul>
        
                </form>
                    {errors && <div className='errors'>{errors[0]}</div>}
                    {messages && <div className='success'>{messages[0]}</div>}
                </div>
                <img className="reservation-index-image" src={listing.pictures_url} alt="" />
                <div className='res-index-map'>
                    <ResMapContainer locations={locations} />
                </div>
            </div>
        )
    }
    else {
        return
    }
    
}


export default ReservationIndexItem