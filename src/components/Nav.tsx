import * as React from "react";
import { Link } from "react-router-dom";

const Nav = ({ location }: { location: { pathname: string } }): JSX.Element => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={`nav-link ${
            location.pathname.endsWith("/") ? "active" : ""
          }`}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/users"
          className={`nav-link ${
            location.pathname.includes("users") ? "active" : ""
          }`}
        >
          Users
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
