const ReviewIndexItem = (props) => {
    const review = props.review

    if (review.id) {
        return (
            <div className="review-index-item">
                <span>{review.body}</span>
            </div>
        )
    }
    else {
        return
    }
    
}


export default ReviewIndexItem