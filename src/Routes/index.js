import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import App from "../pages/App";
import Test from "../pages/teste/Teste";

import history from "./history";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/test" component={Test} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
