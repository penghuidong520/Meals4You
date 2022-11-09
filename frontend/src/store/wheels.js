import jwtFetch from "./jwt";

const RECEIVE_USER_WHEELS = "wheels/RECEIVE_USER_WHEELS";
const RECEIVE_WHEEL = "wheels/RECEIVE_WHEEL";
const DELETE_WHEEL = "wheels/DELETE_WHEEL";
const RECEIVE_WHEEL_ERRORS = "wheels/RECEIVE_WHEEL_ERRORS";
const CLEAR_WHEEL_ERRORS = "wheels/CLEAR_WHEEL_ERRORS";


const receiveUserWheels = wheels => ({
    type: RECEIVE_USER_WHEELS,
    wheels
});

const receiveWheel = wheel => ({
    type: RECEIVE_WHEEL,
    wheel
});

const removeWheel = wheelId => ({
    type: DELETE_WHEEL,
    wheelId
});

// const receiveErrors = errors => ({
//     type: RECEIVE_WHEEL_ERRORS,
//     errors
// })

export const clearWheelEorrors = errors => ({
    type: CLEAR_WHEEL_ERRORS,
    errors
});

export const getWheels = ({wheels}) => ( wheels ? Object.values(wheels) : []);
export const getWheel = (wheelId) => ({wheels}) => (wheels ? wheels[wheelId] : null);



// export const fetchWheels = () => async dispatch => {
//     const res = await jwtFetch('/api/wheels/');
//     if (res.ok) {
//         const data = await res.json();
//         dispatch(receiveWheels(data));
//     }
// }

export const fetchUserWheels = (userId) => async dispatch => {
    const res = await jwtFetch(`/api/wheels/user/${userId}`);
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveUserWheels(data));
    }
}

export const createWheel = (wheel) => async dispatch => {
    const res = await jwtFetch('/api/wheels/', {
        method: 'POST',
        body: JSON.stringify(wheel)
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveWheel(data));
    }
}

export const updateWheel = (wheel) => async dispatch => {
    const res = await jwtFetch(`/api/wheels/${wheel._id}`, {
        method: "PATCH",
        body: JSON.stringify(wheel)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveWheel(data));
    }
}

export const deleteWheel = (wheelId) => async dispatch => {
    const res = await jwtFetch(`/api/wheels/${wheelId}`, {
        method: "DELETE"
    });
    if (res.ok) {
        dispatch(removeWheel(wheelId));
    }
}


const wheelsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch(action.type) {
        case RECEIVE_WHEEL:
            let notUpdate = Object.values(nextState).every((wheel, index) => {
                if (wheel._id !== action.wheel._id) {
                    return true
                } else {
                    nextState[index] = action.wheel;
                    return false
                }
            });
            if (!notUpdate) {
                return nextState;
            } else {
                nextState[action.wheel._id] = action.wheel;
                return nextState;
            }
        case RECEIVE_USER_WHEELS:
            return {...action.wheels};
        case DELETE_WHEEL:
            delete nextState[action.wheelId];
            const newState = Object.values(nextState);
            return newState.filter(wheel => wheel._id !== action.wheelId);
        default:
            return state;
    }
}

export default wheelsReducer;