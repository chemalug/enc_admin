import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loginUser } from "actions/auth.action";

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
    console.log(this.props);

    if (this.props.auth.isAuthenticated) {
      console.log("asasa");
      this.props.history.push("/dashboard");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("asas");
    console.log(nextProps);

    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
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
      <div>
        <div className="bg-dark login-register">
          <div className="login-box card">
            <div className="card-body">
              <form
                noValidate
                onSubmit={this.onSubmit}
                className="form-horizontal form-material"
                id="loginform"
              >
                <Link to="https://www.encodely.dev" className="text-center db">
                  <img
                    src={require("assets/images/brand/logow-alt.png")}
                    alt="Logo"
                  />
                </Link>
                <h3 className="box-title m-b-20">Encodely | Educator</h3>
                <div className="form-group ">
                  <div className="col-xs-12">
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
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-12">
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
                  </div>
                </div>
                <div className="form-group">
                  <div className="d-flex no-block align-items-center">
                    <div className="ml-auto">
                      <Link
                        to="/auth/recoverpwd"
                        id="to-recover"
                        className="text-muted"
                      >
                        <i className="fa fa-lock m-r-5"></i> Recover password
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="form-group text-center m-t-20">
                  <div className="col-xs-12">
                    <button
                      className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                      type="submit"
                    >
                      Ingresar
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                    <div className="social"></div>
                  </div>
                </div>
                <div className="form-group m-b-0">
                  <div className="col-sm-12 text-center">
                    No tienes cuenta?{" "}
                    <Link to="/auth/register" className="text-info m-l-5">
                      <b>Registrarme</b>
                    </Link>
                  </div>
                </div>
              </form>
              <form
                className="form-horizontal"
                id="recoverform"
                action="index.html"
              >
                <div className="form-group ">
                  <div className="col-xs-12">
                    <h3>Recover Password</h3>
                    <p className="text-muted">
                      Enter your Email and instructions will be sent to you!{" "}
                    </p>
                  </div>
                </div>
                <div className="form-group ">
                  <div className="col-xs-12">
                    <input
                      className="form-control"
                      type="text"
                      required=""
                      placeholder="Email"
                    />{" "}
                  </div>
                </div>
                <div className="form-group text-center m-t-20">
                  <div className="col-xs-12">
                    <button
                      className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light"
                      type="submit"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
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
