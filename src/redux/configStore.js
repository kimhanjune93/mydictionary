import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import voca from './modules/voca';

const middlewares = [thunk];

const rootReducer = combineReducers({voca});
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;