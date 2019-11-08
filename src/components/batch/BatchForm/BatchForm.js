import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function(props) {
  return (
    <Row>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Batch number: </Form.Label>
          <Form.Control type="text" placeholder="Enter your batch number" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Start-date: </Form.Label>
          <DatePicker
            placeholder="Enter a start-date"
            selected={props.startDate}
            onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>End-date: </Form.Label>
          <DatePicker
            placeholder="Enter a end-date"
            selected={props.startDate}
            onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Link to="/batches">
            <Button variant="primary">Save batch</Button>
          </Link>
        </Form.Group>
      </Form>
    </Row>
  );
}

//functioneel werkt datepicker niet
