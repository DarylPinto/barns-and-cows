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
			state.moveHistory = [];
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
			// Get last history item
			let historyItem = state.moveHistory.pop();
			if(!historyItem) return state;
			// Select tile based on historyItem
			const { x, y } = historyItem;
			const flatBoard = state.board.flat();
			let tile = flatBoard.find(t => t.x === x && t.y === y);
			// console.log(JSON.parse(JSON.stringify(tile)));
			let prevTypeIndex = types.indexOf(tile.choice) - 1;
			if(prevTypeIndex <= -1) prevTypeIndex = types.length - 1;	
			// Cycle tile backwards
			tile.choice = types[prevTypeIndex];
		}
	}
});

export const { actions, reducer } = levelSlice;
export default reducer;
