import React from "react";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    const rowStyling = {
      "margin-top": "40%"
    };

    return (
      <Row style={rowStyling}>
        <Col>
          <Link to="/signupform">
            <Button variant="primary" size="lg" block>
              INLOGGEN
            </Button>
          </Link>
          <Link to="/loginform">
            <Button variant="success" size="lg" block>
              REGISTREREN
            </Button>
          </Link>
        </Col>
      </Row>
    );
  }
}

export default Home;
