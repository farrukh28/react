import { createStore } from 'redux';
import { Reducer, intialState } from '../redux/reducer';



export const configureStore = () => {

    const store = createStore(Reducer, intialState);
    return store;
}