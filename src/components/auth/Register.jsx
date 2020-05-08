import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";
import { registerUser } from "actions/auth.action";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
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
                <h3 className="box-title m-b-20">Sign Up</h3>
                <div className="form-group">
                  <div className="col-xs-12">
                    <input
                      onChange={this.onChange}
                      value={this.state.name}
                      errors={errors.name}
                      id="name"
                      className={
                        "form-control" +
                        classnames("", {
                          invalid: errors.name,
                        })
                      }
                      type="text"
                      placeholder="Name"
                    />
                    <span className="red-text">{errors.name}</span>
                  </div>
                </div>
                <div className="form-group ">
                  <div className="col-xs-12">
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      errors={errors.email}
                      id="email"
                      className={
                        "form-control" +
                        classnames("", {
                          invalid: errors.name,
                        })
                      }
                      type="email"
                      placeholder="Email"
                    />
                    <span className="red-text">{errors.email}</span>
                  </div>
                </div>
                <div className="form-group ">
                  <div className="col-xs-12">
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      errors={errors.password}
                      id="password"
                      className={
                        "form-control" +
                        classnames("", {
                          invalid: errors.name,
                        })
                      }
                      type="password"
                      placeholder="Password"
                    />
                    <span className="red-text">{errors.password}</span>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-12">
                    <input
                      onChange={this.onChange}
                      value={this.state.password2}
                      errors={errors.password2}
                      id="password2"
                      className={
                        "form-control" +
                        classnames("", {
                          invalid: errors.name,
                        })
                      }
                      type="password"
                      placeholder="Confirm password"
                    />
                    <span className="red-text">{errors.password2}</span>
                  </div>
                </div>
                <div className="form-group">
                  <div className="">
                    <div className="checkbox checkbox-success p-t-0">
                      <input id="checkbox-signup" type="checkbox" />
                      <label htmlFor="checkbox-signup">
                        {" "}
                        I agree to all <a href="/">Terms</a>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group text-center m-t-20">
                  <div className="col-xs-12">
                    <button
                      className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
                <div className="form-group m-b-0">
                  <div className="col-sm-12 text-center">
                    Already have an account?{" "}
                    <a href="pages-login.html" className="text-info m-l-5">
                      <b>Sign In</b>
                    </a>
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
