import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "store";
import TransitionRouter from "components/App/TransitionRouter";
import { Route } from "react-router-dom";
import Welcome from "screens/Welcome";
import Play from "screens/Play";
import Settings from "screens/Settings";
import * as serviceWorker from "./serviceWorker";
import "assets/styles/global.scss";

document.title = "Barns and Cows";

ReactDOM.render(
	<Provider store={store}>
		<TransitionRouter>
			<Route exact path="/" component={Welcome} />
			<Route path="/play" component={Play} />
			<Route path="/settings" component={Settings} />
		</TransitionRouter>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
