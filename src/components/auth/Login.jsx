import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
  Container,
} from "reactstrap";

import AuthNavbar from "components/Navbars/AuthNavbar";

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    props.loginUser({ email: email, password: password });
    console.log(props);
  };

  React.useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/admin");
    }
  });

  return (
    <div>
      <div className="pt-5 pt-lg-5">
        <AuthNavbar />
        <Container>
          <div className="header-body text-center mb-7">
            <Row className="justify-content-center">
              <Col lg="5" md="6">
                <h1 className="text-white">Encodely | Educator</h1>
                <p className="text-lead text-light">Ingreso</p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Row className="justify-content-center">
        <Col lg="5" md="7">
          <Card className="bg-dark shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign in with credentials</small>
              </div>
              <Form onSubmit={onSubmit} role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>

                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
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
              <Link className="text-light" to="/auth/forgotpassword">
                <small className="font-weight-bold">Forgot password?</small>
              </Link>
            </Col>
            <Col className="text-right" xs="6">
              <Link className="text-white" to="/auth/register">
                <small className="font-weight-bold">Create new account</small>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
