import React from "react";
import { Link } from "react-router-dom";
import Board from "components/Board";
import "./Play.scss";

const Play = () => {
	const backBtnStyle = {
		padding: "10px",
		textDecoration: "none",
		color: "#de0e3c",
		opacity: 0.6,
		cursor: "pointer"
	};

	return (
		<div className="Play">
			<Link to="/" style={backBtnStyle}> ← Back</Link>
			<Board size={7} />
		</div>
	);
};

export default Play;
