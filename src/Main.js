import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Login from "./views/Login/LoginContainer";
import PageNotFound from "./views/PageNotFound/PageNotFound";
import Profile from "./views/Profile/ProfileContainer";

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </main>
  );
}

export default Main;
