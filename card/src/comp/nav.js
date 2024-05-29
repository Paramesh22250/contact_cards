import React from "react";

function Nav() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={require("./images/nav-logo.png")} />
        <h3>LOGO</h3>
      </div>
      <ul className="nav-elements">
        <li>Home</li>
        <li>About</li>
        <li>SignUp</li>
      </ul>
    </div>
  );
}
export default Nav;
