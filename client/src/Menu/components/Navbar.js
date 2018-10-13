import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./Navbar.css";

const Navbar = () => (

<Container>
    <nav> 
        <Row>
            <Col lg="3">
            <Link to="/"
            className={
                window.location.pathname === "/" ? "current" : "other"
              }
            >Chicken</Link>
            </Col>
            <Col lg="3">
            <Link to="/beef"
            className={
                window.location.pathname === "/beef" ? "current" : "other"
              }
            >Beef</Link>
            </Col>
            <Col lg="3">
            <Link to="/sides"
            className={
                window.location.pathname === "/sides" ? "current" : "other"
              }
            >Sides</Link>
            </Col>
            <Col lg="3">
            <Link to="/dessert"
            className={
                window.location.pathname === "/dessert" ? "current" : "other"
              }
            >Dessert</Link>
            </Col>
        </Row>
    </nav>
</Container>

);

export default Navbar;