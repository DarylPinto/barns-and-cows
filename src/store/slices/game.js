import { createSlice } from "redux-starter-kit";
import { STANDARD } from "assets/constants";

// Initial state (Either from localStorage or from object below)
const saveData = JSON.parse(window.localStorage.getItem("state"));

const initialState = {
	currentGameMode: STANDARD
};

const gameSlice = createSlice({
	slice: "game",
	initialState: saveData && saveData.game ? saveData.game : initialState,
	reducers: {
		setMode(state, action) {
			state.currentGameMode = action.payload.gameMode;
		}
	}
});

export const { actions, reducer } = gameSlice;
export default reducer;
