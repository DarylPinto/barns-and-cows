import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions as level } from "store/slices/level";
import Button from "components/Button";
import "./PlayMenu.scss";

const PlayMenu = ({ size }) => {
	const dispatch = useDispatch();
	const undoable = useSelector(state => state.level.moveHistory.length > 0);

	const startNewGame = () => {
		if (!window.confirm("Are you sure you want to start a new game?")) return;
		dispatch(level.setNewBoard({ size }));
	};

	return (
		<nav className="PlayMenu">
			<Button onClick={startNewGame} tier="secondary">
				New Game
			</Button>
			<Button to="/" tier="secondary">
				<i class="fas fa-home"></i>
			</Button>
			{undoable && (
				<Button onClick={() => dispatch(level.undo())} tier="secondary">
					<i class="fas fa-undo-alt"></i>
				</Button>
			)}
		</nav>
	);
};

export default PlayMenu;
