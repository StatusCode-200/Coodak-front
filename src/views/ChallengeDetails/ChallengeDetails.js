/* eslint-disable */

import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import "./ChallengeDetails.scss"
import ChallengeRate from "./challengeRate";
import {  Button } from 'react-bootstrap';

function Challenge(props) {
  const {challenge, propSolution, savedChallengeId, solution, userId, handleSubmit, handleChange, checkResult, stderr, stdout} = props;

  return (
    <main id="ChallengeDetails">
      <section id="forumAndWhiteboard">
        <div>
          <Link to={`/challenges/${challenge._id}/comments`}>
            FORUM
          </Link>
          { (savedChallengeId) && (
          <Link to={`/challenges/${savedChallengeId}/whiteboard`}>
            WHITEBOARD
          </Link>
        )
      }
        </div>
      </section>

      <section id="started-challenge">

        <div id="challenge-description">
          <p id="descriptionHeader">Description</p>
          <div style={{whiteSpace: "pre-line" , paddingTop: "10px"}} id="challengeDescription">
             <ReactMarkdown source={challenge.description} />
          </div>
        </div>

        <div id="work-area">
          <p id="solutionHeader">Code Here </p>
          <form id="saveChallenge" onSubmit={handleSubmit}>
            <textarea name="solution" onChange={handleChange} id="userSolution">
              {solution}
            </textarea>
            <Button   type="submit" value="save" style={{ borderColor: "snow" , float: "left", marginRight: "2%",  backgroundColor: "#c5c0c0"}} >Save</Button>
          </form>

        <Button style={{ borderColor: "snow",backgroundColor: "#c5c0c0"}} type="button" id="checkResultButton" onClick={checkResult}>RUN</Button>
        </div>

      </section>

      <section id="checkResult">

        <div id="results">
          <div style={{whitSpace: "pre-line"}} id="result-failed-cases"> {stderr && stderr.split('\n').map(str => <p style={{color: "red"}}>{str}</p>)} </div>
          <div style={{whitSpace: "pre-line"}} id="result-passed-cases">
          {
            stdout && stdout.split("failing")[0] && stdout.split("failing")[0].split('\n').map((str, i) => {
              const string = str.trim();
              if (i === 2) return (<p style={{color: "blue"}}>{string}</p>)
              else if (!(isNaN(string.charAt(0))) && !string.includes("passing")) {
                 return (<p style={{color: "red"}}>{string}</p>)
              } else if (string.includes("passing")){
                if (string.startsWith("0")){
                  return (<p style={{color: "red"}}>{string}</p>)   ;
                } else {
                  return (<p style={{color: "green"}}>{string}</p>)   ;
                }
              } else if (string.includes("✓")) {
                return (<p style={{color: "green"}}>{string}</p>)   ;
              } else {
                 return (<p style={{color: "black"}}>{string}</p>)
              }
            })
          }

          {
          stdout && stdout.split("failing")[1] && stdout.split("failing")[1].split('\n').map(str => <p style={{color: "red"}}>{str}</p>)
        }
           </div>
        </div>
      </section>

      {/* <ChallengeRate /> */}


    </main>
  );
}

export default Challenge;
