import jwtFetch from "./jwt";

const RECEIVE_USERS = "users/RECEIVE_USERS";

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const getUsers = ({users}) => (users ? Object.values(users) : []);

export const fetchUsers = () => async dispatch => {
    const res = await jwtFetch('/api/users/');
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveUsers(data));
    }
}

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch(action.type) {
        case RECEIVE_USERS:
            return {...nextState, ...action.users}
        default:
            return state;
    }
}

export default usersReducer;