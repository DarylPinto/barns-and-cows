import React from 'react';
import { Link } from "react-router-dom";
import Play from "./Play.js";

const Welcome = () => {
	return (
		<div>
			Trees and Tents
			<Link to="/play">Play!</Link>
		</div>
	);
};

export default Welcome;