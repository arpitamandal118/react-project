
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import quoteReducer from './quoteReducer';
const reducers=combineReducers({
    quoteR:quoteReducer,
    authR:authReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>
