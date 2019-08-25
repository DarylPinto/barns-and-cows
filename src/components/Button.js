import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./Button.scss";

const Button = ({ to = null, onClick = null, tier, children }) => {
	const className = classNames("Button", tier);

	const linkButton = (
		<Link to={to} className={className}>
			{children}
		</Link>
	);

	const actionButton = (
		<button onClick={onClick} className={className}>
			{children}
		</button>
	);

	return to ? linkButton : actionButton;
};

export default Button;
