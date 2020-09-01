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


// Thunk Function
//------------------------------------ for Comments
export const fetchComments = () => (dispatch) => {

    return fetch(baseUrl + 'comments')
        .then(response => {
            // This part is when we hear from server and has a response
            if (response.ok) { // if response is resolved. if response is 200 ok
                return response;
            }
            else { // if there is an error
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            // This error part is when we dont hear anything from server.
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
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

// ------------------------------------For Dishes
// Thunk Funtion
export const fetchDishes = () => (dispatch) => {

    dispatch(dishLoading()); // loading screen

    return fetch(baseUrl + 'dishes')
        .then(response => {
            // This part is when we hear from server and has a response
            if (response.ok) { // if response is resolved. if response is 200 ok
                return response;
            }
            else { // if there is an error
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            // This error part is when we dont hear anything from server.
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishFailed(error.message)));
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

// ------------------------------------For Promos
// Thunk Function

export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading()); // loading screen

    return fetch(baseUrl + 'promotions')
        .then(response => {
            // This part is when we hear from server and has a response
            if (response.ok) { // if response is resolved. if response is 200 ok
                return response;
            }
            else { // if there is an error
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            // This error part is when we dont hear anything from server.
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
};

export const addPromos = (promos) => {
    return ({
        type: ActionTypes.ADD_PROMOS,
        payload: promos
    });
};

export const promosLoading = () => {
    return ({
        type: ActionTypes.PROMOS_LOADING,
    });
};

export const promosFailed = (errMess) => {
    return ({
        type: ActionTypes.PROMOS_FAILED,
        payload: errMess
    });
};