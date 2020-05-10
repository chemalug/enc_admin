import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loginUser } from "actions/auth.action";
import {
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

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

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-dark shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign in with credentials</small>
              </div>
              <Form onSubmit={this.onSubmit} role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>

                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      errors={errors.email}
                      id="email"
                      className="form-control"
                      type="email"
                      placeholder="Email"
                    />
                    <span className="red-text">
                      {errors.email}
                      {errors.emailnotfound}
                    </span>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      errors={errors.password}
                      id="password"
                      className="form-control"
                      type="password"
                      placeholder="Password"
                    />
                    <span className="red-text">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <button
                    className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                    type="submit"
                  >
                    Ingresar
                  </button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <Link className="text-black" to="/auth/forgotpassword">
                <small className="font-weight-bold">Forgot password?</small>
              </Link>
            </Col>
            <Col className="text-right" xs="6">
              <Link className="text-dark" to="/auth/register">
                <small>Create new account</small>
              </Link>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
