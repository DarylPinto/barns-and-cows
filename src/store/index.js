import { combineReducers } from "redux";
import { configureStore } from "redux-starter-kit";
import levelReducer from "store/slices/level";
import playerReducer from "store/slices/player";

const reducer = combineReducers({
	level: levelReducer,
	player: playerReducer,
	debug: () => false
});

const store = configureStore({ reducer });

// Save state to local storage whenever it changes
store.subscribe(() => {
	let state = JSON.stringify(store.getState());
	window.localStorage.setItem("state", state);
});

export default store;
