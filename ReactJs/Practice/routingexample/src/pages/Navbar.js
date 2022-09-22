import React from "react";
import "./Navbarcs.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/contactus">
          <li>Contact</li>
        </Link>
        <Link to="/services">
          <li>Service</li>
        </Link>
        <Link to="/LocalStroageSrikant">
          <li>LocalStroageSrikant</li>
        </Link>
      </ul>
    </div>
  );
}
export default Navbar;
