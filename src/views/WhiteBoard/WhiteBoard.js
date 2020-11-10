/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import "./WhiteBoard.scss";
import {  Button } from 'react-bootstrap';

function WhiteBoard(props) {
  const { whiteboard, userId, handleChange, handleSubmit} = props;
  return (
    <main id="whiteboard">
      <h2 id="titleW">Whiteboard</h2>
      <form action="#" id="whiteBoardForm" onSubmit={handleSubmit}>
        <div className="grid-container">
          <div className="grid-item">
            <h3>Problem Domain</h3>
            <textarea name="problem_domain" id="problemDomain" defaultValue={whiteboard.problem_domain} className="text" onChange={handleChange} >
            </textarea>

          </div>

          <div className="grid-item inputAndOutput">
            <h3>Input and output</h3>
            <label htmlFor="input">Input: <input style={{width: "95%"}} name="input" id="input" onChange={handleChange} type="text" value={whiteboard.input} /> </label>

            <label htmlFor="output">Output: <input style={{width: "95%"}} name="output" id="output" onChange={handleChange} type="text" value={whiteboard.output} /> </label>

          </div>

          <div className="grid-item">
            <h3>Algorithm</h3>
            <textarea name="algorithm" id="algorithm" required defaultValue={whiteboard.algorithm} className="text" onChange={handleChange} >

            </textarea>
            {/* <textarea name="algorithm" id="algorithm">
              { whiteboard.algorithm }
            </textarea> */}
          </div>

          <div className="grid-item">
            <h3>Edge Cases</h3>
            <textarea name="edge_cases" id="edgeCases" defaultValue={whiteboard.edge_cases} className="text" onChange={handleChange}>
            </textarea>
          </div>

          <div className="grid-item">
            <h3>pseudo Code</h3>
            <textarea name="pseudo_code" id="pseudoCode" defaultValue={whiteboard.pseudo_code} className="text" onChange={handleChange}>
            </textarea>
          </div>

          <div className="grid-item">
            <h3>Big O</h3>
            <textarea name="bigo" id="bigo" required className="text" defaultValue={whiteboard.bigo} onChange={handleChange}>
            </textarea>
          </div>
        </div>
        <Button type="submit" variant="danger">save</Button>{' '}
      </form>
    </main>
  );
}

WhiteBoard.propTypes = {
  whiteboard: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default WhiteBoard;
