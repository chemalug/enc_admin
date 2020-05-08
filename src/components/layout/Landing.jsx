import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div
      className="login-register"
      style={{
        backgroundImage: `url(${require("../../assets/images/background/login-register.jpg")})`,
      }}
    >
      <div className="login-box card">
        <div className="card-body">
          <form
            className="form-horizontal form-material"
            id="loginform"
            action="index.html"
          >
            <div className="form-group">
              <div className="col-xs-12 text-center">
                <div className="user-thumb text-center">
                  {" "}
                  <img
                    alt="thumbnail"
                    className="img-circle"
                    width="100"
                    src={require("../../assets/images/brand/logow-alt.png")}
                  />
                  <h3>Encodely | Dashboard</h3>
                </div>
              </div>
            </div>

            <div className="form-group text-center">
              <div className="col-xs-12">
                <Link
                  to="/auth/register"
                  className="btn btn-warning btn-lg btn-block text-uppercase waves-effect waves-light"
                >
                  Register
                </Link>
              </div>
            </div>
            <div className="form-group text-center">
              <div className="col-xs-12">
                <Link
                  to="/auth/login"
                  className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
