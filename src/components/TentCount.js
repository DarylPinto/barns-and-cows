import React from "react";

const TentCount = ({ tiles }) => {
	let count = tiles.filter(t => t.type === "TENT").length;
	return <td style={{ textAlign: "center" }}>{count}</td>;
};

export default TentCount;
