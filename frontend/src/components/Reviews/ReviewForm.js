import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createReview } from "../../store/reviews";

function ReviewForm() {
  const { listingId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  let reviewerId
  let reviewerName
  
  if (sessionUser !== null) {
    reviewerId = sessionUser.id
    reviewerName = sessionUser.firstName
  }


  const [body, setBody] = useState("")

  const [errors, setErrors] = useState([]);

  const reviewDate = new Date()
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    history.push(`/listings/${listingId}`)
    return dispatch(createReview({ reviewDate, reviewerId, listingId, body, reviewerName }))
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



  if (sessionUser) {
    return ( 
      <form id='review-form' onSubmit={handleSubmit}>
        <ul>
          <fieldset class="rating">
            <legend>Please rate:</legend>
            <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label>
            <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label>
            <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label>
            <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label>
            <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time">1 star</label>
          </fieldset>

          <textarea className="review-body" type="text" value={body}
            onChange={(e) => {setBody(e.target.value)}} rows='3' />
          <button className="review-button" type="submit">Post Review</button>
        </ul>
        
      </form>
    );
  } else {
    return (
      <div id='review-form' className="rev-login-notice">
        <h3>Please login to review this listing!</h3>
      </div>
    )
  }

  
}

export default ReviewForm;