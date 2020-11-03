/* eslint-disable */

import React from "react";
import "./Profile.css";

function profile(props) {
    console.log('propssssss', props);
     const renderProjects = () =>{
        {props.projects.map((project, idx) => 
            <ul>
                <li key={idx}> {project.project_name} </li>
            </ul>
     )}
    }
    return (
        <main>

            <div className="container">
                <h1>USER INFORMATION</h1>
                <section id="user-info">
                    <img src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" alt="" style={{ width: "200px", height: "200px" }} />
                    <div>
                        <h1>
                            {props.username}
                        </h1>
                    </div>
                </section>

                <div className="accordion">
                    <div className="accordion-item">
                        
                            <ul>
                            {props.projects.map((project, idx) =>
                                <li key={idx}> project{idx +1} : {project.project_name} </li>
                                )}
                            </ul>

                      

                        {/* {props.projects.map((project, idx) => (
                        console.log('>>>>>>',project), */}
                            
                            <button id="accordion-button-1" aria-expanded="false"  onClick={() => renderProjects()} >
                                <span className="accordion-title">My projects</span><span className="icon" aria-hidden="true"></span></button>

                            {/* ))} */}
                        <div id="user-projects" className="accordion-content">
                            <p></p>
                        </div>

                    </div>
                    <div className="accordion-item">
                    <ul>
                            {props.challenges.map((challenge, idx) =>
                                <li key={idx}> challenge name: {challenge.challenge_name} </li>
                                )}
                            </ul>
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
