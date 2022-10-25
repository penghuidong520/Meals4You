import jwtFetch from "./jwt";
// import { RECEIVE_USER_LOGOUT } from './session';

// const RECEIVE_DISHES = "dishes/RECEIVE_DISHES";
const RECEIVE_USER_DISHES = "dishes/RECEIVE_USER_DISHES"
const RECEIVE_DISH = "dishes/RECEIVE_DISH";
const DELETE_DISH = "dishes/DELETE_DISH";
const RECEIVE_DISH_ERRORS = "dishes/RECEIVE_DISH_ERRORS";
const CLEAR_DISH_ERRORS = "dishes/CLEAR_DISH_ERRORS"

// const receiveDishes = dishes => ({
//     type: RECEIVE_DISHES,
//     dishes
// });

const receiveUserDishes = dishes => ({
    type: RECEIVE_USER_DISHES,
    dishes
});

const receiveDish = dish => ({
    type: RECEIVE_DISH,
    dish
});

const removeDish = dishId => ({
    type: DELETE_DISH,
    dishId
});

const receiveErrors = errors => ({
    type: RECEIVE_DISH_ERRORS,
    errors
})

export const clearDishEorrors = errors => ({
    type: CLEAR_DISH_ERRORS,
    errors
});

export const getDishes = ( {dishes} ) => (dishes ? Object.values(dishes) : []);
export const getDish = (dishId) => ({dishes}) => (dishes ? dishes[dishId] : null);
// export const getCart = (cartId) => ({carts}) => (carts ? carts[cartId] : null);
// export const getCarts = ({carts}) => (carts ? Object.values(carts): []);
// export const fetchDishes = () => async dispatch => {
//     try {
//         const res = await jwtFetch('/api/dishes')
//         const data = await res.json();
//         dispatch(receiveDishes(data));
//     } catch (err) {
//         const resBody = await err.json();
//         if (resBody.statusCode === 400) {
//             dispatch(receiveErrors(resBody.errors));
//         }
//     }
// };

export const fetchUserDishes = (userId) => async dispatch => {
    try {
        const res = await jwtFetch(`/api/dishes/user/${userId}`);
        const data = await res.json();
        dispatch(receiveUserDishes(data));
    } catch (err) {
        const resBody = await err.json();
        if (resBody.statusCode === 400) {
            dispatch(receiveErrors(resBody.errors));
        }
    }
};

export const createDish = (dish) => async dispatch => {
    try {
        const res = await jwtFetch('/api/dishes/', {
            method: 'POST',
            body: JSON.stringify(dish)
        });
        const data = await res.json();
        dispatch(receiveDish(data));
    } catch (err) {
        const resBody = await err.json();
        if (resBody.statusCode === 400) {
            dispatch(receiveErrors(resBody.errors));
        }
    }
}

export const deleteDish = (dishId) => async dispatch => {
    try {
        await jwtFetch(`/api/dishes/${dishId}`, {
            method: "DELETE"
        })
        dispatch(removeDish(dishId));
    } catch (err) {
        const resBody = await err.json();
        if (resBody.statusCode === 400) {
            dispatch(receiveErrors(resBody.errors));
        }
    }
}

const dishesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch(action.type) {
        case RECEIVE_DISH:
            nextState[action.dish._id] = action.dish;
            return nextState;
        case RECEIVE_USER_DISHES:
            return action.dishes;
        case DELETE_DISH:
            delete nextState[action.dishId];
            const newState = Object.values(nextState);
            return newState.filter(item => item._id !== action.dishId);
        default:
            return state;
    }
}

const nullErrors = null;

export const dishErrorsReducer = (state = nullErrors, action) => {
    switch(action.type) {
        case RECEIVE_DISH_ERRORS:
            return action.errors;
        case CLEAR_DISH_ERRORS:
            return nullErrors;
        default:
            return state
    }
}

export default dishesReducer;