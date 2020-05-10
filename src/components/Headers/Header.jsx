import React from "react";

import { connect } from "react-redux";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

class Header extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-4 pt-5 pt-md-8">
          <Container>
            <Row>
              <Col lg="6" xl="3">
                <Button
                  color="warning"
                  onClick={() =>
                    this.props.addStateCardAction(
                      "Performance",
                      "49,65%",
                      "fas fa-percent",
                      "bg-info text-white rounded-circle shadow",
                      "fas fa-arrow-up",
                      "text-success",
                      "12%",
                      "Since last month"
                    )
                  }
                >
                  Agregar nuevos usuarios
                </Button>
              </Col>
            </Row>
          </Container>
          <br />
        </div>
      </>
    );
  }
}

export default Header;
