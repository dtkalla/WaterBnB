import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getListing } from "../../store/listings";
import { createReservation } from "../../store/reservations";
import moment from 'moment';

function ReservationForm() {
  const { listingId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const listing = useSelector(getListing(listingId))
  const sessionUser = useSelector(state => state.session.user);

  let reserverId
  
  if (sessionUser !== null) {
    reserverId = sessionUser.id
  }

  // const [price, setPrice] = useState("")
  // const [numGuests, setNumGuests] = useState("");
  let price = 0
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numGuests, setNumGuests] = useState("")

  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    history.push('/trips')
    price = Math.floor((endDate.slice(8) - startDate.slice(8)) * (listing.price + (numGuests-1)*10) * 8 / 7 + (listing.boat ? 20 : 0));
    // numGuests = 1;
    return dispatch(createReservation({ startDate, endDate, numGuests, price, listingId, reserverId }))
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


  if (sessionUser) {
    return ( 
      <form id='reservation-form' onSubmit={handleSubmit}>
        {/* <input type="hidden" value={listingId} />
  
        <input type="hidden" value={reserverId} /> */}
        <ul>
          <div id='reservation-price'>
            <span><b>${listing.price}</b> night</span>
          </div>
          <br/>
          <div id='start-end-dates'>
            <div id='checkin-div'>
              <div id='other-small-font'>CHECK-IN</div>
              <label>
              <input className="date-input" type="date" value={startDate}
              onChange={(e) => setStartDate(e.target.value)} required 
              // placeholder={currentDate}
              min={moment().format("YYYY-MM-DD")}/>
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
              min={startDate ? startDate : moment().format("YYYY-MM-DD")}/>
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
          <ul className="fees">
            <span className="underline">
              ${listing.price + (numGuests ? (numGuests-1)*10 : 0)} X {(startDate && endDate) ? endDate.slice(8) - startDate.slice(8) : 0} nights
            </span>
            <span>
              {(startDate && endDate) ? '$'+(endDate.slice(8) - startDate.slice(8))*(listing.price + (numGuests ? (numGuests-1)*10 : 0)) : '$0'}
            </span>
            <span className="underline">{listing.boat ? "Boating fee" : ''}</span>
            <span>{listing.boat ? '$20' : ''}</span>
            <span className="underline">Service fee</span>
            <span>{'$' + Math.floor(((startDate && endDate) ? endDate.slice(8) - startDate.slice(8) : 0) * (listing.price + (numGuests ? (numGuests-1)*10 : 0)) / 7)}</span>
            <div className='solid-line-reservations-2'></div>
            <span></span>
          <span>Total cost</span>
            <span>
              {'$' + Math.floor(((startDate && endDate) ? endDate.slice(8) - startDate.slice(8) : 0) * (listing.price + (numGuests ? (numGuests-1)*10 : 0)) * 8 / 7 + (listing.boat ? 20 : 0))}
            </span>
          </ul>
          
          
          <br/>
          <ul className="form-errors">
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>
          <br/>
          
          <button className="reservation-button" type="submit">Reserve</button>
        </ul>
        
        
      </form>
    );
  } else {
    return (
      <div id='reservation-form' className="res-login-notice">
        <h3>Please login to reserve today!</h3>
      </div>
    )
  }

  
}

export default ReservationForm;