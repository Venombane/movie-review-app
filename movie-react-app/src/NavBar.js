import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
    <nav bg="light">
        <ul>
            <li>
                <Link to="/">Movies</Link>
            </li>
            <li>
                <Link to="/FormPage">Add Movie</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;