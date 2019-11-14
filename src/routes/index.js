import React from "react";
import { history } from "../redux";
import { Switch, Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import Home from "../pages/home";
import Historia from "../pages/historia";
import Postagem from "../pages/postagem";

export default () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/historia" component={Historia} />
      <Route path="/postagem" component={Postagem} />
    </Switch>
  </ConnectedRouter>
);
