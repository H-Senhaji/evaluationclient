import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row, ButtonToolbar } from "react-bootstrap";

export default function(props) {
  return (
    <Row>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>{props.student.fullname} </Form.Label>
          <Form.Control type="text" placeholder="Enter your fullname" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <ButtonToolbar>
            <Button variant="success">Day #1</Button>
            <Button variant="warning">Day #2</Button>
            <Button variant="danger">Day #3</Button>
            <Button variant="danger">Day #4</Button>
          </ButtonToolbar>
          <br />
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Enter a discription</Form.Label>
            <Form.Control type="text" placeholder="A description" />
          </Form.Group>
          <div className="radio">
            <label>
              <input type="radio" value="option1" checked={true} />
              Green
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option2" />
              Yellow
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option3" />
              Red
            </label>
          </div>
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
