/* eslint-disable */

import React from "react";
import { Link } from "react-router-dom";
import "./Challenges.scss";

function Challenges(props) {
  const {challenges} = props;
  return (
    <main id="Challenges">
      <div className="wrapper">

<section id="all-challenges">

  <div className="linkDiv">
    <Link to="/addChallenge">
      <span className="thin" />
      <span className="thick">ADD CHALLENGE</span>
    </Link>
  </div>
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
              <p>{ challenge.summary }</p>
              <Link to={`/challenges/${challenge._id}`}>
                start
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
