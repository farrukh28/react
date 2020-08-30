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

// Thunk returning a function
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading());


    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
};

export const dishesLoading = () => {
    return ({
        type: ActionTypes.DISHES_LOADING
    });
};

export const dishesFailed = (errmess) => {
    return ({
        type: ActionTypes.DISHES_FAILED,
        payload: errmess,
    });
};

export const addDishes = (dishes) => {
    return ({
        type: ActionTypes.ADD_DISHES,
        payload: dishes
    });
};