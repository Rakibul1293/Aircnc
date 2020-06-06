import React from 'react';
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container">
            <nav className="slide out show navbar navbar-expand-sm navbar-light py-4 fixed-top ">
                <div className="container">
                    <a className="navbar-brand" href="/">Aircnc</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item font-weight-bold"><Link className="nav-link" to="/host-your-home">Host Your Home</Link></li>
                            <li className="nav-item font-weight-bold"><Link className="nav-link" to="/host-your-experience">Host Your Experience</Link></li>
                            <li className="nav-item font-weight-bold"><Link className="nav-link" to="/help">Help</Link></li>
                            <li className="nav-item font-weight-bold"><Link className="nav-link" to="/login">Login</Link></li>
                            <li className="nav-item font-weight-bold"><Link className="nav-link sign-up" to="/sign-up"><span>Sign up</span> </Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;