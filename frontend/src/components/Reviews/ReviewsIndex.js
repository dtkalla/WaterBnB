import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getReviews } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ReviewIndexItem from "./ReviewIndexItem";

const ReviewsIndex = () => {
    const { listingId } = useParams()
    const dispatch = useDispatch();
    const reviews = useSelector(getReviews)

    useEffect(() => {
        dispatch(getReviews(listingId))
    }, [])

    const reviewItems = reviews.map((review) => {
        return <ReviewIndexItem key={review.id} review={review} />
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