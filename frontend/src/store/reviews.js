import csrfFetch from "./csrf";


export const RECEIVE_REVIEWS = 'reviews/receiveReviews'
export const RECEIVE_REVIEW = 'reviews/receiveReview'


export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
})


export const getReviews = (state) => state.reviews ? Object.values(state.reviews) : [];

export const getReview = (reviewId) => (state) => state.reviews ? state.reviews[reviewId] : null



export const fetchReviews = () => async (dispatch) => {
    const res = await csrfFetch('/api/reviews');
    const data = await res.json();

    dispatch(receiveReviews(data.reviews))
}

export const fetchReview = (reviewId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${reviewId}`)
    const data = await res.json();

    dispatch(receiveReview(data.review))
}




const reviewsReducer = (state = {}, action) => {
    const newState = {...state}
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return {...newState,...action.reviews}
        case RECEIVE_REVIEW:
            return {[action.review.id]: action.review}
        default:
            return newState
    }
}


export default reviewsReducer