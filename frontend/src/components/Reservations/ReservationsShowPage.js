import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, getReservations } from '../../store/reservations';
import ReservationIndexItem from './ReservationIndexItem';


const ReservationsIndex = () => {
    const dispatch = useDispatch();
    const reservations = useSelector(getReservations)
    reservations.sort((a, b) => (a.startDate > b.startDate) ? 1 : -1)

    useEffect(() => {
        dispatch(fetchReservations())
    }, [])

    const reservationItems = reservations.map((reservation) => {
        return <ReservationIndexItem key={reservation.id} reservation={reservation} />
    })

    return (
        <div className='reservations-index'>
            <div className='solid-line'></div>
            <h1>Upcoming Trips</h1>
            <ul id='reservations-index-ul'>
                {reservationItems}
            </ul>
        </div>
    )
}


export default ReservationsIndex