import React, { useState } from "react";
import "./styles.css";

//include title, message, and score
function Nav(props) {
  return <nav className="Nav">Clicker In Space<
    <p>Score: {props.score}</p>
  </nav>

}

export default Nav;
