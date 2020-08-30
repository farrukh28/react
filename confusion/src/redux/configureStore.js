import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form'
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import { InitialFeedback } from './forms';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';



export const configureStore = () => {
    const store = createStore(         // combining reducers
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({ // createforms is a reducer fucntion
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
};