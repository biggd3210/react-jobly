import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav } from 'reactstrap';
import UserContext from "../auth/UserContext";
import "./Navigation.css";


function Navigation({ logout }) {
    const { currentUser } = useContext(UserContext);

    function loggedInNav() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/companies">
                        Companies
                    </NavLink>
                </li>
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/jobs">
                        Jobs
                    </NavLink>
                </li>
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/profile">
                        Profile
                    </NavLink>
                </li>
                <li className="nav-item mr-4">
                    <Link className="nav-link" to="/" onClick={logout}>
                        Log Out {currentUser.first_name || currentUser.username}
                    </Link>
                </li>
            </ul>
        )
    }

    function loggedOutNav() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/login">
                        Login
                    </NavLink>
                </li>
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/signup">
                        Sign Up
                    </NavLink>
                </li>
            </ul>
        );
    }
    return (
        <Navbar className="Navigation" expand="md">
            <Link exact='true' to="/" className="navbar-brand">Jobly</Link>
            <Nav className="ml-auto" navbar>
                {currentUser ? loggedInNav() : loggedOutNav()}
            </Nav>
        </Navbar>
    )
}

export default Navigation;