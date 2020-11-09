/* eslint-disable */

import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { If, Then, Else } from '../../components/If/If';
import "./ChallengeDetails.scss"
import ChallengeRate from "./challengeRate"

function Challenge(props) {

  const markdown = `
  # Header 1
  ## Header 2

  _ italic _

  ** bold **

  <b> bold Html </b>
  `;

  const {challenge, propSolution, isSavedBefore, solution, userId, savedChallengeId, handleSubmit, handleChange, checkResult, stderr, stdout} = props;


  return (
    <main id="ChallengeDetails">
      <section id="forumAndWhiteboard">
        <div>
          <Link to={`/challenges/${challenge._id}/comments`}>
            Forum
          </Link>
          { (propSolution || isSavedBefore) && (
          <Link to={`/challenges/${challenge._id}/whiteboard`}>
            white board
          </Link>
        )
      }
        </div>
      </section>

      <section id="started-challenge">

        <div id="challenge-description">
          <p id="descriptionHeader">description</p>
          <div style={{whiteSpace: "pre-line"}} id="challengeDescription">
             <ReactMarkdown source={challenge.description} />
          </div>
        </div>

        <div id="work-area">
          <p id="solutionHeader">code here</p>
          <form id="saveChallenge" onSubmit={handleSubmit}>
            <textarea name="solution" onChange={handleChange} id="userSolution">
              { solution }
            </textarea>
            <input type="submit" value="save" />
          </form>

        </div>

      </section>

      <section id="checkResult">
      <button type="button" id="checkResultButton" onClick={checkResult}>check</button>
        <div id="results">
          <div style={{whitSpace: "pre-line"}} id="result-failed-cases"> {stderr && stderr.split('\n').map(str => <p>{str}</p>)} </div>
          <div style={{whitSpace: "pre-line"}} id="result-passed-cases"> {stdout && stdout.split('\n').map(str => <p>{str}</p>)} </div>
        </div>
      </section>

<ChallengeRate/>


    </main>
  );
}

export default Challenge;
