import csrfFetch from "./csrf";


export const RECEIVE_RESERVATIONS = 'reservations/receiveReservations'
export const RECEIVE_RESERVATION = 'reservations/receiveReservation'


export const receiveReservations = (reservations) => ({
    type: RECEIVE_RESERVATIONS,
    reservations
})




export const getReservations = (state) => state.reservations ? Object.values(state.reservations) : [];





export const fetchReservations = () => async (dispatch) => {
    const res = await csrfFetch('/api/reservations');
    const data = await res.json();
    console.log(data.reservations)

    dispatch(receiveReservations(data.reservations))
}






const reservationsReducer = (state = {}, action) => {
    const newState = {...state}
    switch(action.type) {
        case RECEIVE_RESERVATIONS:
            console.log(9)
            return {...newState,...action.reservations}
        case RECEIVE_RESERVATION:
            return {[action.reservation.id]: action.reservation}
        default:
            return newState
    }
}


export default reservationsReducer