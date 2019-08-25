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
		if (!window.confirm("Are you sure you want to start this level over?"))
			return;
		dispatch(level.startOver());
	};

	return (
		<nav className="PlayMenu">
			<div className="small">
				<Button to="/" tier="secondary">
					<i className="fas fa-bars"></i>
				</Button>
				<Button onClick={startNewGame} tier="secondary">
					<i className="fas fa-ban"></i>
				</Button>
				<Button onClick={startLevelOver} tier="secondary">
					<i className="fas fa-eraser"></i>
				</Button>
			</div>
			{undoable && (
				<Button onClick={() => dispatch(level.undo())} tier="secondary">
					<i className="fas fa-undo-alt"></i> Undo
				</Button>
			)}
		</nav>
	);
};

export default PlayMenu;
