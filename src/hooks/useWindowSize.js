// Modified from: https://usehooks.com/useWindowSize/

import { useState, useEffect } from "react";

export default () => {
	function getSize() {
		return {
			width: window.innerWidth,
			height: window.innerHeight
		};
	}

	const [windowSize, setWindowSize] = useState(getSize);

	useEffect(() => {
		function handleResize() {
			setWindowSize(getSize());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount and unmount

	return windowSize;
};
