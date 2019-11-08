import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

export default function(props) {
  console.log(props);
  return (
    <Row>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Enter a fullname </Form.Label>
          <Form.Control type="text" placeholder="Enter a fullname" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <br />
          <Link to="/batches">
            <Button variant="secondary">Home</Button>
          </Link>
          <Link to="/batches">
            <Button variant="primary">Save student</Button>
          </Link>
        </Form.Group>
      </Form>
    </Row>
  );
}
