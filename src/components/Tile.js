import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { actions as level } from "store/slices/level";
import "./Tile.scss";

const Tile = ({ tile, debug, width }) => {
	const dispatch = useDispatch();

	const tileClass = tile.choice
		? `tile ${tile.choice.toLowerCase()}`.trim()
		: "tile";

	const style = {
		width: Math.round(width),
		height: Math.round(width),
		borderRadius: Math.round(width / 10)
	};

	return (
		<td
			className={tileClass}
			style={style}
			onClick={() => dispatch(
				level.cycleTile({
					x: tile.x,
					y: tile.y
				})
			)}
		>
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
