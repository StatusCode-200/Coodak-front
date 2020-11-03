import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="blockquote-wrapper">
        <div className="blockquote">
          <h1>
            Build your code
            <span style={{ color: "#ffffff" }}>,from end-to-end  </span>
            and let your work done faster
            <span style={{ color: "#ffffff" }}> , AND FASTER !!</span>
          </h1>
          <h4>
            &mdash; Coodak
            <br />
            <em>
              web site For Test And run your Code
            </em>
          </h4>
        </div>
      </div>

      <div className="tabled">

        <div className="linkDiv">
          <Link to="/codeeditor" className="Link">
            <span className="thin" />
            <span className="thick">Get Started !</span>
          </Link>
        </div>

      </div>

      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
            }}
          />
          <ul className="details">
            <li className="author">Coodak</li>
            <li className="tags">
              <ul>
                <li>Learn</li>
                <li>Code</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>

              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Learning to Code</h1>
          <h2>Opening a door to the future</h2>
          <p> Get work done quicker by building out entire projects or isolating code to test features . Want to keep it all under wraps? !!..</p>
          <p className="read-more">
            <Link to="/codeeditor" className="Link">
              Read More
            </Link>
          </p>
        </div>
      </div>
      <div className="blog-card alt">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1533&q=80)",
            }}
          />
          <ul className="details">
            <li className="author">Coodak</li>
            <li className="tags">
              <ul>
                <li>Learn</li>
                <li>Code</li>
                <li>Do your Challenges</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Start Your Challenges</h1>
          <h2>lets go and test your logical thinking</h2>
          <p>choose a code challenge from wide and different list of challenges, start practice and we will check your solution!!..</p>
          <p className="read-more">
            <Link to="/challenges" className="Link">
              Read More
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
