import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BatchesList(props) {
  if (!props.batches) return "Loading";
  console.log("in batcheslist", props.batches);

  return (
    <div>
      <Row>
        <Col>
          {props.batches.map(batch => {
            return (
              <Link to={`/batchdetails/${batch.number}`}>
                <Card bg="light" style={{ width: "18rem" }}>
                  <Card.Header>Batch#{batch.number}</Card.Header>
                  <Card.Title>
                    <Card.Title>{batch.startdate}</Card.Title>
                    <Card.Title>{batch.enddate}</Card.Title>
                  </Card.Title>
                </Card>
              </Link>
            );
          })}
          <Link to="/batchesform">
            <Button variant="success">Add batch</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

//naast elkaar dan pas onder elkaar
//batches moeten uniek id krijgen
