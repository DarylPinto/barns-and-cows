import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./TransitionRouter.scss";

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
							timeout={150}
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
