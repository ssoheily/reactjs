import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Menus from "./components/Menus/Menus";
import RightSide from "./components/RightSide/RightSide";
import LeftSide from "./components/LeftSide/LeftSide";
import CardGroups from "./components/CardGroups/CardGroups";
// import Cards from "./components/Cards/Cards";


function App() {
  return (
    <Container fluid>
      <Row>
        <Menus />
        <Col xs={12} md={6}>
          <LeftSide></LeftSide>
        </Col>
        <Col xs={12} md={6}>
          <RightSide></RightSide>
        </Col>
        <Col xs={12} >
          <CardGroups></CardGroups>
        </Col>
        {/* <Col >
          <Row className="part4" >
            <Col xs={12} sm={4} md={3}><Cards></Cards></Col>
            <Col xs={12} sm={4} md={3}><Cards></Cards></Col>
            <Col xs={12} sm={4} md={3}><Cards></Cards></Col>
            <Col xs={12} sm={4} md={3}><Cards></Cards></Col>
          </Row>
        </Col> */}
      </Row>
    </Container>
  );
}

export default App;
