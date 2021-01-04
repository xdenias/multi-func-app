import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import App from "../pages/App/App";
import Todo from "../pages/Todo/Todo";

import history from "./history";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/todo" component={Todo} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
