import React from "react";
import { history } from "../redux";
import { Switch, Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import Home from "../pages/home";
import Postagem from "../pages/postagem";
import Historia from "../pages/historia";
import PaginaNaoEncontrada from "../pages/paginaNaoEncontrada";

export default () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/historia" component={Historia} />
      <Route path="/postagem" component={Postagem} />
      <Route exact path="/" component={Home} />
      <Route path="*" exact={true} component={PaginaNaoEncontrada} />
    </Switch>
  </ConnectedRouter>
);
