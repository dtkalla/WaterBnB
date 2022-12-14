import './Reviews.css'

const ReviewIndexItem = (props) => {
    const review = props.review

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
                <div id='review-info'>
                    <img id='profile-pic-2' src='https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg' />
                    <div id='review-name-date'>
                        <span id='reviewer-name'>{review.reviewerName}</span>
                        <br/>
                        <i id='small-review-text'>{month[review.reviewDate.slice(5,7)] + ' ' + review.reviewDate.slice(0,4)}</i>
                    </div>
                </div>
                <span>{review.body}</span>
            </div>
        )
    }
    else {
        return
    }
    
}


export default ReviewIndexItem