import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions as level } from "store/slices/level";
import "./Tile.scss";

const Tile = ({ tile, width }) => {
	const dispatch = useDispatch();
	const debug = useSelector(state => state.debug);

	const tileClass = tile.choice
		? `tile ${tile.choice.toLowerCase()}`.trim()
		: "tile";

	const style = {
		width: Math.round(width),
		height: Math.round(width),
		borderRadius: Math.round(width / 10)
	};

	const handleClick = () => {
		const { x, y } = tile;
		dispatch(level.cycleTile({ x, y }));
	};

	return (
		<td className={tileClass} style={style} onClick={handleClick}>
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
