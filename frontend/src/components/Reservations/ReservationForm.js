import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function ReservationForm() {
  const dispatch = useDispatch();
  // const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  //   const [price, setPrice] = useState("");
//   const [numGuests, setNumGuests] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

  // const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.signup({ email, firstName, lastName, password }))
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

  let hide = "password"

  return (
    <form id='reservation-form' onSubmit={handleSubmit}>

      <ul>
        <div>
          <div>First Name</div>
          <label>
          <input type="text" value={firstName}
          onChange={(e) => setFirstName(e.target.value)} required 
          placeholder="First Name"/>
          </label>
        </div>
        <div>
          <div>Last Name</div>
          <label>
          <input type="text" value={lastName}
          onChange={(e) => setLastName(e.target.value)} required 
          placeholder="Last Name"/>
          </label>
        </div>
        <div>Make sure it matches the name on your government ID.</div>
        <br/>
        <div>
          <div>Email</div>
          <label>
          <input type="text" value={email}
          onChange={(e) => setEmail(e.target.value)} required 
          placeholder="Email Address"/>
          </label>
        </div>
        <div>We'll email you trip confirmations and receipts.</div>
        <br/>
        <div>
          <div>Password</div>
          <label>
          <input type={hide} value={password}
          onChange={(e) => setPassword(e.target.value)} required 
          placeholder="Password"/>
          </label>
        </div>
        <br/>
        <ul className="form-errors">
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <br/>
        
        <button type="submit">Agree and Continue</button>
        <div>By selecting <b>Agree and continue</b>, I agree to WaterBnb's Terms of Service, Payments Terms of Service, and Nondiscrimination Policy and acknowledge the Privacy Policy.</div>
      </ul>
      
      
    </form>
  );
}

export default ReservationForm;