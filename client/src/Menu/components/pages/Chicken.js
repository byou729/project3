import React from "react";
import Containers from '../Containers'
import { Container, Row, Col } from "reactstrap";
import Navbar from '../Navbar';
import "./Pages.css";
import Modal from "../Modal"


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

    <a className="custom" href="/login">Customize Menu</a>

  </div>
   
);

export default Chicken;