import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';


export const Comments = (store = COMMENTS, action) => {

    switch (action.type) {
        case (ActionTypes.ADD_COMMENT): {
            var comment = action.payload;
            comment.id = store.length;
            comment.date = new Date().toISOString();
            return store.concat(comment);
        }
        default:
            return store;
    }
};