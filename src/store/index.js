import { combineReducers } from "redux";
import { configureStore } from "redux-starter-kit";
import playerReducer from "store/slices/player";
import gameReducer from "store/slices/game";
import levelReducer from "store/slices/level";

const reducer = combineReducers({
	player: playerReducer,
	game: gameReducer,
	level: levelReducer,
	debug: () => false
});

const store = configureStore({ reducer });

// Save state to local storage whenever it changes
store.subscribe(() => {
	let state = JSON.stringify(store.getState());
	window.localStorage.setItem("state", state);
});

export default store;
