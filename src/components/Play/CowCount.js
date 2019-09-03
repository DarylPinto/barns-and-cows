import React, { memo } from "react";
import classNames from "classnames";
import "./CowCount.scss";
import { COW } from "assets/constants";

const CowCount = ({ tiles, width }) => {
	let count = tiles.filter(t => t.type === COW).length;
	let complete = tiles.every(t => t.choice !== null);
	let invalid = tiles.filter(t => t.choice === COW).length !== count;

	const className = classNames("CowCount", {
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

export default memo(CowCount);
