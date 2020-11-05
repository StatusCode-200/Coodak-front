/* eslint-disable */

import React from "react";
import "./Profile.scss";

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
        <main id="profilePage">

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

{/* <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-xl-12 col-md-12">
                <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                                <div className="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" /> </div>
                                <h6 className="f-w-600">Hembo Tingor</h6>
                                <p>Web Designer</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-block">
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h6 className="text-muted f-w-400">rntng@gmail.com</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Phone</p>
                                        <h6 className="text-muted f-w-400">98979989898</h6>
                                    </div>
                                </div>
                                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Recent</p>
                                        <h6 className="text-muted f-w-400">Sam Disuja</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Most Viewed</p>
                                        <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                                    </div>
                                </div>
                                <ul className="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */}