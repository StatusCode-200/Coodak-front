import React from "react";
import { Link } from "react-router-dom";

function Challenges(props) {
    const { challenges } = props;
  return (
    <>

<div class="wrapper">

        <section id="all-challenges">

            <div class="linkDiv">
            <Link to="/addChallenge">
            <span class="thin"></span><span class="thick">ADD CHALLENGE</span>
          </Link>
              </div>

           {challenges.map((challenge, i) =>  

       
<>
          <div className="one-challenge">
            <h3 className="challengeName">
              CHALLENGE NAME :
              <p> {challenge.name} </p>
            </h3>
            <h3 className="challengeS">
              CHALLENGE SUMMARY :
              <p> { challenge.summary } </p>
            </h3>

            <div className="linkDiv">
            <Link to={`/challenges/${challenge._id}`}>
            start
          </Link>
            </div>
          </div>
<hr />
</>
         )
         }
        </section>
      </div>

    </>
  );
}
export default Challenges;
