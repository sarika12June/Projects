import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <h2>Meals</h2>
        </li>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/contactus">
          <li>Contact</li>
        </Link>
        <Link to="/order">
          <li>Order</li>
        </Link>
      </ul>
    </div>
  );
}
export default NavBar;
