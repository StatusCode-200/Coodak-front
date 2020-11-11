/* eslint-disable react/prop-types */
/*eslint-disable*/
import React from "react";

import "./CodeEditor.scss";
import { CardDeck, Card, CardGroup, CardColumns, Button, InputGroup, FormControl } from 'react-bootstrap';

function CodeEdotor(props) {
  const { userId, project, onKeyUp } = props;
  return (
    <main id="CodeEditor">

      <CardGroup>

        <Card bg="dark" text="white" style={{ width: '25.5rem', marginRight: "15px" }}  >
          <Card.Header className="codeName">HTML</Card.Header>

          <textarea onChange={props.handleChange} value={project.code_html}  name="code_html" id="html" placeholder="HTML" />
        </Card>

        <Card bg="dark" text="white" style={{ width: '25.5rem', marginRight: "15px" }}  >
          <Card.Header className="codeName">CSS</Card.Header>
          <textarea onChange={props.handleChange} value={project.code_css} name="code_css" id="css" placeholder="CSS" />

        </Card>
        <Card bg="dark" text="white" style={{ width: '25.5rem' }}  >
          <Card.Header className="codeName">JAVASCRIPT</Card.Header>
          <textarea onChange={props.handleChange} value={project.code_js} name="code_js" id="js" placeholder="JavaScript" />

        </Card>
      </CardGroup>

      <iframe className="resultCode" id="code" title="preview" />

      <div id="saveProject" >

        {/* <label className="projectName" htmlFor="name"> PROJECT NAME   </label>
        <input onChange={props.handleChange} defaultValue={project.name} type="text" name="name" id="projectName" defaultValue={project.name} required /> */}
        { props.userId &&
        <>
        <label className="projectName" htmlFor="name"> PROJECT NAME   </label>
        <input onChange={props.handleChange} value={project.name} type="text" name="name" id="projectName" defaultValue={project.name} required />
        <Button variant="danger" style={{marginLeft: "10px", padding: "3px 8px"}} onClick={props.handleSubmit}>Save</Button>
        </>
        }
      {/* <Button variant="danger" style={{marginLeft: "10px", padding: "3px 8px"}} onClick={props.handleSubmit}>Save</Button> */}
      </div>


    </main>
  );
}

export default CodeEdotor;
