import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home";
// import Login from "./views/Login/LoginContainer";
import Signup from "./views/signup/SignupContainer";
import Comment from "./views/Comment/CommentContainer";

import PageNotFound from "./views/PageNotFound/PageNotFound";

function Main() {
  return (
    <main>
      <Switch>
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/comment" component={Comment} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </main>
  );
}

export default Main;
