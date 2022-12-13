import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getReviews } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ReviewIndexItem from "./ReviewIndexItem";
import { fetchReviews } from "../../store/reviews";

const ReviewsIndex = () => {
    const { listingId } = useParams()
    const dispatch = useDispatch();
    const reviews = useSelector(getReviews)
    console.log(reviews)

    useEffect(() => {
        dispatch(fetchReviews(listingId))
    }, [])

    const reviewItems = reviews.map((review) => {
        return (listingId == review.listingId && <ReviewIndexItem key={review.id} review={review} />)
    })

    return (
        <div className='reviews-index'>
            {/* <div className='solid-line'></div> */}
            <ul id='reviews-index-ul'>
                {reviewItems}
            </ul>
            
        </div>
    )
}


export default ReviewsIndex