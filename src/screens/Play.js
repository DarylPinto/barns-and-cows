import React, { useState } from "react";
import useEventListener from "hooks/useEventListener";
import { useSelector, useDispatch } from "react-redux";
import { actions as debug } from "store/slices/debug";
import Board from "components/Play/Board";
import PlayMenu from "components/Play/PlayMenu";
import PlayModals from "components/Play/PlayModals";
import Button from "components/common/Button";
import "./Play.scss";

const boardSize = window.location.search.substr(1) || 8;

const Play = () => {
	const [restartModalOpen, setRestartModalOpen] = useState(false);
	const [skipModalOpen, setSkipModalOpen] = useState(false);
	const levelId = useSelector(state => state.level.id);
	const dispatch = useDispatch();

	// Close all PlayModal modals
	const closePlayModals = () => {
		setSkipModalOpen(false);
		setRestartModalOpen(false);
	};

	// Allow esc key to close all PlayModals
	const handleEscKey = e => (e.keyCode === 27 ? closePlayModals() : null);
	useEventListener(document, "keydown", handleEscKey);

	return (
		<div className="Play screen">
			<h1 style={{ position: "absolute", bottom: 100, left: 10 }}>
				Level {levelId}
			</h1>
			<Button onClick={() => dispatch(debug.toggle())} tier="secondary">
				toggle debug
			</Button>
			<Board size={boardSize} />
			<PlayMenu
				openRestartModal={() => setRestartModalOpen(true)}
				openSkipModal={() => setSkipModalOpen(true)}
			/>
			<PlayModals
				levelId={levelId}
				restartModalOpen={restartModalOpen}
				skipModalOpen={skipModalOpen}
				closePlayModals={closePlayModals}
			/>
		</div>
	);
};

export default Play;
