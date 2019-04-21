import * as React from "react";
import { Link } from "react-router-dom";
import Users from "./Users";

interface NavProps {
    location: { pathname: string; };
    history: object;
}

const Nav = ({ location, history }: NavProps) => {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={`nav-link ${location.pathname.endsWith("/") ? "active": ""}`} >Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/users" className={`nav-link ${location.pathname.endsWith("users") ? "active": ""}`} >Users</Link>
            </li>
        </ul>
    );
};

export default Nav;
