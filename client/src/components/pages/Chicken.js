import React from "react";
import Containers from '../Containers'
import { Container, Row, Col } from "reactstrap";

const Chicken = () => (
  
  <div>
  
    <Container>
      <Row>
        <Col lg="12">
          <h1 className="title">Menu</h1>
        </Col>
      </Row>
    </Container>

    <Containers />

  </div>
    
  
);

export default Chicken;