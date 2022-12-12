import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, getReservations } from '../../store/reservations';
import ReservationIndexItem from './ReservationIndexItem';


const ReservationsIndex = () => {
    const dispatch = useDispatch();
    const reservations = useSelector(getReservations)

    useEffect(() => {
        dispatch(fetchReservations())
    }, [])

    const reservationItems = reservations.map((reservation) => {
        return <ReservationIndexItem key={reservation.id} reservation={reservation} />
    })

    return (
        <div className='reservations-index'>
            <div className='solid-line'></div>
            <ul id='reservations-index-ul'>
                {reservationItems}
            </ul>
        </div>
    )
}


export default ReservationsIndex