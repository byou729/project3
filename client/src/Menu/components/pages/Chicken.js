import React from "react";
import Containers from '../Containers'
import { Container, Row, Col } from "reactstrap";
import Navbar from '../Navbar';
import "./Pages.css";

const Chicken = () => (
  
  <div>
  <Navbar />
    <Container>
      <Row>
        <Col lg="12">
          <h1 className="title">Menu</h1>
        </Col>
      </Row>
    </Container>

    <Containers category="Chicken" />

  </div>
    
  
);

export default Chicken;