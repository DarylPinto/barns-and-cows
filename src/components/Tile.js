import React, { memo } from "react";
import "./Tile.scss";

const Tile = ({ tile, debug, onClick }) => {
	const tileSize = "10vh";

	const colorMap = {
		GRASS: "#81ce81",
		TENT: "#f14324",
		TREE: "#1a9225"
	};

	const style = {
		padding: "10px",
		backgroundColor: colorMap[tile.choice] || "#222",
		height: tileSize,
		width: tileSize,
		userSelect: "none",
		borderRadius: "6px",
		cursor: "pointer"
	};

	const tileClass = tile.choice
		? `tile ${tile.choice.toLowerCase()}`.trim()
		: "tile";

	return (
		<td className={tileClass} onClick={onClick}>
			{debug && (
				<div>
					<pre>x: {tile.x}</pre>
					<pre>y: {tile.y}</pre>
					<pre>type: {tile.type}</pre>
					<pre>choice: {tile.choice || "NONE"}</pre>
				</div>
			)}
		</td>
	);
};

export default memo(Tile);
