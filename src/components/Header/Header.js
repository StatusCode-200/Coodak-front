/*eslint-disable*/

import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';

import './header.scss';

function Header() {
  return (
    <main id="headerPage">
      <Navbar>
        <ul class="menuItems">
        <Navbar.Brand id="anker" href="#home">Coodak</Navbar.Brand>

        <Link className="links" to="/">
            <Nav.Link href="#features">Home</Nav.Link>
          </Link>

          <Link className="links" to="/signup">
            <Nav.Link href="#Signup">LOGIN</Nav.Link>
          </Link>

        </ul>
      </Navbar>

    </main>
  );
}

export default Header;
