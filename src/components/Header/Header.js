/*eslint-disable*/

import React , { useContext } from "react";
import { Link } from "react-router-dom";
import {  Navbar } from 'react-bootstrap';
import ContentFunction from '../ToggleBackground/content-theam.js';
import { ThemeContext } from '../../views/context/TheamContainer';

import './header.scss';

function Header() {
  const themeContext = useContext(ThemeContext);


  return (
    <main id="headerPage" >
      <Navbar style={{padding: "0px"}}>
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
          <ContentFunction />
      </Navbar>

    </main>
  );
}

export default Header;
