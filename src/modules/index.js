import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import cart from "./cart";
import user from "./user";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({
    cart,
    user,
});

const store = createStore(rootReducer, enhancer);
export default store;
