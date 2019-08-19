import React, { useState, useEffect } from "react";
import generate from "./generate";

const size = parseInt(window.location.search.replace("?", ""));

function App() {
	const [grid, setGrid] = useState([]);
	const [debug, setDebug] = useState(false);
	const [time, setTime] = useState(new Date());

	const colorMap = {
		GRASS: "#81ce81",
		TENT: "#f14324",
		TREE: "#1a9225"
	};

	const tileSize = "40px";

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
		setGrid(generate(size));
	}, []);

	return (
		<main>
			<button onClick={() => setDebug(!debug)}>Toggle Debug Mode</button>
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
								<td
									style={{
										padding: "10px",
										backgroundColor: colorMap[tile.choice] || "#CCC",
										height: tileSize,
										width: tileSize,
										userSelect: "none",
										cursor: "pointer"
									}}
									onClick={() => handleTileClick(tile)}
								>
									{debug && (
										<div>
											<pre>x: {tile.x}</pre>
											<pre>y: {tile.y}</pre>
											<pre>type: {tile.type}</pre>
											<pre>choice: {tile.choice || "N/A"}</pre>
										</div>
									)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);
}

export default App;
