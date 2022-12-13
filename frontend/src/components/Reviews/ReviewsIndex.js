import { getReviews } from "../../store/reviews";

const ReviewsIndex = () => {
    const dispatch = useDispatch();
    const reviews = useSelector(getReviews)

    // useEffect(() => {
    //     dispatch(fetchListings())
    // }, [])


    // for (let i = 0; i < listings.length; i++) {
    //     locations.push({
    //         name: listings[i].id,
    //         title: listings[i].listerName+"'s "+listings[i].buildingType,
    //         place: listings[i].city + ', ' + listings[i].country,
    //         price: listings[i].price,
    //         pic: listings[i].picturesUrl,
    //         location: {
    //             lat: parseFloat(listings[i].latitude),
    //             lng: parseFloat(listings[i].longitude)
    //         }
    //     })
    // }

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