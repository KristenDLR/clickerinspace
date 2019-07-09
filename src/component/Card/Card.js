import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";

function Card(props) {
  return (
    <Container>
      <Row>
        <Col xs={12} m={6} lg={4}>
          <div className="card">
            <div className="img-container">
              <img alt={props.name} src={props.image} />
            </div>
            <span
              onClick={() => props.selectPicture(props.id)}
              className="select"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Card;
