import { createSlice } from "redux-starter-kit";
import { GRASS, COW, BARN } from "assets/constants";

const initialState = {
	id: 1,
	type: "standard",
	board: [],
	moveHistory: []
};

const levelSlice = createSlice({
	slice: "level",
	initialState: initialState,
	reducers: {
		setBoard(state, action) {
			state.board = action.payload.board;
		},
		cycleTile(state, action) {
			// Select tile tile based on payload
			const { x, y } = action.payload;
			const flatBoard = state.board.flat();
			// Tile types
			const types = [GRASS, COW, null];
			// Cycle tile choice when clicked (unless it's a barn tile)
			let tile = flatBoard.find(t => t.x === x && t.y === y);
			if (tile && tile.type !== BARN) {
				// Cycle to next type
				tile.choice = types[(types.indexOf(tile.choice) + 1) % types.length];
			}
		}
	}
});

export const { actions, reducer } = levelSlice;
export default reducer;
