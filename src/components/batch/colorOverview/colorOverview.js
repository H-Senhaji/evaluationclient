import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export default function(props) {
  if (!props.colours) return "Loading colours";

  return (
    <Row>
      <Col>
        <Card bg="success" text="white" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{props.colours.green}%</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="danger" text="white" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{props.colours.red}%</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="warning" text="white" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{props.colours.yellow}%</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

//<<Link to={`/batches/${batch.id}`}>{batch.number}</Link>
//   <li key={student.id}>
//     Number:{student.number}, Start-date:{student.startdate} - Enddate:
//     {student.enddate}
//   </li>
