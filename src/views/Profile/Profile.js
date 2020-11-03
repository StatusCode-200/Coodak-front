/* eslint-disable */

import React from "react";
import "./Profile.css";
function profile(props) {
  return (
    <main>

<div className="container">
            <h1>USER INFORMATION</h1>
            <section id="user-info">
        <img src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" alt="" style={{width: "200px",  height: "200px"}}  />
          <div>
              <h1>
                  {props.username}
              </h1>
          </div>
            </section>

            <div className="accordion">
              <div className="accordion-item">
                <button id="accordion-button-1" aria-expanded="false"><span className="accordion-title">My projects</span><span className="icon" aria-hidden="true"></span></button>
                <div id="user-projects" className="accordion-content">
                  <p></p>
                </div>
              </div>
              <div className="accordion-item">
                <button id="accordion-button-2" aria-expanded="false"><span className="accordion-title">My challenges</span><span className="icon" aria-hidden="true"></span></button>
                <div id="user-challenges" className="accordion-content">

                </div>
              </div>
            </div>
          </div>
   
</main>
  );
}

export default profile;
