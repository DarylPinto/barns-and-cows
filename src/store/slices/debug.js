import { createSlice } from "redux-starter-kit";

// Initial state (Either from localStorage or from object below)
const saveData = JSON.parse(window.localStorage.getItem("state"));

const initialState = {
	val: false
};

const debugSlice = createSlice({
	slice: "debug",
	initialState: saveData && saveData.debug ? saveData.debug : initialState,
	reducers: {
		toggle(state) {
			state.val = !state.val;
		}
	}
});

export const { actions, reducer } = debugSlice;
export default reducer;
