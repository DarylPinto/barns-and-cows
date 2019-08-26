import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./Button.scss";

const Button = ({
	to = null,
	onClick = null,
	disabled = false,
	tier,
	children
}) => {
	const className = classNames("Button", tier, { disabled });

	// Disable context menu (right click/mobile long press)
	// on buttons for a more app-like feel
	const disableContextMenu = e => {
		e.preventDefault();
		e.stopPropagation();
		return false;
	};

	const linkButton = (
		<Link
			to={to || "/"}
			className={className}
			onContextMenu={disableContextMenu}
		>
			{children}
		</Link>
	);

	const actionButton = (
		<button
			onClick={onClick}
			className={className}
			onContextMenu={disableContextMenu}
			disabled={disabled}
		>
			{children}
		</button>
	);

	return to ? linkButton : actionButton;
};

export default Button;
