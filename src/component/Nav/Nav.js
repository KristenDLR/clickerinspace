import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";


//include title, message, and score
function Nav(props) {
  return <nav className="Nav">
    <Container>
     <Row className="Nav">
        <Col className="col" m={6}>
    
          <h1 className="title">Clicker in Space</h1>
        </Col>
        <Col className="col" m={6}>
         <p>Score: {props.score}</p>
        </Col>
     </Row>
    </Container>
    
  </nav>

}

export default Nav;
