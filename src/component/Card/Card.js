import React from "react";
import "./styles.css";

function Card(props) {
  return (
    <>
          <div
            className="card"
            // onClick={props.clickHandler(props.id)}
          >
            <div className="img-container">
              <img alt={props.name} src={props.image} />
            </div>

          </div>
        </>
  );
}

export default Card;

/*
            <span
              onClick={() => props.selectPicture(props.id)}
              className="select"
            />
*/
