import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const WarframePush = () => {
  function sayHello() {
    alert("test");
  }
  return (
    <Container>
      <Row>
        <Col md="auto">
          <Button variant="primary" onClick={sayHello} size="lg">
            Ask user permission
          </Button>
        </Col>
        <Col md="auto">
          <Button variant="primary" onClick={sayHello} size="lg">
            Create Notification subscription
          </Button>
        </Col>
        <Col md="auto">
          <Button variant="primary" onClick={sayHello} size="lg">
            Send subscription to push server
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default WarframePush;
