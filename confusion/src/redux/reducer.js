import { COMMENTS } from '../shared/comments';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared//leaders';
import { PROMOTIONS } from '../shared/promotions';



export const intialState = {
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
};



export const Reducer = (state = intialState, action) => {
    return state;
};