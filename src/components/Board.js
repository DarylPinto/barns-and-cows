import React, { useState, useEffect } from "react";
import "components/Board.scss";
import Tile from "components/Tile";
import TentCount from "components/TentCount";
import generateBoard from "game/generateBoard";

const Board = ({ size }) => {
	const [grid, setGrid] = useState([]);
	const flatGrid = grid.flat();

	const [tileWidth, setTileWidth] = useState(0);

	const [debug, setDebug] = useState(false);
	const [time, setTime] = useState(new Date());

	const handleTileClick = tile => {
		if (tile.type === "TREE") return;

		if (tile.choice === null) tile.choice = "GRASS";
		else if (tile.choice === "GRASS") tile.choice = "TENT";
		else tile.choice = null;

		setTime(new Date());

		if (flatGrid.every(t => t.type === t.choice)) {
			window.setTimeout(() => {
				alert("YOU WIN!");
			}, 210);
		}
	};

	useEffect(() => {
		// Initialize board
		const board = generateBoard(size);
		setGrid(board);

		let boardWidth = Math.round(
			Math.min(window.innerHeight, document.body.offsetWidth) * 0.75
		);
		setTileWidth(boardWidth / size);
	}, []);

	const style = {
		marginLeft: (tileWidth / 2) * -1,
		marginTop: (tileWidth / 2) * -1
	};

	return (
		<main className="Board" style={style}>
			{/* <button onClick={() => setDebug(!debug)}>Toggle Debug Mode</button> */}
			<table>
				<tbody>
					<tr>
						<td />
						{grid.map((row, i) => (
							<TentCount
								tiles={flatGrid.filter(t => t.x === i)}
								width={tileWidth}
							/>
						))}
					</tr>
					{grid.map(row => (
						<tr>
							<TentCount tiles={row} width={tileWidth} />
							{row.map(tile => (
								<Tile
									tile={tile}
									debug={debug}
									width={tileWidth}
									onClick={() => handleTileClick(tile)}
								/>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);
};

export default Board;
