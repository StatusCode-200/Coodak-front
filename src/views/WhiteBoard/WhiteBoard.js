/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import "./WhiteBoard.scss";

function WhiteBoard(props) {
  const { whiteboard, savedChallengeId, userId, handleChange, handleSubmit} = props;
  return (
    <main id="whiteboard">
      <h2 id="titleW">Whiteboard</h2>
      <form action="#" id="whiteBoardForm" onSubmit={handleSubmit}>
        <input type="hidden" name="user_challenge_id" value={savedChallengeId} />
        <div className="grid-container">
          <div className="grid-item" style={{background: "linear-gradient(-45deg, #f403d1, #0989f0)", borderRadius: "10PX"}}>
            <h3>Problem Domain</h3>
            <textarea name="problem_domain" id="problemDomain" onChange={handleChange} style={{outline: "none",backgroundColor: "transparent",
    boxShadow: "inset 2px 2px 5px black, inset -5px -5px 10px #ab41d5",
    }}>
              { whiteboard.problem_domain }
            </textarea>
            
          </div>

          <div className="grid-item inputAndOutput">
            <h3>Input and output</h3>
            <label htmlFor="input">Input: <input name="input" id="input" onChange={handleChange} type="text" value={whiteboard.input} /> </label>
            
            <label htmlFor="output">Output: <input name="output" id="output" onChange={handleChange} type="text" value={whiteboard.output} /> </label>
            
          </div>

          <div className="grid-item">
            <h3>Algorithm</h3>
            <textarea name="algorithm" id="algorithm" className="text" onChange={handleChange} style={{wordWrap: "break-word", resize: "none"}}>

            </textarea>
            {/* <textarea name="algorithm" id="algorithm">
              { whiteboard.algorithm }
            </textarea> */}
          </div>

          <div className="grid-item">
            <h3>Edge Cases</h3>
            <textarea name="edge_cases" id="edgeCases" onChange={handleChange}>
              { whiteboard.edge_cases }
            </textarea>
          </div>

          <div className="grid-item">
            <h3>pseudo Code</h3>
            <textarea name="pseudo_code" id="pseudoCode" onChange={handleChange}>
              { whiteboard.pseudo_code }
            </textarea>
          </div>

          <div className="grid-item">
            <h3>Big O</h3>
            <textarea name="bigo" id="bigo" onChange={handleChange}>
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
