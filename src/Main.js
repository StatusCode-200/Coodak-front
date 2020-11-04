import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home";
// import Login from "./views/Login/LoginContainer";
import Signup from "./views/signup/SignupContainer";
import AddChalenge from "./views/AddChalenge/AddChalengeContainer";
import Comment from "./views/Comment/CommentContainer";

import PageNotFound from "./views/PageNotFound/PageNotFound";
import Profile from "./views/Profile/ProfileContainer";
// import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/addChalenge" component={AddChalenge} />
        <Route exact path="/comment" component={Comment} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </main>
  );
}

export default Main;
