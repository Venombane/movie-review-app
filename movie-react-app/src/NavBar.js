import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
    <nav className="bg-dark">
        
            <div className="row text-center">
                <button className="col btn btn-dark">
                    <Link to="/">Movies</Link>
                </button>
                <button className="col btn btn-dark ">
                    <Link to="/FormPage">Add Movie</Link>
                </button>
            </div>
            <hr className="text-white"></hr>
        
    </nav>
);

export default NavBar;