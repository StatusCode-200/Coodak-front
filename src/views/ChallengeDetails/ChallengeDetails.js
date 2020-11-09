/* eslint-disable */

import React from "react";
import { Link } from "react-router-dom";
import "./ChallengeDetails.scss"
import ChallengeRate from "./challengeRate";
import {  Button } from 'react-bootstrap';

function Challenge(props) {

  const { challenge, propSolution, isSavedBefore, solution, userId, savedChallengeId, handleSubmit, handleChange, checkResult, stderr, stdout } = props;


  return (
    <main id="ChallengeDetails">
      <section id="forumAndWhiteboard">
        <div>
          <Link to={`/challenges/${challenge._id}/comments`}>
            Forum
          </Link>
          {(propSolution || isSavedBefore) && (
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
          <p style={{ whiteSpace: "pre-line" , textAlign: "justify"}} id="challengeDescription">
            {challenge.description}
          </p>
        </div>

        <div id="work-area">
          <p id="solutionHeader">code here</p>
          <form id="saveChallenge" onSubmit={handleSubmit}>
            <textarea name="solution" onChange={handleChange} id="userSolution">
              {solution}
            </textarea>
            <Button  variant="dark" type="submit" value="save" style={{float: "left", marginRight: "2%"}} >Save</Button>
          </form>

        <Button variant="dark" type="button" id="checkResultButton" onClick={checkResult}>RUN</Button>
        </div>

      </section>

      <section id="checkResult">

        <div id="results">
          <div style={{ whitSpace: "pre-line" }} id="result-failed-cases"> {stderr} </div>
          <div style={{ whitSpace: "pre-line" }} id="result-passed-cases"> {stdout} </div>
        </div>
      </section>

      {/* <ChallengeRate /> */}


    </main>
  );
}

export default Challenge;



// width: 41%;
//     border: 1px solid;
//     text-align: center;
//     margin: auto;




// width: 47%;
// /* float: right; */
// left: 98%;
// /* position: fixed; */
// border: 1px solid;
// text-align: center;
// margin: auto;
// /* width: 65%; */
// border-radius: 8px;
// /* text-align: left; */
// border: 1px solid;
// padding: 10px;
// /* margin-left: 2%; */
// box-shadow: 5px 10px 8px #888888;