import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import errors from './errors';
import dishes from './dishes';
import wheels from './wheels';
import wheel from './contents';
import users from './users';
import randWheels from './randWheels';
import restaurants from './yelp';
import favorites from './favoriteWheel';

const rootReducer = combineReducers({
    favorites,
    randWheels,
    users,
    wheel,
    session,
    dishes,
    wheels,
    errors,
    restaurants
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;