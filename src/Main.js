/*eslint-disable*/
import React , { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home";
// import Login from "./views/Login/LoginContainer";
import Signin from "./views/Signin/SigninContainer";
import Signout from "./views/Signout/SignoutContainer";

import Challenges from "./views/Challenges/ChallengesContainer";
import Comments from "./views/Comment/CommentContainer";
import ChallengeDetails from "./views/ChallengeDetails/ChallengeDetailsContainer";
import WhiteBoard from "./views/WhiteBoard/WhiteBoardContainer";
import CodeEditor from "./views/CodeEditor/CodeEditorContainer";

import AddChallenge from "./views/AddChalenge/AddChalengeContainer";
import AboutUs from "./views/AboutUs/AboutUs";

import PageNotFound from "./views/PageNotFound/PageNotFound";
import Profile from "./views/Profile/ProfileContainer";
import { ThemeContext } from './views/context/TheamContainer';


function Main() {
  const themeContext = useContext(ThemeContext);

  return (
    <main className={themeContext.mode}>

      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signout" component={Signout} />
        <Route exact path="/AboutUs" component={AboutUs} />
        <Route exact path="/editor" component={CodeEditor} />
        <Route exact path="/challenges" component={Challenges} />
        <Route exact path="/challenges/:id" component={ChallengeDetails} />
        <Route exact path="/challenges/:id/comments" component={Comments} />
        <Route exact path="/addChallenge" component={AddChallenge} />
        <Route exact path="/" component={Home} />
        <Route exact path="/whiteboard" component={WhiteBoard} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </main>
  );
}

export default Main;
