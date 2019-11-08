import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

export default function(props) {
  return (
    <Row>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Student fullname: </Form.Label>
          <Form.Control type="text" placeholder="Enter your fullname" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Link to="/batchdetails">
            <Button type="submit" variant="primary">
              Add student
            </Button>
          </Link>
          <Link to="/batches">
            <Button variant="secondary">Home</Button>
          </Link>
        </Form.Group>
      </Form>
    </Row>
  );
}
