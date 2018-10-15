import React from "react";
import Containers from '../Containers'
import { Container, Row, Col } from "reactstrap";
import "./Pages.css";

const Chicken = () => (
  
  <div>
  
    <Container>
      <Row>
        <Col lg="12">
          <h1 className="title">Menu</h1>
          <a href='https://www.google.com'>Hello 2</a>
        </Col>
      </Row>
    </Container>

    <Containers category="Chicken" />

  </div>
    
  
);

export default Chicken;