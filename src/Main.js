import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home";
// import Login from "./views/Login/LoginContainer";
import Signup from "./views/signup/SignupContainer";
import Challenges from "./views/Challenges/ChallengesContainer";
import ChallengeDetails from "./views/ChallengeDetails/ChallengeDetailsContainer";
import WhiteBoard from "./views/WhiteBoard/WhiteBoardContainer";

import PageNotFound from "./views/PageNotFound/PageNotFound";

function Main() {
  return (
    <main>
      <Switch>
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/challenges" component={Challenges} />
        <Route exact path="/challenges/:id" component={ChallengeDetails} />
        <Route exact path="/comment" component={Comment} />
        <Route exact path="/" component={Home} />
        <Route exact path="/whiteboard" component={WhiteBoard} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </main>
  );
}

export default Main;
