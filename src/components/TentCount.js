import React from "react";
import classNames from "classnames";
import "./TentCount.scss";

const TentCount = ({ tiles }) => {
	let count = tiles.filter(t => t.type === "TENT").length;
	let complete = tiles.every(t => t.choice !== null);
	let invalid = tiles.filter(t => t.choice === "TENT").length !== count;

	const className = classNames("tent-count", {
		complete: complete,
		invalid: complete && invalid
	});

	return <td className={className}>{count}</td>;
};

export default TentCount;
