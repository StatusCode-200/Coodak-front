/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import "./WhiteBoard.scss";

function WhiteBoard(props) {
  const { whiteboard, savedChallengeId, userId } = props;
  return (
    <main id="whiteboard">
      <h2 id="titleW">Whiteboard</h2>
      <form action="#" method="POST" id="whiteBoardForm">
        <input type="hidden" name="user_challenge_id" value={savedChallengeId} />
        <div className="grid-container">
          <div className="grid-item">
            <h3>Problem Domain</h3>
            <textarea name="problem_domain" id="problemDomain">
              { whiteboard.problem_domain }
            </textarea>
            <br />
            <label htmlFor="input">Input </label>
            <input name="input" id="input" type="text" value={whiteboard.input} />
            <br />
            <label htmlFor="output">Output </label>
            <input name="output" id="output" type="text" value={whiteboard.output} />
          </div>

          <div className="grid-item">
            <h3>Algorithm</h3>
            <textarea name="algorithm" id="algorithm">
              { whiteboard.algorithm }
            </textarea>
          </div>

          <div className="grid-item">
            <h3>Edge Cases</h3>
            <textarea name="edge_cases" id="edgeCases">
              { whiteboard.edge_cases }
            </textarea>
          </div>

          <div className="grid-item">
            <h3>pseudo Code</h3>
            <textarea name="pseudo_code" id="pseudoCode">
              { whiteboard.pseudo_code }
            </textarea>
          </div>

          <div className="grid-item">
            <h3>Big O</h3>
            <textarea name="bigo" id="bigo">
              { whiteboard.bigo }
            </textarea>
          </div>
        </div>
        <input type="submit" value="save" />
      </form>
    </main>
  );
}

WhiteBoard.propTypes = {
  whiteboard: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default WhiteBoard;
