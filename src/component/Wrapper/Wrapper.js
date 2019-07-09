import React from "react";
import "./style.css";
import { Container, Row, Col } from 'react-bootstrap'

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
