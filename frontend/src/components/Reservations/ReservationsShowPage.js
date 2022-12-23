import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, getReservations } from '../../store/reservations';
import ReservationIndexItem from './ReservationIndexItem';
import PastReservationIndexItem from './PastReservationIndexItem';


const ReservationsIndex = () => {
    const dispatch = useDispatch();
    const reservations = useSelector(getReservations)
    reservations.sort((a, b) => (a.startDate > b.startDate) ? 1 : -1)

    const today = new Date().toISOString().split('T')[0]
    // console.log(today)

    // reservations.forEach(reservation => console.log(reservation.endDate))

    const upcomingReservations = reservations.filter(reservation => reservation.endDate >= today)

    const pastReservations = reservations.filter(reservation => reservation.endDate < today)

    useEffect(() => {
        dispatch(fetchReservations())
    }, [])

    const upcomingReservationItems = upcomingReservations.map((reservation) => {
        return <ReservationIndexItem key={reservation.id} reservation={reservation} />
    })

    const pastReservationItems = pastReservations.map((reservation) => {
        return <PastReservationIndexItem key={reservation.id} reservation={reservation} />
    })

    return (
        <div className='reservations-index'>
            <h1>Upcoming Trips</h1>
            <ul id='reservations-index-ul'>
                {upcomingReservationItems}
            </ul>
            <h1>Past Trips</h1>
            <ul id='reservations-index-ul'>
                {pastReservationItems}
            </ul>
        </div>
    )
}


export default ReservationsIndex