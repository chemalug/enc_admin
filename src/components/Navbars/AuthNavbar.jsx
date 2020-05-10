import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class AuthNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar
          className="navbar-top navbar-horizontal navbar-dark mt-4"
          expand="lg"
        >
          <Container className="px-4">
            <NavbarBrand to="/" tag={Link}>
              <img
                alt="..."
                src={require("assets/images/brand/logow-alt.png")}
                style={{ height: "72px" }}
              />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar-collapse-main">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              navbar
              toggler="#navbar-collapse-main"
              className="bg-dark"
            >
              <div
                className="navbar-collapse-header"
                style={{ height: "72px" }}
              >
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/images/brand/logow-alt.png")}
                        style={{ height: "72px" }}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      className="navbar-toggler"
                      id="navbar-collapse-main"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-lg-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link-icon" to="/admin" tag={Link}>
                    <i className="ni ni-planet text-light" />
                    <span className="nav-link-inner--text text-light">
                      Dashboard
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="/auth/register"
                    tag={Link}
                  >
                    <i className="ni ni-circle-08 text-light" />
                    <span className="nav-link-inner--text text-light">
                      Register
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="/auth/login"
                    tag={Link}
                  >
                    <i className="ni ni-key-25 text-light" />
                    <span className="nav-link-inner--text text-light">
                      Login
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AuthNavbar;
