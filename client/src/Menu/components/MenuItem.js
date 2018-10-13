import React from 'react';
import { Container, Row, Col } from "reactstrap";

const menuItem = props => (
    <Container>
        <Row>
            <Col lg="2">
                <h2>{props.name}</h2>
            </Col>
            <Col lg="4">
                <img alt="" src={props.image}/>
            </Col>
            <Col lg="2">
                <h4>{props.price}</h4>
            </Col>
            <Col lg="4">
                <p>{props.description}</p>
            </Col>
        </Row>
    </Container>
    // <div>
    // <h2>{props.name}</h2>
    // <img alt="" src={props.image}/>
    // <h4>{props.price}</h4>
    // <p>{props.description}</p>
    // </div>
);

export default menuItem;