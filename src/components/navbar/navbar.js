import React from "react";
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <h3>Mellina Ezzahir</h3>
      <a className="link navbarItem" href="#">Home</a>
      <a className="link navbarItem" href="#">Certificates</a>
      <a className="link navbarItem" href="#">Education</a>
      <a className="link navbarItem" href="#">Projects</a>
      <a className="link navbarItem" href="#">Contact me</a>
    </div>
  );
}

export default Navbar;