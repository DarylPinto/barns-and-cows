import React from "react";
import { useDispatch } from "react-redux";
import { actions as level } from "store/slices/level";
import { Link } from "react-router-dom";
import "./PlayMenu.scss";

const PlayMenu = ({ size }) => {
	const dispatch = useDispatch();

	const startNewGame = () => {
		if(!window.confirm("Are you sure you want to start a new game?")) return;
		dispatch(level.setNewBoard({ size }));
	}

	return (
		<nav className="PlayMenu">
			<Link to="/">← Back</Link>
			<a onClick={() => dispatch(level.undo())}>Undo</a>
			<a onClick={startNewGame}>New Game</a>
		</nav>
	);
};

export default PlayMenu;
