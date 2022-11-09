import jwtFetch from "./jwt";
const RECEIVE_RESTAURANTS = "yelp/RECEIVE_RESTAURANTS";

const receiveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS,
    restaurants
})

export const fetchRestaurants = (item) => async dispatch => {
    const res = await jwtFetch(`/api/yelp/${item}`, {
        method: 'POST'
    });
    if (res.ok) {
        debugger
        const data = await res.json();
        dispatch(receiveRestaurants)
    }
}

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = {...state};
    switch(action.type) {
        case RECEIVE_RESTAURANTS:
            return {...action.restaurants}
        default:
            return state
    }
}

export default restaurantsReducer;