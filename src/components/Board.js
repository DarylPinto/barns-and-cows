import React, { useState, useEffect } from "react";
import "components/Board.scss";
import Tile from "components/Tile";
import TentCount from "components/TentCount";
import generateBoard from "game/generateBoard";

const debug = false;

const Board = ({ size }) => {
	const [time, setTime] = useState(new Date());
	const [tileWidth, setTileWidth] = useState(0);
	const [grid, setGrid] = useState([]);

	const flatGrid = grid.flat();

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
		// Initialize board data
		const board = generateBoard(size);
		setGrid(board);

		// Resize board
		const resizeBoard = () => {
			let boardWidth = Math.round(
				Math.min(window.innerHeight, document.body.offsetWidth) * 0.75
			);
			setTileWidth(boardWidth / size);
		};
		window.addEventListener("resize", resizeBoard);
		resizeBoard();

		return () => window.removeEventListener("resize", resizeBoard);
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
