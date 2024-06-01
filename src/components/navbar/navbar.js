import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h3>Mellina Ezzahir</h3>
      <Link className="link navbarItem" to="/#">Home</Link>
      <Link className="link navbarItem" to="/">Certificates</Link>
      <Link className="link navbarItem" to="/">Education</Link>
      <Link className="link navbarItem" to="/projects">Projects</Link>
      <Link className="link navbarItem" to="/">Contact me</Link>
    </div>
  );
}

export default Navbar;