import { GRASS, COW, BARN } from "assets/constants";

// Helper functions
const randItem = arr => arr[Math.floor(Math.random() * arr.length)];

// Game logic
const getTile = (flatGrid, x, y) => {
	let found = flatGrid.find(t => t.x === x && t.y === y);
	// Dummy tile if no tile is found
	if (!found) found = { x: -500, y: -500, type: GRASS, choice: null };
	return found;
};

const tentIsBorderingTile = (flatGrid, tile) => {
	let borderingTiles = [
		// North bordering tiles
		getTile(flatGrid, tile.x - 1, tile.y - 1),
		getTile(flatGrid, tile.x, tile.y - 1),
		getTile(flatGrid, tile.x + 1, tile.y - 1),

		// Horizontal bordering tiles
		getTile(flatGrid, tile.x - 1, tile.y),
		getTile(flatGrid, tile.x + 1, tile.y),

		// South bordering tiles
		getTile(flatGrid, tile.x - 1, tile.y + 1),
		getTile(flatGrid, tile.x, tile.y + 1),
		getTile(flatGrid, tile.x + 1, tile.y + 1)
	];

	return borderingTiles.map(tile => tile.type).includes(COW);
};

const getFreeAdjacentTiles = (flatGrid, tile) => {
	return [
		getTile(flatGrid, tile.x, tile.y + 1),
		getTile(flatGrid, tile.x + 1, tile.y),
		getTile(flatGrid, tile.x, tile.y - 1),
		getTile(flatGrid, tile.x - 1, tile.y)
	].filter(tile => tile.x > -500 && tile.type === GRASS);
};

const generate = size => {
	let grid = [];

	// Generate initial grid
	for (let i = 0; i < size; i++) {
		let row = [];
		for (let j = 0; j < size; j++) {
			let tile = { x: j, y: i, type: GRASS, choice: null };
			row.push(tile);
		}
		grid.unshift(row);
	}

	// Populate grid with cows
	let flatGrid = grid.flat();

	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			let tile = grid[i][j];
			// Randomly place cows that are not touching each other
			if (Math.random() > 0.55 && !tentIsBorderingTile(flatGrid, tile)) {
				tile.type = COW;
			}
		}
	}

	// Populate grid with barns
	flatGrid = grid.flat();

	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			let tile = grid[i][j];
			// Place barn in random tile adjacent to cow
			if (tile.type === COW) {
				let adjacent = getFreeAdjacentTiles(flatGrid, tile);
				if (adjacent.length > 0) {
					let pickedAdj = randItem(adjacent);
					pickedAdj.type = BARN;
					pickedAdj.choice = BARN;
				} else {
					tile.type = GRASS;
				}
			}
		}
	}

	return grid;
};

export default generate;
