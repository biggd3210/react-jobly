import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'reactstrap';
import "./NavBar.css";


function NavBar() {
    return (
        <Navbar expand="md">
            <NavLink exact="true" to="/" className="navbar-brand">Jobly</NavLink>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink exact="true" to="/companies">Companies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink exact="true" to="/jobs">Jobs</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink exact="true" to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink exact="true" to="/signup">Sign Up</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default NavBar;