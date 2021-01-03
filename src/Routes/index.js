import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import App from "../pages/App";

import history from "./history";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/test" component={App} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
