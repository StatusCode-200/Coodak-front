/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import "./WhiteBoard.scss";
import {  Button } from 'react-bootstrap';

function WhiteBoard(props) {
  const { whiteboard, userId, handleChange, handleSubmit} = props;
  return (
    <main id="whiteboard">
      {/* <h2 id="titleW" style={{paddingTop: "1.5rem"}}>Whiteboard</h2> */}
      <form action="#" id="whiteBoardForm" onSubmit={handleSubmit}>
        <div className="grid-container">
          <div className="grid-item">
            <h5>Problem Domain</h5>
            <textarea name="problem_domain" id="problemDomain" defaultValue={whiteboard.problem_domain} className="text" onChange={handleChange} >
            </textarea>

          </div>

          <div className="grid-item inputAndOutput">
            <h5>Input and output</h5>
            <label htmlFor="input"><h6> Input:</h6>  <input style={{width: "75%", height: "40%"}} name="input" id="input" onChange={handleChange} type="text" value={whiteboard.input} /> </label>

            <label htmlFor="output"><h6>Output:</h6> <input style={{width: "75%", height: "40%"}} name="output" id="output" onChange={handleChange} type="text" value={whiteboard.output} /> </label>

          </div>

          <div className="grid-item">
            <h5>Algorithm</h5>
            <textarea name="algorithm" id="algorithm" required defaultValue={whiteboard.algorithm} className="text" onChange={handleChange} >

            </textarea>
            {/* <textarea name="algorithm" id="algorithm">
              { whiteboard.algorithm }
            </textarea> */}
          </div>

          <div className="grid-item">
            <h5>Edge Cases</h5>
            <textarea name="edge_cases" id="edgeCases" defaultValue={whiteboard.edge_cases} className="text" onChange={handleChange}>
            </textarea>
          </div>

          <div className="grid-item">
            <h5>pseudo Code</h5>
            <textarea name="pseudo_code" id="pseudoCode" defaultValue={whiteboard.pseudo_code} className="text" onChange={handleChange}>
            </textarea>
          </div>

          <div className="grid-item">
            <h5>Big O</h5>
            <textarea name="bigo" id="bigo" required className="text" defaultValue={whiteboard.bigo} onChange={handleChange}>
            </textarea>
          </div>
        </div>
        <Button type="submit" variant="danger" style={{ marginTop:"10px"}}>save</Button>{' '}
      </form>
    </main>
  );
}

WhiteBoard.propTypes = {
  whiteboard: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default WhiteBoard;
