import jwtFetch from "./jwt";

const RECEIVE_USER_FAVORITE = "favoriteWheels/RECEIVE_USER_FAVORITE";
const RECEIVE_USER_FAVORITES = "favoriteWheels/RECEIVE_USER_FAVORITES";
const DELETE_FAVORITE = "favoriteWheels/DELETE_FAVORITE";

const receiveUserFavorites = favorites => ({
    type: RECEIVE_USER_FAVORITES,
    favorites
});

const receiveUserFavorite = favorite => ({
    type: RECEIVE_USER_FAVORITE,
    favorite
});

const removeFavorite = favoriteId => ({
    type: DELETE_FAVORITE,
    favoriteId
});

export const getFavorites = ({favorites}) => {
    return favorites ? Object.values(favorites) : [];
};
export const getFavorite = (favoriteId) => ({favorites}) => (favorites ? favorites[favoriteId] : null);

export const fetchUserFavorites = () => async dispatch => {
    const res = await jwtFetch('/api/favorites/');
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveUserFavorites(data));
    }
}

export const createFavorite = (wheel) => async dispatch => {
    const res = await jwtFetch(`/api/favorites/${wheel._id}`, {
        method: 'POST',
        body: JSON.stringify(wheel)
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveUserFavorite(data));
    }
}

export const updateFavorite = (favorite) => async dispatch => {
    const res = await jwtFetch(`/api/favorites/${favorite._id}`, {
        method: "PATCH",
        body: JSON.stringify(favorite)
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveUserFavorite(data));
    }
}

export const deleteFavorite = (favoriteId) => async dispatch => {
    const res = await jwtFetch(`/api/favorites/${favoriteId}`, {
        method: "DELETE"
    });
    if (res.ok) {
        dispatch(removeFavorite(favoriteId));
    }
}

const favoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch(action.type) {
        case RECEIVE_USER_FAVORITE:
            nextState[action.favorite._id] = action.favorite;
            return nextState;
        case RECEIVE_USER_FAVORITES:
            action.favorites.forEach(favorite => nextState[favorite._id] = favorite)
            return nextState;
        case DELETE_FAVORITE:
            delete nextState[action.favoriteId];
            return nextState;
            // const newState = Object.values(nextState);
            // return newState.filter(favorite => favorite._id !== action.favoriteId);
        default:
            return state;
    }
}

export default favoritesReducer;