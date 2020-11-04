/* eslint-disable react/prop-types */

import React from "react";

function CodeEdotor(props) {
  const { userId, project } = props;
  return (
    <>
      <textarea id="html" placeholder="HTML" name="code_html" />

      <textarea id="css" placeholder="CSS" name="code_css" />
      <textarea id="js" placeholder="JavaScript" name="code_js" />
      <input type="hidden" name="owner_id" value={userId} />
      <label htmlFor="name">
        <input type="text" name="name" id="projectName" value={project.name} required />
      </label>

      <iframe id="code" title="preview" />
    </>
  );
}

export default CodeEdotor;
