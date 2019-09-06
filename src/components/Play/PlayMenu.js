import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions as level } from "store/slices/level";
import Button from "components/common/Button";
import "./PlayMenu.scss";

const PlayMenu = ({ openRestartModal, openSkipModal }) => {
	const dispatch = useDispatch();
	const cannotBeUndone = useSelector(
		state => state.level.moveHistory.length === 0
	);

	return (
		<nav className="PlayMenu">
			<div className="small">
				<Button to="/" tier="secondary">
					<i className="fas fa-bars" />
				</Button>
				<Button onClick={openRestartModal} tier="secondary">
					<i className="fas fa-undo-alt" />
				</Button>
				<Button onClick={openSkipModal} tier="secondary">
					<i className="fas fa-fast-forward" />
				</Button>
			</div>
			<Button
				onClick={() => dispatch(level.undo())}
				disabled={cannotBeUndone}
				tier="secondary"
			>
				<i className="fas fa-level-up-alt" /> Undo
			</Button>
		</nav>
	);
};

export default memo(PlayMenu);
