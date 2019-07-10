import React, { useState } from "react";
import "./styles.css";


//include title, message, and score
const Nav = ({score}) => (
  <nav className="Nav">
    <h1 className="title">Clicker in Space</h1>
    <p>Score: {score}</p>
  </nav>

)

export default Nav;
