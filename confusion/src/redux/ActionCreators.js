// We Create all Action Objects here.

import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';



export const addComment = (dishId, rating, author, comment) => {

    return ({
        type: ActionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }
    });
};

// Thunk Funtion
export const fetchDishes = () => (dispatch) => {

    dispatch(dishLoading()); // loading screen

    setTimeout(() => {
        dispatch(addDishes(DISHES)) // load dishes
    }, 2000);
};

export const addDishes = (dishes) => {
    return ({
        type: ActionTypes.ADD_DISHES,
        payload: dishes
    });
};

export const dishLoading = () => {
    return ({
        type: ActionTypes.DISHES_LOADING,
    });
};

export const dishFaliure = (errMess) => {
    return ({
        type: ActionTypes.DISHES_FAILED,
        payload: errMess
    });
};