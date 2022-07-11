import {combineReducers} from "redux";

import {todosApp} from "./todos/reducer";

const rootReducer = combineReducers({
    todosApp,
});

export default rootReducer;