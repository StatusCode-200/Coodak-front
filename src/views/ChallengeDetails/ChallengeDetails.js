/* eslint-disable */

import React from "react";
import { Link } from "react-router-dom";
import {If, Then, Else} from '../../components/If/If';

function Challenge(props) {
  const {challenge, solution, userId, savedChallengeId} = props;

  const WhiteboardLink =(props) => {
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
    <main>

      <section id="started-challenge">

        <div id="challenge-description">
          <div>
            <Link to={`/challenges/${challenge._id}/comments`}>
              Forum
            </Link>
          </div>
          <WhiteboardLink />
          <p>
            { challenge.description }
          </p>
        </div>

        <div id="work-area">

          <form id="saveChallenge">
            <textarea name="solution" id="userSolution" cols="70" rows="40">
              { solution? solution : challenge.starter_code }
            </textarea>
            <input id="inputUser_id" type="hidden" name="user_id" value={userId} />
            <input id="inputChallenge_id" type="hidden" name="challenge_id" value={challenge._id} />
            <input type="submit" value="save" />

          </form>

          <button type="button" onClick="checkResult()">check</button>

        </div>

      </section>

      <section id="results">
        <div id="result-failed-cases"></div>
        <div id="result-passed-cases"></div>
      </section>
    </main>
  );
}

export default Challenge;
