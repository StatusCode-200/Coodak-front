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

          <textarea onChange={props.handleChange}  name="code_html" id="html" onKeyUp={onKeyUp} placeholder="HTML" />
        </Card>

        <Card bg="dark" text="white" style={{ width: '25.5rem', marginRight: "15px" }}  >
          <Card.Header className="codeName">CSS</Card.Header>
          <textarea onChange={props.handleChange} name="code_css" id="css" onKeyUp={onKeyUp} placeholder="CSS" />

        </Card>
        <Card bg="dark" text="white" style={{ width: '25.5rem' }}  >
          <Card.Header className="codeName">JAVASCRIPT</Card.Header>
          <textarea onChange={props.handleChange} name="code_js" id="js" onKeyUp={onKeyUp} placeholder="JavaScript" />

        </Card>
      </CardGroup>

      <iframe className="resultCode" id="code" title="preview" />

      <div id="saveProject" >

        <label htmlFor="name"> PROJECT NAME  :  </label>
        <input onChange={props.handleChange} type="text" name="name" id="projectName" defaultValue={project.name} required />
       
      <Button variant="danger" onClick={props.handleSubmit}>Save</Button>
      </div>


    </main>
  );
}

export default CodeEdotor;
