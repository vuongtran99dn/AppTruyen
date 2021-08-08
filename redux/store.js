import { createStore, combineReducers } from "redux";
import dobannerReducer from './reducers/doBanner'
import doMenuReducer from './reducers/doMenu'


const reducers = combineReducers({
    doBanner : dobannerReducer,
    doMenu: doMenuReducer
});

export default createStore(reducers)
