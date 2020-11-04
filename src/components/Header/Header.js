/*eslint-disable*/

import React from "react";
import { Link } from "react-router-dom";
import { Nav , Navbar  } from 'react-bootstrap';

import './header.scss';

function Header() {
  return (
 <main id="headerPage">

    <Navbar className="containerHeader" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Coodak-front</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">

          <Link to="/">
            <Nav.Link href="#features">Home</Nav.Link>
          </Link>

          <Link to="/signup">
            <Nav.Link href="#Signup">REGISTRATION</Nav.Link>
          </Link>

          {/* <Link to="/signin">
            <Nav.Link href="#signin">signin</Nav.Link>
          </Link> */}
        </Nav>

      </Navbar.Collapse>
    </Navbar>

</main>
  );
}

export default Header;
