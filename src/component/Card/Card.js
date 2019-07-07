import React from "react";
import "./styles.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <span onClick={() => props.selectPicture(props.id)} className="select">
      </span>
    </div>
  );
}

export default Card;
