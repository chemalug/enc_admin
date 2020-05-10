import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { connect } from "react-redux";

import { Container, Row, Col } from "reactstrap";

import AuthNavbar from "components/Navbars/AuthNavbar.jsx";

class Landing extends Component {
  componentDidMount() {
    document.body.classList.add("bg-dark");
  }
  /*componentWillUnmount() {
    document.body.classList.remove("bg-dark");
  }*/

  render() {
    /*if (this.props.authState.loggedIn) {
      return <Redirect to="/admin/user-profile" />;
    }*/
    return (
      <>
        <div className="main-content">
          <AuthNavbar />
          <div className="header bg-dark py-7 py-lg-8">
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
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, {})(Landing);
