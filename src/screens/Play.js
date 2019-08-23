import React from "react";
import { Link } from "react-router-dom";
import Board from "components/Board";
import "./Play.scss";

const Play = () => {
	return (
		<div className="Play">
			{/* <Link to="/">&lt;</Link> */}
			<Board size={8} />
		</div>
	);
};

export default Play;
