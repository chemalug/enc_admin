import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { connect } from "react-redux";

import { Container, Row, Col, NavItem, Nav } from "reactstrap";

import AuthNavbar from "components/Navbars/AuthNavbar.jsx";
import routes from "routes.js";
class Auth extends Component {
  componentDidMount() {
    document.body.classList.remove("bg-dark");

    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/admin");
    }
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-dark");
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/admin");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    return (
      <>
        <div className="main-content">
          <AuthNavbar />
          <div className="main bg-dark py-7 py-lg-8">
            <Container>
              <div className="main-body text-center mb-7">
                <Row className="justify-content-center">
                  <Col lg="5" md="6">
                    <h1 className="text-white">Encodely | Educator</h1>
                    <p className="text-lead text-light">Autenticación</p>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          {/*Page content*/}
          <Container className="mt--9 pb-2">
            <Row className="justify-content-center">
              <Switch>{this.getRoutes(routes)}</Switch>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, {})(Auth);
