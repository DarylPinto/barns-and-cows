import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "components/common/Modal";
import Button from "components/common/Button";
import { actions as level } from "store/slices/level";
import "./PlayModals.scss";

const PlayModals = ({
	levelId,
	restartModalOpen,
	skipModalOpen,
	closePlayModals
}) => {
	const dispatch = useDispatch();
	const levelCompleted = useSelector(state => state.level.completed);

	return (
		<div className="PlayModals">
			{/* YOU WIN modal */}
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

			{/* RESTART LEVEL Modal */}
			<Modal visible={restartModalOpen}>
				<h1>Restart Level?</h1>
				<p>Are you sure you want to restart this level?</p>
				<Button tier="primary" onClick={closePlayModals}>
					No
				</Button>
				<Button
					tier="secondary"
					onClick={() => {
						closePlayModals();
						dispatch(level.restart());
					}}
				>
					Yes
				</Button>
			</Modal>

			{/* SKIP LEVEL Modal */}
			<Modal visible={skipModalOpen}>
				<h1>Skip Level?</h1>
				<p>Are you sure you want to skip this level?</p>
				<Button tier="primary" onClick={closePlayModals}>
					No
				</Button>
				<Button
					tier="secondary"
					onClick={() => {
						closePlayModals();
						dispatch(level.loadLevel({ id: levelId + 1 }));
					}}
				>
					Yes
				</Button>
			</Modal>
		</div>
	);
};

export default memo(PlayModals);
