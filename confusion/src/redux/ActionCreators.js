// We Create all Action Objects here.

import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


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


// Thunk Function for Comments
export const fetchComments = () => (dispatch) => {

    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errMess) => {
    return ({
        type: ActionTypes.COMMENTS_FAILED,
        payload: errMess
    });
};

export const addComments = (comments) => {
    return ({
        type: ActionTypes.ADD_COMMENTS,
        payload: comments
    });
};

// For Dishes
// Thunk Funtion
export const fetchDishes = () => (dispatch) => {

    dispatch(dishLoading()); // loading screen

    return fetch(baseUrl + 'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
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

export const dishFailed = (errMess) => {
    return ({
        type: ActionTypes.DISHES_FAILED,
        payload: errMess
    });
};

// For Promos
// Thunk Function

export const fetchPromos = () => (dispatch) => {

    dispatch(PromosLoading()); // loading screen

    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)));
};

export const addPromos = (promos) => {
    return ({
        type: ActionTypes.ADD_PROMOS,
        payload: promos
    });
};

export const PromosLoading = () => {
    return ({
        type: ActionTypes.PROMOS_LOADING,
    });
};

export const PromosFailed = (errMess) => {
    return ({
        type: ActionTypes.PROMOS_FAILED,
        payload: errMess
    });
};