import React from "react";
import Containers from '../Containers'
import Navbar from '../Navbar';
import {withRouter} from 'react-router-dom'
import { Container, Row, Col } from "reactstrap";
import "./Pages.css";

const Dessert= () => (
  <div>
  <Navbar />
    <Container>
      <Row>
        <Col lg="12">
          <h1 className="title">Menu</h1>
        </Col>
      </Row>
    </Container>

    <Containers category="Dessert" />

    <a className="custom" href="/cats">Customize Menu</a>

  </div>
);

export default withRouter(Dessert);