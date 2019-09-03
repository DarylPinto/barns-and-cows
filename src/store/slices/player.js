import { createSlice } from "redux-starter-kit";

// Initial state (Either from localStorage or from object below)
const savedState = JSON.parse(window.localStorage.getItem("state"));

const initialState = {
	completedLevels: []
};

const playerSlice = createSlice({
	slice: "level",
	initialState: savedState ? savedState.player : initialState,
	reducers: {
		completeLevel(state, action) {
			state.completedLevels.push(action.payload.levelId);
		}
	}
});

export const { actions, reducer } = playerSlice;
export default reducer;
