import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Board from "components/Play/Board";
import PlayMenu from "components/Play/PlayMenu";
import Modal from "components/common/Modal";
import Button from "components/common/Button";
import { actions as level } from "store/slices/level";
import "./Play.scss";

const boardSize = 8;

const Play = () => {
	const dispatch = useDispatch();
	const levelCompleted = useSelector(state => state.level.completed);

	return (
		<div className="Play">
			<PlayMenu size={boardSize} />
			<Board size={boardSize} />
			<Modal visible={levelCompleted}>
				<h1>YOU WIN</h1>
				<p>Fantastic work, partner!</p>
				<Button
					onClick={() => dispatch(level.setNewBoard({ size: boardSize }))}
					tier="primary"
				>
					Next Level
				</Button>
			</Modal>
		</div>
	);
};

export default Play;
