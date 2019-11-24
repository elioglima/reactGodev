import React from "react";
import { history } from "../redux";
import { Switch, Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import Home from "../pages/home";
import Postagem from "../pages/postagem";
import Historia from "../pages/historia";
import PaginaNaoEncontrada from "../pages/paginaNaoEncontrada";
import Acesso from "../pages/acesso";

export default () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/historia" component={Historia} />
      <Route path="/postagem" component={Postagem} />
      <Route path="/acesso" component={Acesso} />
      <Route exact path="/" component={Home} />
      <Route path="*" exact={true} component={PaginaNaoEncontrada} />
    </Switch>
  </ConnectedRouter>
);
