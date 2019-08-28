import React, { useState, useEffect } from "react";
import useWindowSize from "hooks/useWindowSize";
import { useSelector, useDispatch } from "react-redux";
import { actions as level } from "store/slices/level";
import Tile from "components/Play/Tile";
import CowCount from "components/Play/CowCount";
import "./Board.scss";

const debug = false;

const Board = ({ size }) => {
	const windowSize = useWindowSize();
	const dispatch = useDispatch();

	const board = useSelector(state => state.level.board);
	const flatBoard = board.flat();

	const [tileWidth, setTileWidth] = useState(0);

	// Resize board width/height to fit screen
	const resizeBoard = () => {
		let boardWidth = Math.round(
			Math.min(document.body.offsetHeight, document.body.offsetWidth) * 0.85
		);
		setTileWidth(boardWidth / board.length);
	};

	// On mount
	useEffect(() => {
		// Initialize board if uninitialized
		if (board.length === 0) dispatch(level.setNewBoard({ size }));
		resizeBoard();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	// Resize board when board size or window size changes
	useEffect(resizeBoard, [windowSize, board.length]);

	const style = {
		marginLeft: (tileWidth / 2) * -1,
		marginTop: (tileWidth / 2) * -1
	};

	return (
		<main className="Board" style={style}>
			<table>
				<tbody>
					<tr>
						<td />
						{board.map((row, i) => (
							<CowCount
								tiles={flatBoard.filter(t => t.x === i)}
								width={tileWidth}
								key={i}
							/>
						))}
					</tr>
					{board.map((row, i) => (
						<tr key={i}>
							<CowCount tiles={row} width={tileWidth} />
							{row.map(tile => (
								<Tile
									key={tile.x + "," + tile.y}
									tile={tile}
									debug={debug}
									width={tileWidth}
								/>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);
};

export default Board;
