/* eslint-disable */

import React from "react";
import { Link } from "react-router-dom";
import { If, Then, Else } from '../../components/If/If';
import "./ChallengeDetails.scss"
import ChallengeRate from "./challengeRate"

function Challenge(props) {
  const { challenge, solution, userId, savedChallengeId, stderr, stdout } = props;

  const WhiteboardLink = (props) => {
    if (savedChallengeId) {
      return (
        <Link to={`/challenges/${savedChallengeId}/whiteboard`}>
          white board
        </Link>
      );
    } else {
      return (
        null
      )
    }
  };

  return (
    <main id="ChallengeDetails">
      <section id="forumAndWhiteboard">
        <div>
          <Link to={`/challenges/${challenge._id}/comments`}>
            Forum
          </Link>
          <Link to={`/challenges/${challenge._id}/whiteboard`}>
            whiteboard
          </Link>
          <WhiteboardLink />
        </div>

      </section>
      <section id="started-challenge">

        <div id="challenge-description">
          <p id="descriptionHeader">description</p>
          <p id="challengeDescription">
            {challenge.description}
          </p>
        </div>

        <div id="work-area">
          <p id="solutionHeader">code here</p>
          <form id="saveChallenge" onSubmit={props.handleSubmit}>
            <textarea name="solution" id="userSolution">
              { solution }
            </textarea>
            <input type="submit" value="save" />
          </form>

        </div>

      </section>

      <section id="checkResult">
      <button type="button" id="checkResultButton" onClick={props.checkResult}>check</button>
        <div id="results">
          <div id="result-failed-cases"> {stderr} </div>
          <div id="result-passed-cases"> {stdout} </div>
        </div>
      </section>

<ChallengeRate/>


    </main>
  );
}

export default Challenge;
