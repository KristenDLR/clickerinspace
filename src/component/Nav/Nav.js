import React from "react";
import "./styles.css";

//include title, message, and score
function Nav(props) {
  return <nav className="Nav">
    <h1 className="title">Clicker in Space</h1>
    <p>Score: {props.score}</p>
  </nav>

}

export default Nav;
