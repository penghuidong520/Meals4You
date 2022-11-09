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

const removeFavorite = wheelId => ({
    type: DELETE_FAVORITE,
    wheelId
});

