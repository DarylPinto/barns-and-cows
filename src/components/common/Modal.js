import React from "react";
import classNames from "classnames";
import "./Modal.scss";

const Modal = ({ visible, children }) => {
	const shadeClassName = classNames("ModalShade", { visible });

	return (
		<div className={shadeClassName}>
			<div className="Modal">{children}</div>
		</div>
	);
};

export default Modal;
