import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HelloWorld = () => {
  function sayHello() {
    alert("test");
  }
  return (
    <Container>
      <Row>
        <Col>
          <Button variant="primary" onClick={sayHello} size="lg">
            Test 1
          </Button>
        </Col>
        <Col>
          <Button variant="primary" onClick={sayHello} size="lg">
            Test 2
          </Button>
        </Col>
        <Col>
          <Button variant="primary" onClick={sayHello} size="lg">
            Test 3
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HelloWorld;
