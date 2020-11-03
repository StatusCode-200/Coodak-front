import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/login">
            login
          </Link>
        </li>
        <li>
          <Link to="/signup">
            signup
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
