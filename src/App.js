import React, { useState, useEffect } from "react";
import "./App.scss";
import Tile from "./components/Tile";
import generateBoard from "./game/generateBoard";

const boardSize = parseInt(window.location.search.replace("?", "")) || 6;

function App() {
	const [grid, setGrid] = useState([]);
	const [debug, setDebug] = useState(false);
	const [time, setTime] = useState(new Date());

	const handleTileClick = tile => {
		if (tile.type === "TREE") return;

		if (tile.choice === null) tile.choice = "GRASS";
		else if (tile.choice === "GRASS") tile.choice = "TENT";
		else tile.choice = null;

		setTime(new Date());

		if (grid.flat().every(t => t.type === t.choice)) {
			window.setTimeout(() => {
				alert("YOU WIN!");
			}, 100);
		}
	};

	useEffect(() => {	
		const board = generateBoard(boardSize);
		setGrid(board);
	}, []);

	return (
		<main style={{fontFamily: "sans-serif"}}>
			{/* <button onClick={() => setDebug(!debug)}>Toggle Debug Mode</button> */}
			<table>
				<tbody>
					<tr>
						<td />
						{grid.map((row, i) => (
							<td style={{ textAlign: "center" }}>
								{grid.flat().filter(t => t.x === i && t.type === "TENT").length}
							</td>
						))}
					</tr>
					{grid.map(row => (
						<tr>
							<td>{row.filter(t => t.type === "TENT").length}</td>
							{row.map(tile => (
								<Tile
									tile={tile}
									debug={debug}
									onClick={() => handleTileClick(tile)}
								/>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);
}

export default App;
