import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.scss";

const Welcome = () => {
	return (
		<div className="Welcome">
			<h1>
				Barns<span>and</span>Cows
			</h1>
			<Link to="/play">Play</Link>
		</div>
	);
};

export default Welcome;
