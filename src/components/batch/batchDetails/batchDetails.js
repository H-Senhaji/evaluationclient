import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import AshProfile from "../../../images/ash.png";
import { Link } from "react-router-dom";
import ColorOverviewContainer from "../colorOverview/colorOverviewContainer";

export default function BatchDetails(props) {
  if (!props.batchdetails) return "Loading batch details";

  return (
    <div>
      <ColorOverviewContainer />
      <Row>
        <Button onClick={props.handleClick}>
          Ask A Question: {props.askThisStudent.fullname}
        </Button>
        <Link to="/addstudent">
          <Button variant="success">Add student</Button>
        </Link>
        <Link to="/batches">
          <Button variant="secondary">Home</Button>
        </Link>
      </Row>
      {props.batchdetails.map(student => {
        return (
          <Link to={`/editstudent/${student.id}`}>
            <Card style={{ width: "14rem" }}>
              <Card.Img variant="top" src={AshProfile} />
              <Card.Body>
                <Button variant="primary">Edit</Button>
                <Button variant="danger">Delete</Button>
                <Card.Title>{student.fullname}</Card.Title>
                <Card.Text>{student.description}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

//foto moet nog inladen
