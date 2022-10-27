import jwtFetch from "./jwt";

const RECEIVE_RANDOM_WHEELS = "wheels/RECEIVE_RANDOM_WHEELS";

const receiveRandomWheels = wheels => ({
    type: RECEIVE_RANDOM_WHEELS,
    wheels
});

export const fetchRandomWheels = () => async dispatch => {
    const res = await jwtFetch('/api/wheels');
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveRandomWheels(data));
    }
}

const randWheelsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch(action.type) {
        case RECEIVE_RANDOM_WHEELS:
            return action.wheels;
        default:
            return state;
    }
}

export default randWheelsReducer;