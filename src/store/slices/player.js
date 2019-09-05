import { createSlice } from "redux-starter-kit";

// Initial state (Either from localStorage or from object below)
const saveData = JSON.parse(window.localStorage.getItem("state"));

const initialState = {
	completedLevels: [],
	hasCompletedTutorial: true
};

const playerSlice = createSlice({
	slice: "player",
	initialState: saveData && saveData.player ? saveData.player : initialState,
	reducers: {
		completeTutorial(state) {
			state.hasCompletedTutorial = true;
		},
		completeLevel(state, action) {
			state.completedLevels.push(action.payload.levelId);
		}
	}
});

export const { actions, reducer } = playerSlice;
export default reducer;
