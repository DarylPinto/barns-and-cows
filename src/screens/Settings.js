import React from "react";
import { withRouter } from "react-router-dom";
import Button from "components/common/Button";
import "./Settings.scss";

const Settings = withRouter(({ history }) => {
	const deleteSaveData = () => {
		if (
			!window.confirm(
				"Are you sure you want to delete all save data? THIS ACTION CANNOT BE UNDONE."
			)
		)
			return;
		localStorage.removeItem("state");
		history.push("/");
		window.location.reload();
	};

	return (
		<div className="Settings">
			<h1>Settings</h1>
			<Button onClick={deleteSaveData} tier="secondary">
				Delete all save data
			</Button>
			<Button to="/" tier="secondary">
				<i className="fas fa-arrow-left" />
				Back
			</Button>
		</div>
	);
});

export default Settings;
