import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home";
// import Login from "./views/Login/LoginContainer";
import Signin from "./views/Signin/SigninContainer";

import Challenges from "./views/Challenges/ChallengesContainer";
import Comments from "./views/Comment/CommentContainer";
import ChallengeDetails from "./views/ChallengeDetails/ChallengeDetailsContainer";
import WhiteBoard from "./views/WhiteBoard/WhiteBoardContainer";
import CodeEditor from "./views/CodeEditor/CodeEditorContainer";

import AddChalenge from "./views/AddChalenge/AddChalengeContainer";

import PageNotFound from "./views/PageNotFound/PageNotFound";
import Profile from "./views/Profile/ProfileContainer";
// import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/editor" component={CodeEditor} />
        <Route exact path="/challenges" component={Challenges} />
        <Route exact path="/challenges/:id" component={ChallengeDetails} />
        <Route exact path="/challenges/:id/comments" component={Comments} />
        <Route exact path="/addChalenge" component={AddChalenge} />
        <Route exact path="/comment" component={Comments} />
        <Route exact path="/" component={Home} />
        <Route exact path="/whiteboard" component={WhiteBoard} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </main>
  );
}

export default Main;
