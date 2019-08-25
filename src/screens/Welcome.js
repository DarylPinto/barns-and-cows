import React from "react";
import Button from "components/common/Button";
import "./Welcome.scss";

const Welcome = () => {
	return (
		<div className="Welcome">
			<h1>
				Barns<span>and</span>Cows
			</h1>
			<Button to="/play" tier="primary">Play</Button>
		</div>
	);
};

export default Welcome;
