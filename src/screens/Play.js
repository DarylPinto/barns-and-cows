import React from "react";
import Board from "components/Board";
import PlayMenu from "components/PlayMenu";
import "./Play.scss";

const boardSize = 8;

const Play = () => {
	return (
		<div className="Play">
			<PlayMenu size={boardSize} />
			<Board size={boardSize} />
		</div>
	);
};

export default Play;
