import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import PageNotFound from "./views/PageNotFound";

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </main>
  );
}

export default Main;
