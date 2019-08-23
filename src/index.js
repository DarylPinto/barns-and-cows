import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./screens/Welcome.js";
import Play from "./screens/Play.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<Router>
		<Route exact path="/" component={Welcome} />
		<Route path="/play" component={Play} />
	</Router>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
