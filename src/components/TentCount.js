import React from "react";
import classNames from "classnames";
import "./TentCount.scss";

const TentCount = ({ tiles, width }) => {
	let count = tiles.filter(t => t.type === "TENT").length;
	let complete = tiles.every(t => t.choice !== null);
	let invalid = tiles.filter(t => t.choice === "TENT").length !== count;

	const className = classNames("TentCount", {
		complete: complete,
		invalid: complete && invalid
	});

	const style = {
		width: Math.round(width / 2),
		height: Math.round(width / 2),
		fontSize: width / 2 > 40 ? 40 : Math.round(width / 2)
	};

	return (
		<td className={className} style={style}>
			{count}
		</td>
	);
};

export default TentCount;
