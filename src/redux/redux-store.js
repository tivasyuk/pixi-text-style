import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import styleReducer from "./style-reducer";
import settingsReducer from "./settings-reducer";

let reducers = combineReducers({
    styleApp: styleReducer,
    settingsApp: settingsReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;