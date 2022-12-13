import csrfFetch from "./csrf";


export const RECEIVE_RESERVATIONS = 'reservations/receiveReservations'
export const RECEIVE_RESERVATION = 'reservations/receiveReservation'
export const REMOVE_RESERVATION = 'reservations/removeReservation'


export const receiveReservations = (reservations) => ({
    type: RECEIVE_RESERVATIONS,
    reservations
})

export const receiveReservation = (reservation) => ({
    type: RECEIVE_RESERVATION,
    reservation
})

export const removeReservation = (reservationId) => ({
    type: REMOVE_RESERVATION,
    reservationId
})



export const getReservations = (state) => state.reservations ? Object.values(state.reservations) : [];

export const getReservation = (reservationId) => (state) => state.reservations ? state.reservations[reservationId] : null




export const fetchReservations = () => async (dispatch) => {
    const res = await csrfFetch('/api/reservations');
    const data = await res.json();

    dispatch(receiveReservations(data.reservations))
}

export const fetchResrvation = (reservationId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reservations/${reservationId}`)
    const data = await res.json();

    dispatch(receiveReservation(data.reservation))
}

export const createReservation = (reservation) => async (dispatch) => {
    const res = await csrfFetch('/api/reservations', {
        method: 'POST',
        body: JSON.stringify(reservation),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json();

    dispatch(receiveReservation(data))
}

export const updateReservation = (reservation) => async (dispatch) => {
    const res = await csrfFetch(`/api/reservations/${reservation.id}`, {
        method: 'PATCH',
        body: JSON.stringify(reservation),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json();
    dispatch(receiveReservation(data))
}

export const deleteReservation = (reservationId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reservations/${reservationId}`, {
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