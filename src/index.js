import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import Welcome from "screens/Welcome";
import Play from "screens/Play";
import "assets/styles/global.scss";

document.title = "Barns and Cows";

ReactDOM.render(
	<Router>
		<AnimatedSwitch
			atEnter={{ opacity: 0 }}
			atLeave={{ opacity: 1 }}
			atActive={{ opacity: 1 }}
		>
			<Route exact path="/" component={Welcome} />
			<Route path="/play" component={Play} />
		</AnimatedSwitch>
	</Router>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
