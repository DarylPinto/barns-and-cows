import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions as level } from "store/slices/level";
import Button from "components/common/Button";
import Modal from "components/common/Modal";
import "./PlayMenu.scss";

const PlayMenu = () => {
	const dispatch = useDispatch();
	const undoable = useSelector(state => state.level.moveHistory.length > 0);
	const levelId = useSelector(state => state.level.id);

	const [restartModalOpen, setRestartModalOpen] = useState(false);
	const [skipModalOpen, setSkipModalOpen] = useState(false);

	// Bind escape key to close modals
	const closeAllModals = e => {
		if (e.keyCode !== 27) return false;
		setSkipModalOpen(false);
		setRestartModalOpen(false);
	};

	useEffect(() => {
		document.addEventListener("keydown", closeAllModals);
		return () => document.removeEventListener("keydown", closeAllModals);
	}, []);

	return (
		<div className="PlayMenuWrapper">
			{/* Play Menu */}
			<nav className="PlayMenu">
				<div className="small">
					<Button to="/" tier="secondary">
						<i className="fas fa-bars" />
					</Button>
					<Button onClick={() => setRestartModalOpen(true)} tier="secondary">
						<i className="fas fa-undo-alt" />
					</Button>
					<Button onClick={() => setSkipModalOpen(true)} tier="secondary">
						<i className="fas fa-fast-forward" />
					</Button>
				</div>
				<Button
					onClick={() => dispatch(level.undo())}
					disabled={!undoable}
					tier="secondary"
				>
					<i className="fas fa-level-up-alt" /> Undo
				</Button>
			</nav>

			{/* Restart Level Modal */}
			<Modal visible={restartModalOpen}>
				<h1>Restart Level?</h1>
				<p>Are you sure you want to restart this level?</p>
				<Button tier="primary" onClick={() => setRestartModalOpen(false)}>
					No
				</Button>
				<Button
					tier="secondary"
					onClick={() => {
						setRestartModalOpen(false);
						dispatch(level.startOver());
					}}
				>
					Yes
				</Button>
			</Modal>

			{/* "Skip Level" Modal */}
			<Modal visible={skipModalOpen}>
				<h1>Skip Level?</h1>
				<p>Are you sure you want to skip this level?</p>
				<Button tier="primary" onClick={() => setSkipModalOpen(false)}>
					No
				</Button>
				<Button
					tier="secondary"
					onClick={() => {
						setSkipModalOpen(false);
						dispatch(level.loadLevel({ id: levelId + 1 }));
					}}
				>
					Yes
				</Button>
			</Modal>
		</div>
	);
};

export default PlayMenu;
