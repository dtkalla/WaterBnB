import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createReview } from "../../store/reviews";
// import StarRating from "./StarRating";

function ReviewForm() {
  const { listingId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);

  let reviewerId
  let reviewerName
  let profilePic
  
  if (sessionUser !== null) {
    reviewerId = sessionUser.id
    reviewerName = sessionUser.firstName
    profilePic = sessionUser.profilePic
  }


  const [body, setBody] = useState("")

  const [errors, setErrors] = useState([]);

  const reviewDate = new Date()
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    history.push(`/listings/${listingId}`)
    return dispatch(createReview({ reviewDate, reviewerId, listingId, body, reviewerName, rating, profilePic }))
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