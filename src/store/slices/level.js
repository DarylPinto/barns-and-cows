import { createSlice } from "redux-starter-kit";
import generateBoard from "game/generateBoard";
import levelData from "game/levelData";
import { GRASS, COW, BARN } from "assets/constants";

// Types of tiles
const types = [GRASS, COW, null];

// Initial state (Either from localStorage or from object below)
const savedState = JSON.parse(window.localStorage.getItem("state"));

const initialState = {
	id: 1,
	type: "standard",
	board: [],
	moveHistory: [],
	completed: false
};

const levelSlice = createSlice({
	slice: "level",
	initialState: savedState ? savedState.level : initialState,
	reducers: {
		loadLevel(state, action) {
			const level = levelData.find(l => l.id === action.payload.id);
			const board = generateBoard(level.size, level.seed);
			state.id = level.id;
			state.board = board;
			state.moveHistory = [];
			state.completed = false;
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
				// Check if board is complete (player has won)
				state.completed = flatBoard.every(t => t.choice === t.type);
			}
		},
		// eslint-disable-next-line no-unused-vars
		undo(state, action) {
			// Get last history item
			let historyItem = state.moveHistory.pop();
			if (!historyItem) return state;
			// Select tile based on historyItem
			const { x, y } = historyItem;
			const flatBoard = state.board.flat();
			let tile = flatBoard.find(t => t.x === x && t.y === y);
			// console.log(JSON.parse(JSON.stringify(tile)));
			let prevTypeIndex = types.indexOf(tile.choice) - 1;
			if (prevTypeIndex <= -1) prevTypeIndex = types.length - 1;
			// Cycle tile backwards
			tile.choice = types[prevTypeIndex];
		},
		// eslint-disable-next-line no-unused-vars
		startOver(state, action) {
			for (let i = 0; i < state.board.length; i++) {
				for (let j = 0; j < state.board.length; j++) {
					let tile = state.board[i][j];
					if (tile.type !== BARN) tile.choice = null;
				}
			}
			state.moveHistory = [];
		}
	}
});

export const { actions, reducer } = levelSlice;
export default reducer;
