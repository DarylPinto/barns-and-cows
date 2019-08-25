import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions as level } from "store/slices/level";
import Button from "components/common/Button";
import Modal from "components/common/Modal";
import "./PlayMenu.scss";

const PlayMenu = ({ size }) => {
	const dispatch = useDispatch();
	const undoable = useSelector(state => state.level.moveHistory.length > 0);

	const [restartModalOpen, setRestartModalOpen] = useState(false);
	const [skipModalOpen, setSkipModalOpen] = useState(false);

	const startNewGame = () => {
		if (!window.confirm("Are you sure you want to skip this level?")) return;
		
	};

	const startLevelOver = () => {
		if (!window.confirm("Are you sure you want to start this level over?"))
			return;
		dispatch(level.startOver());
	};

	return (
		<div className="PlayMenuWrapper">
			<nav className="PlayMenu">
				<div className="small">
					<Button to="/" tier="secondary">
						<i className="fas fa-bars"></i>
					</Button>
					<Button onClick={() => setSkipModalOpen(true)} tier="secondary">
						<i className="fas fa-ban"></i>
					</Button>
					<Button onClick={() => setRestartModalOpen(true)} tier="secondary">
						<i className="fas fa-eraser"></i>
					</Button>
				</div>
				{undoable && (
					<Button onClick={() => dispatch(level.undo())} tier="secondary">
						<i className="fas fa-undo-alt"></i> Undo
					</Button>
				)}
			</nav>
			<Modal visible={restartModalOpen}>
				<h1>Restart Level?</h1>
				<p>Are you sure you want to restart this level?</p>
				<Button tier="primary" onClick={() => setRestartModalOpen(false)}>No</Button>
				<Button tier="secondary"
					onClick={() => {
						setRestartModalOpen(false);
						dispatch(level.startOver());
					}}
				>
					Yes
				</Button>
			</Modal>

			<Modal visible={skipModalOpen}>
				<h1>Skip Level?</h1>
				<p>Are you sure you want to skip this level?</p>
				<Button tier="primary" onClick={() => setSkipModalOpen(false)}>No</Button>
				<Button tier="secondary"
					onClick={() => {
						setSkipModalOpen(false);
						dispatch(level.setNewBoard({ size }));
					}}
				>
					Yes
				</Button>
			</Modal>
		</div>
	);
};

export default PlayMenu;
