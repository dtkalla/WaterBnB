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
import { updateReservation } from '../../store/reservations';
import ResMapContainer from '../MapContainer/ResMapContainer';


const ReservationIndexItem = (props) => {
    const reservation = props.reservation
    const listing = reservation.listing
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(deleteReservation(reservation.id))
    }

    const locations = [{
        lat: parseFloat(listing.latitude),
        lng: parseFloat(listing.longitude),
        location: {
            lat: parseFloat(listing.latitude),
            lng: parseFloat(listing.longitude)
        }
    }]

    console.log(locations)

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
                    <h1 id='title'>{listing.city}</h1>
                    <span id='title-details'>{capitalize(listing.building_type)} near the {listing.type_of_water} hosted by {listing.lister_name}</span>
                    <div className='solid-line-reservations'></div>
                    <div id='reservation-more-details'>
                        <span className='dates'>{month[reservation.startDate.slice(5,7)]} {reservation.startDate.slice(8)} - {reservation.startDate[6] === reservation.endDate[6] ? '' : month[reservation.endDate.slice(5,7)] + ' '}{reservation.endDate.slice(8)}</span>
                        {/* <span className='dates'>{reservation.endDate}</span> */}
                        <div className='vertical-line-reservations'></div>
                        <span id='location'>{listing.city}, {listing.country}</span>
                    </div>
                    <div id='reservation-more-details'>
                        <span className='dates'>{reservation.numGuests} guest{reservation.numGuests > 1 ? 's' : ''}</span>

                        <div className='vertical-line-reservations'></div>
                        <span id='location'>${reservation.price}</span>
                    </div>
                    <div className='solid-line-reservations'></div>

                    <Link to={`trips/${reservation.id}#edit`}>
                        <button className='cancel-reservation-button'>Change Reservation</button>
                    </Link>
                    <br/><br/>

                    <button className='cancel-reservation-button' onClick={handleClick}>Cancel Reservation</button>
                    <br/>
                    <span className='small-text'>Free cancelation until {month[reservation.startDate.slice(5,7)]} 1</span>
                    <br/><br/>
                    
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