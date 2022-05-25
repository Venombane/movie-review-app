import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
    <nav>
        <ul>
            <div>
                <li>
                    <Link to="/">Movies</Link>
                </li>
                <li>
                    <Link to="/FormPage">Add Movie</Link>
                </li>
            </div>
        </ul>
    </nav>
);

export default NavBar;