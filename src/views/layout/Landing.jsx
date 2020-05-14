import React, { Component } from "react";

import { connect } from "react-redux";

import { Container, Row, Col } from "reactstrap";

import AuthNavbar from "components/Navbars/AuthNavbar";

class Landing extends Component {
  render() {
    /*if (this.props.authState.loggedIn) {
      return <Redirect to="/admin/user-profile" />;
    }*/
    return (
      <div>
        <div className="pt-5 pt-lg-5">
          <AuthNavbar />
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Encodely | Educator</h1>
                  <p className="text-lead text-light">
                    Plataforma para aprendizaje online
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, {})(Landing);
