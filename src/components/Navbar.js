import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../css/Navbar.css'

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          
          <NavLink exact to="/" className="nav-logo">
           E-LOAN SERVICE
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"Home
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/About"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/addcustomer"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/CustomerLogin"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Customer Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/ManagerLogin"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Manager Login
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;