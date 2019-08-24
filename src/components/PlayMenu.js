import React from "react";
import { useDispatch } from "react-redux";
import { actions as level } from "store/slices/level";
import { Link } from "react-router-dom";
import generateBoard from "game/generateBoard";
import "./PlayMenu.scss";

const PlayMenu = ({ size }) => {
	const dispatch = useDispatch();

	return (
		<nav className="PlayMenu">
			<Link to="/">← Back</Link>
			<a onClick={() => dispatch(level.setNewBoard({ size }))}>New Game</a>
		</nav>
	);
};

export default PlayMenu;
