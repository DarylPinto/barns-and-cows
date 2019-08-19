import React, { memo } from "react";

const Tile = ({ tile, debug, onClick }) => {
	const tileSize = debug ? "130px" : "40px";

	const colorMap = {
		GRASS: "#81ce81",
		TENT: "#f14324",
		TREE: "#1a9225"
	};

	const style = {
		padding: "10px",
		backgroundColor: colorMap[tile.choice] || "#CCC",
		height: tileSize,
		width: tileSize,
		userSelect: "none",
		cursor: "pointer"
	};

	return (
		<td style={style} onClick={onClick}>
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
