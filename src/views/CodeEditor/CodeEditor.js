/* eslint-disable react/prop-types */

import React from "react";

import "./CodeEditor.scss";

function CodeEdotor(props) {
  const { userId, project, onKeyUp } = props;
  return (
    <main id="CodeEditor">
      <textarea name="code_html" id="html" onKeyUp={onKeyUp} placeholder="HTML" />
      <textarea name="code_css" id="css" onKeyUp={onKeyUp} placeholder="CSS" />
      <textarea name="code_js" id="js" onKeyUp={onKeyUp} placeholder="JavaScript" />
      <input type="hidden" name="owner_id" value={userId} />
      <label htmlFor="name">
        <input type="text" name="name" id="projectName" value={project.name} required />
      </label>

      <iframe id="code" title="preview" />
    </main>
  );
}

export default CodeEdotor;
