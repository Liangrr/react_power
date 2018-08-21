import {createStore, combineReducers} from 'redux'
import dataReducer from './dataReducer'


const reducer = combineReducers({
    dataModule: dataReducer,
});

const store = createStore(reducer);

export default store;

