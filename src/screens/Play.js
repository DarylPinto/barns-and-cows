import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Board from "components/Play/Board";
import PlayMenu from "components/Play/PlayMenu";
import Modal from "components/common/Modal";
import Button from "components/common/Button";
import { actions as level } from "store/slices/level";
import "./Play.scss";

const boardSize = window.location.search.substr(1) || 8;

const Play = () => {
	const dispatch = useDispatch();
	const levelCompleted = useSelector(state => state.level.completed);
	const levelId = useSelector(state => state.level.id);

	return (
		<div className="Play">
			<h1 style={{ position: "absolute", bottom: 0, left: 0 }}>
				Level {levelId}
			</h1>
			<PlayMenu />
			<Board size={boardSize} />
			<Modal visible={levelCompleted}>
				<h1>YOU WIN</h1>
				<p>Fantastic work, partner!</p>
				<Button
					onClick={() => dispatch(level.loadLevel({ id: levelId + 1 }))}
					tier="primary"
				>
					Next Level
				</Button>
			</Modal>
		</div>
	);
};

export default Play;
