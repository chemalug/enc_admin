import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

import ModalForm from "./modal.school";
class Header extends React.Component {
  state = { buttonLabel: "" };

  componentDidMount() {
    this.setState({ buttonLabel: "Hola mundo" });
  }

  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container>
            <Row>
              <Col lg="6" xl="3">
                <Button
                  color="success"
                  onClick={() => {
                    ModalForm("Hola mindo", "true");
                  }}
                >
                  <i className="fas fa-school"> </i> Agregar Colegio
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
