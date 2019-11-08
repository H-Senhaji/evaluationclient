import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const loginForm = ({ data }) => (
  <Form>
    <h3>INLOGGEN</h3>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Link to="/batches">
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Link>
  </Form>
);

export default loginForm;
