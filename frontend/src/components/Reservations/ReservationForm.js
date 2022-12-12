import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchListing, getListing } from "../../store/listings";

function ReservationForm() {
  const { listingId } = useParams();
  const dispatch = useDispatch();
  const listing = useSelector(getListing(listingId))
  const sessionUser = useSelector(state => state.session.user);

  const [price, setPrice] = useState("");
  const [numGuests, setNumGuests] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.signup({ startDate, endDate, numGuests, price }))
        // return dispatch(createReservation({ price, numGuests, startDate, endDate, listingId, reserverId }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  const currentDate = new Date()


  return (
    <form id='reservation-form' onSubmit={handleSubmit}>

      <ul>
        <div id='reservation-price'>
          <span><b>${listing.price}</b> night</span>
        </div>
        <div id='start-end-dates'>
          <div>
            <div>Start Date</div>
            <label>
            <input type="date" value={startDate}
            onChange={(e) => setStartDate(e.target.value)} required 
            placeholder={currentDate}
            min={currentDate}/>
            </label>
          </div>
          <div>
            <div>End Date</div>
            <label>
            <input type="date" value={endDate}
            onChange={(e) => setEndDate(e.target.value)} required 
            min={startDate}/>
            </label>
          </div>
        </div>

        <br/>
        <ul className="fees">
          <span>
            ${listing.price} X {(startDate && endDate) ? endDate.slice(8) - startDate.slice(8) : 0} nights
          </span>
          <span>
            {(startDate && endDate) ? '$'+(endDate.slice(8) - startDate.slice(8))*listing.price : '$0'}
          </span>
          <span>{listing.boat ? "Boating fee" : ''}</span>
          <span>{listing.boat ? '$20' : ''}</span>
          <span>Service fee</span>
          <span>{'$' + Math.floor(((startDate && endDate) ? endDate.slice(8) - startDate.slice(8) : 0) * listing.price / 7)}</span>
          <span>Total cost</span>
          <span>
            {'$' + Math.floor(((startDate && endDate) ? endDate.slice(8) - startDate.slice(8) : 0) * listing.price * 8 / 7 + (listing.boat ? 20 : 0))}
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
}

export default ReservationForm;