import React, { memo } from "react";
import "./Tile.scss";

const Tile = ({ tile, debug, width, onClick }) => {
	const tileClass = tile.choice
		? `tile ${tile.choice.toLowerCase()}`.trim()
		: "tile";

	const style = {
		width: Math.round(width),
		height: Math.round(width),
		borderRadius: Math.round(width / 10)
	};

	return (
		<td className={tileClass} style={style} onClick={onClick}>
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
