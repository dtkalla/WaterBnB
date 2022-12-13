import './Reviews.css'

const ReviewIndexItem = (props) => {
    const review = props.review
    console.log(review)

    const month = {
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec',
      };

    if (review.id) {
        return (
            <div className="review-index-item">
                <h2 id='reviewer-name'>{review.reviewerName}</h2>
                <i id='small-review-text'>{month[review.reviewDate.slice(5,7)] + ' ' + review.reviewDate.slice(0,4)}</i>
                <br/>
                <br/>
                <span>{review.body}</span>
            </div>
        )
    }
    else {
        return
    }
    
}


export default ReviewIndexItem