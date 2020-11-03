/* eslint-disable */

import React from "react";
import { Link } from "react-router-dom";

function Challenges(props) {
  const {challenges} = props;
  return (
    <div className="wrapper">

      <section id="all-challenges">

        <div className="linkDiv">
          <Link to="/addChallenge">
            <span className="thin" />
            <span className="thick">ADD CHALLENGE</span>
          </Link>
        </div>
        {challenges.map((challenge, idx) => (
          <div className="one-challenge" key={idx}>
            <h3 className="challengeName">
              CHALLENGE NAME :
              <p>
                {challenge.name}
              </p>
            </h3>
            <h3 className="challengeS">
              CHALLENGE SUMMARY :
              <p>
                { challenge.summary }
              </p>
            </h3>

            <div className="linkDiv">
              <Link to={`/challenges/${challenge._id}`}>
                start
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
export default Challenges;
