import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

const WarframePush = () => {
  function sayHello() {
    alert("test");
  }
  const [buttonText, setButtonText] = useState("Next");

  const changeText = (text) => setButtonText(text);

  return (
    <Container>
      <Row>
        <Col md="auto">
          <Button
            variant="primary"
            onClick={() => changeText("newText")}
            size="lg"
          >
            {buttonText}
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
