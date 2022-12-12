import csrfFetch from "./csrf";


export const RECEIVE_RESERVATIONS = 'reservations/receiveReservations'
export const RECEIVE_RESERVATION = 'reservations/receiveReservation'
export const REMOVE_RESERVATION = 'reservations/removeReservation'


export const receiveReservations = (reservations) => ({
    type: RECEIVE_RESERVATIONS,
    reservations
})


export const removeReservation = (reservationId) => ({
    type: REMOVE_RESERVATION,
    reservationId
})



export const getReservations = (state) => state.reservations ? Object.values(state.reservations) : [];





export const fetchReservations = () => async (dispatch) => {
    const res = await csrfFetch('/api/reservations');
    const data = await res.json();
    console.log(data.reservations)

    dispatch(receiveReservations(data.reservations))
}

export const deleteReservation = (reservationId) => async (dispatch) => {
    const res = await fetch(`/api/reservations/${reservationId}`, {
        method: 'DELETE'
    })

    dispatch(removeReservation(reservationId))
}





const reservationsReducer = (state = {}, action) => {
    const newState = {...state}
    switch(action.type) {
        case RECEIVE_RESERVATIONS:
            return {...newState,...action.reservations}
        case RECEIVE_RESERVATION:
            return {[action.reservation.id]: action.reservation}
        case REMOVE_RESERVATION:
            delete newState[action.reservationId]
            return newState
        default:
            return newState
    }
}


export default reservationsReducer