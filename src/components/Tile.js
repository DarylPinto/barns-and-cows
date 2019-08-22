import React, { memo } from "react";
import "./Tile.scss";

const Tile = ({ tile, debug, onClick }) => {
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
