/*eslint-disable*/
import React, { useContext } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { ThemeContext } from '../../views/context/TheamContainer.js';
import ControlledCarousel from "./slider";

function Home() {
  const themeContext = useContext(ThemeContext);

  return (
    <main id="homePage">
    <ControlledCarousel />


      <div className="blockquote-wrapper">
        <div className="blockquote">
          <h1>
            Build your code
            <span style={{ color: "#fff" }}>,from end-to-end  </span>
            and let your work done faster
            <span style={{ color: "#fff" }}> , AND FASTER !!</span>
          </h1>
          <h4>
            &mdash; Coodak
            <br />
            <em>
              exists to encourage, challenge, and develop the skills and enjoyment of anyone with an interest in the programing
            {/* <br /> It's a website to Test And run your Code */}
            </em>
          </h4>
        </div>
      </div>

      <div className="tabled">

        <div className="linkDiv">
          <Link to="/editor" className="Link">
            <span className="thin" />
            <span style={{ color: "#a89e9e" }}> <h4>Become a better developer & start your learning journey with us.</h4></span>
            <span className="thick" style={{ background: themeContext.mode }}>
              <br /> Get Started !</span>
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

      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"

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
          <h1>Create Your Account</h1>
          <h2>Have your account to Have more features</h2>
          <p> in an Easy way you will have an account in our website to have your own profile ..</p>
          <p className="read-more">
            <Link to="/signin" className="Link">
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
              backgroundImage: "url(https://admin.workforce.com/wp-content/uploads/sites/2/2014/12/wf_120314_LastWord_Comments680x300.jpg)",
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
          <h1>Start Your Comments</h1>
          <h2> Discuss solutions with the community & Learn from senior developers..</h2>
          <p> If you are stuck or feel you need help, use the Discussion section and ask for hints and solutions.!!..</p>
          <p className="read-more">
            <Link to="/challenges" className="Link">
              Read More
            </Link>
          </p>
        </div>
      </div>

    </main>
  );
}

export default Home;
