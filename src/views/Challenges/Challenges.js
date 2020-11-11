/* eslint-disable */

import React from "react";
import { Link } from "react-router-dom";
import "./Challenges.scss";
import { Button } from 'react-bootstrap';

function Challenges(props) {
  const { challenges, user } = props;
  const addChallengeLink = (props) => {
    if (user.role == "admin") {
      return (
        <div className="linkDiv">
          <Link to="/addChallenge">
            <span className="thin" />
            <Button className="addChallengBtn" style={{ textAlign: "center" }} variant="danger">ADD CHALLENGE</Button>{' '}
          </Link>
        </div>
      );
    } else {
      return (
        null
      )
    }
  };
  return (
    <main id="Challenges">
      {/* <div className=" img-div">
      <img className=" img-fluid" src="https://www.infiniticreation.co.uk/wp-content/uploads/2014/03/home_sec.jpg" alt="card image" />

      </div> */}

      <div className="wrapper">

        <section id="all-challenges">
          <div class="card bg-light" style={{ marginLeft: "15%", marginRight: "15%", boxShadow: "5px 0px 8px #888888" }} >
            <div class="card-body text-center">
              <p class="card-text"><h6 style={{ textAlign: "center", lineHeight: "1.5" }}>
                Here you will find some curated challenges to help you preparing for leading tech companies Interviews
<br />
  Try to solve as many challenges from this list as possible & If you are stuck or feel you need help, use the Discussion  section and ask for hints and solutions.
</h6></p>
            </div>
          </div>

          {addChallengeLink()}

          <div className="bigContainer">
            <div className="subContainer">
              {challenges.map((challenge, idx) => (
                <div className="challengeCard">
                  <div className="face face1">
                    <div className="cardContent">
                      <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
                      <h3>{challenge.name}</h3>
                    </div>
                  </div>
                  <div className="face face2">
                    <div className="cardContent">
                      <p>{challenge.summary}</p>
                      <Link to={`/challenges/${challenge._id}`}>
                        <Button variant="light">START</Button>{' '}

                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </section>
      </div>
    </main>
  );
}
export default Challenges;
