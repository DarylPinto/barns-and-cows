import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./TransitionRouter.scss";

const screenTransitionTime = 150;

// Animated router using TransitionGroup + CSSTransition
// from react-transition-group
const TransitionRouter = ({ children }) => {
	return (
		<HashRouter>
			<Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition
							key={location.pathname}
							classNames="fade"
							timeout={screenTransitionTime}
						>
							<Switch location={location}>{children}</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>
		</HashRouter>
	);
};

export default TransitionRouter;
