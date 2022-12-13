const ReviewsIndex = () => {
    const dispatch = useDispatch();
    // const listings = useSelector(getListings)
    // if(listings[0].id === 1) listings.sort(() => Math.random() - 0.5)

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

    // return (
    //     <div className='listings-index'>
    //         <div className='solid-line'></div>
    //         <ul id='listings-index-ul'>
    //             {reviewItems}
    //         </ul>
            
    //     </div>
    // )
}


export default ReviewsIndex