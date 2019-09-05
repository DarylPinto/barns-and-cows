import React, { useState } from "react";
import useEventListener from "hooks/useEventListener";
import { useSelector } from "react-redux";
import Board from "components/Play/Board";
import PlayMenu from "components/Play/PlayMenu";
import PlayModals from "components/Play/PlayModals";
import "./Play.scss";

const boardSize = window.location.search.substr(1) || 8;

const Play = () => {
	const [restartModalOpen, setRestartModalOpen] = useState(false);
	const [skipModalOpen, setSkipModalOpen] = useState(false);
	const levelId = useSelector(state => state.level.id);

	// Close all PlayModal modals
	const closePlayModals = () => {
		setSkipModalOpen(false);
		setRestartModalOpen(false);
	};

	// Allow esc key to close all PlayModals
	const handleEscKey = e => (e.keyCode === 27 ? closePlayModals() : null);
	useEventListener(document, "keydown", handleEscKey);

	return (
		<div className="Play">
			<h1 style={{ position: "absolute", bottom: 100, left: 10 }}>
				Level {levelId}
			</h1>
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
