import React from "react";
import Button from "components/common/Button";
import "./Welcome.scss";

const Welcome = () => {
	return (
		<div className="Welcome">
			<h1>
				Barns<span>and</span>Cows
			</h1>
			<Button to="/play" tier="primary">
				Play
			</Button>
			<Button to="/endless" tier="secondary">
				Endless
			</Button>
			<Button to="/daily" tier="secondary">
				Daily Levels
			</Button>
			<div className="small">
				<Button to="/settings" tier="secondary">
					<i className="fas fa-cog" />
				</Button>
				<Button to="/tutorial" tier="secondary">
					<i className="fas fa-question" />
				</Button>
			</div>
		</div>
	);
};

export default Welcome;
