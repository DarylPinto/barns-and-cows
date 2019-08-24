import { combineReducers } from "redux";
import { configureStore } from "redux-starter-kit";
import levelReducer from "store/slices/level";

const reducer = combineReducers({	
	level: levelReducer
});

const store = configureStore({ reducer });
export default store;
