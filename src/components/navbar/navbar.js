import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h3>Mellina Ezzahir</h3>
      <ul>
        <li>
          <Link className="link navbarItem" to="/certificates">Certificates</Link>
        </li>
        <li>
          <Link className="link navbarItem" to="/education">Education</Link>
        </li>
        <li>
          <Link className="link navbarItem" to="/projects">Projects</Link>
        </li>
        <li>
          <Link className="link navbarItem" to="/contact">Contact me</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;