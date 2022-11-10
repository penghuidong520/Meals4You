import jwtFetch from "./jwt";
const RECEIVE_RESTAURANTS = "yelp/RECEIVE_RESTAURANTS";

const receiveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS,
    restaurants
})

export const getRestaurants = ({ restaurants }) => (restaurants ? Object.values(restaurants) : []);

export const fetchRestaurants = (item) => async dispatch => {
    const res = await jwtFetch(`/api/yelp/${item}`, {
        method: 'POST'
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveRestaurants(data))
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