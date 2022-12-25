import React, { useState } from "react";
import { formatDistanceStrict, formatDistance } from 'date-fns'
// import * as sessionActions from "../../store/session";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import { fetchListing, getListing } from "../../store/listings";
import { getReservation, updateReservation } from "../../store/reservations";
import {format} from 'date-fns'

function ReservationUpdatePage() {
  const { reservationId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const reservation = useSelector(getReservation(reservationId))
  const listing = reservation.listing
  const l = listing
  const sessionUser = useSelector(state => state.session.user);
  const listingId = listing.id
  const reserverId = sessionUser.id
  const id = reservationId
  const currentStartDate = new Date(reservation.startDate)
  const currentEndDate = new Date(reservation.endDate)
  const currentPrice = reservation.price
  const currentNumGuests = reservation.numGuests


  let price = listing.price
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numGuests, setNumGuests] = useState("")

  const [errors, setErrors] = useState([]);

  // function resLength() {
  //   return formatDistanceStrict(new Date(startDate), new Date(endDate))
  // }

  function diffDays() {
    return formatDistanceStrict(new Date(startDate), new Date(endDate), {unit: 'day'})
  }

  function numDays() {
    return diffDays().split(' ')[0]
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    history.push('/trips')
    price = Math.floor(numDays() * (listing.price + (numGuests-1)*10) * 8 / 7 + (listing.boat ? 20 : 0));
    // numGuests = 1;
    return dispatch(updateReservation({ id, startDate, endDate, numGuests, price, listingId, reserverId }))
      .catch(async (res) => {
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
  };

  const currentDate = new Date()


  return (
    <form id='reservation-update-form' onSubmit={handleSubmit}>
      <h1 className="update-info">{l.lister_name}'s {l.building_type} near the {l.type_of_water}</h1>
      <h2 className="update-info">{l.city}, {l.country}</h2>
      <ul>
        <div id='reservation-price'>
          <span><b>${listing.price}</b> night</span>
        </div>
        <div className="current-res-info">
          <p><b>Current reservation:</b></p>
          <p>{format(currentStartDate, 'MMM')} {format(currentStartDate, 'd')} - {currentStartDate[6] === currentEndDate[6] ? '' : format(currentEndDate, 'MMM') + ' '}{format(currentEndDate, 'd')}</p>
          <p>{currentNumGuests} guest{currentNumGuests == 1 ? '' : 's'}</p>
          <p>${currentPrice}</p>
        </div>
        <br/>
        <div id='start-end-dates'>
          <div id='checkin-div'>
            <div id='other-small-font'>CHECK-IN</div>
            <label>
            <input className="date-input" type="date" value={startDate}
            onChange={(e) => setStartDate(e.target.value)} required 
            placeholder={currentDate}
            min={currentDate}/>
            </label>
          </div>
          <div className='vertical-line-reservations-2'></div>
          <div>
            <div id='other-small-font'>CHECKOUT</div>
            <label>
            <input className="date-input" type="date" value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value)
            }} required 
            min={startDate}/>
            </label>
          </div>
        </div>
          <div id='num-guests'>
            <div id='other-small-font'>GUESTS</div>
            <label>
              <input type="number"
              onChange={(e) => setNumGuests(e.target.value)} required
              min="1" max={listing.beds + 1}  placeholder='1' />
            </label>
          </div>

        <br/>
        <ul className="update-fees">
          <span className="underline">
            ${listing.price + (numGuests-1)*10} X {(startDate && endDate) ? numDays() : 0} nights
          </span>
          <span>
            {(startDate && endDate) ? '$'+ numDays() *(listing.price + (numGuests-1)*10) : '$0'}
          </span>
          <span className="underline">{listing.boat ? "Boating fee" : ''}</span>
          <span>{listing.boat ? '$20' : ''}</span>
          <span className="underline">Service fee</span>
          <span>{'$' + Math.floor(((startDate && endDate) ? numDays() : 0) * (listing.price + (numGuests-1)*10) / 7)}</span>
          <div className='solid-line-reservations-update'></div>
          <span></span>
        <span>Total cost</span>
          <span>
            {'$' + Math.floor(((startDate && endDate) ? numDays() : 0) * (listing.price + (numGuests-1)*10) * 8 / 7 + (listing.boat ? 20 : 0))}
          </span>
        </ul>
        
        
        <br/>
        <ul className="form-errors">
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <br/>
        
        <button className="reservation-button" type="submit">Update Reservation</button>
      </ul>
      
      
    </form>
  );
}

export default ReservationUpdatePage;