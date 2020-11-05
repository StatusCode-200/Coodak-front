/*eslint-disable*/

import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';

import './header.scss';

function Header() {
  return (
    <main id="headerPage">
      <Navbar>
        <ul className="menuItems">
          <Navbar.Brand id="anker" href="#home">Coodak</Navbar.Brand>

          <Link className="links" to="/">
            HOME
          </Link>

          <Link className="links" to="/challenges">
            CHALLENGES
          </Link>

          <Link className="links" to="/editor">
            EDITOR
          </Link>

          <Link className="links" to="/profile">
            PROFILE
          </Link>

          <Link className="links" to="/aboutus">
            ABOUTUS
          </Link>

          <Link className="links" to="/signin">
            SINGIN
          </Link>


          {/* <Link className="links" to="/signout">
            SIGNOUT
          </Link> */}

        </ul>
      </Navbar>

    </main>
  );
}

export default Header;
