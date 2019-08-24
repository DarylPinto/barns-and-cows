import { combineReducers } from "redux";
import { configureStore } from "redux-starter-kit";
import levelReducer from "store/slices/level";

const reducer = combineReducers({	
	level: levelReducer
});

const store = configureStore({ reducer });

// Save state to local storage whenever it changes 
store.subscribe(() => {
	let state = JSON.stringify(store.getState());
	window.localStorage.setItem("state", state);
});

export default store;
