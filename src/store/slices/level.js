import { createSlice } from "redux-starter-kit";
import generateBoard from "game/generateBoard";
import { GRASS, COW, BARN } from "assets/constants";

// Types of tiles
const types = [GRASS, COW, null];

// Initial state (Either from localStorage or from object below)
const savedState = JSON.parse(window.localStorage.getItem("state"));

const initialState = {
	id: 1,
	type: "standard",
	board: [],
	moveHistory: []
};

const levelSlice = createSlice({
	slice: "level",
	initialState: savedState ? savedState.level : initialState,
	reducers: {
		setNewBoard(state, action) {
			const board = generateBoard(action.payload.size);
			state.board = board;
		},
		cycleTile(state, action) {
			// Select tile tile based on payload
			const { x, y } = action.payload;
			const flatBoard = state.board.flat();
			// Cycle tile choice when clicked (unless it's a barn tile)
			let tile = flatBoard.find(t => t.x === x && t.y === y);
			if (tile && tile.type !== BARN) {
				// Cycle to next type
				tile.choice = types[(types.indexOf(tile.choice) + 1) % types.length];
				// Save move in moveHistory
				state.moveHistory.push({ x, y });
			}
		},
		undo(state, action) {	
			let tile = state.moveHistory.pop();
			const prevType = types.indexOf(tile.choice)
			// to-do: cycle backwards	
		}
	}
});

export const { actions, reducer } = levelSlice;
export default reducer;
