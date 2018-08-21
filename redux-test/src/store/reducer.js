import dataReducer from './dataReducer'
import {combineReducers} from 'redux'

const reducers = combineReducers({
    dataModule: dataReducer,
});

export default reducers;
