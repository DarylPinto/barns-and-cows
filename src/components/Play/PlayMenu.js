import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions as level } from "store/slices/level";
import Button from "components/common/Button";
import "./PlayMenu.scss";

const PlayMenu = ({ size }) => {
	const dispatch = useDispatch();
	const undoable = useSelector(state => state.level.moveHistory.length > 0);

	const startNewGame = () => {
		if (!window.confirm("Are you sure you want to skip this level?")) return;
		dispatch(level.setNewBoard({ size }));
	};

	const startLevelOver = () => {
		if (!window.confirm("Are you sure you want to restart?")) return;
		dispatch(level.startOver());
	}

	return (
		<nav className="PlayMenu">
			<Button onClick={startNewGame} tier="secondary">
				Skip Level
			</Button>
			<Button onClick={startLevelOver} tier="secondary">
				Start Over	
			</Button>
			<Button to="/" tier="secondary">
				<i className="fas fa-home"></i>
			</Button>
			{undoable && (
				<Button onClick={() => dispatch(level.undo())} tier="secondary">
					<i className="fas fa-undo-alt"></i>
				</Button>
			)}
		</nav>
	);
};

export default PlayMenu;
