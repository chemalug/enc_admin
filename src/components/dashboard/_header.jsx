import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser } from "actions/auth.action";

class Dheader extends React.Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props;
    return (
      <div>
        <header className="topbar">
          <nav className="navbar top-navbar bg-dark navbar-expand-md navbar-light">
            {/*{/*<!-- ============================================================== -->*/}
            {/*<!-- Logo -->*/}
            {/*<!-- ============================================================== -->*/}
            <div className="navbar-header">
              <a className="navbar-brand" href="index.html">
                {/*<!-- Logo icon -->*/}
                <b>
                  {/*<!--You can put here icon as well // <i className="wi wi-sunset"></i> //-->*/}
                  {/*<!-- Dark Logo icon -->*/}
                  <img
                    src={require("assets/images/brand/enc_single_logo.png")}
                    alt="homepage"
                    className="dark-logo"
                    height="24"
                  />
                  {/*<!-- Light Logo icon -->*/}
                  <img
                    src={require("assets/images/brand/enc_single_logo.png")}
                    alt="homepage"
                    className="light-logo"
                    height="24"
                  />
                </b>
                {/*<!--End Logo icon -->*/}
                {/*<!-- Logo text -->*/}
                <span>
                  {/*<!-- dark Logo text -->*/}
                  <img
                    src={require("assets/images/brand/enc_single_text.png")}
                    alt="homepage"
                    className="dark-logo"
                    height="24"
                  />
                  {/*<!-- Light Logo text -->*/}
                  <img
                    src={require("assets/images/brand/enc_single_text.png")}
                    className="light-logo"
                    alt="homepage"
                    height="24"
                  />
                </span>{" "}
              </a>
            </div>
            {/*<!-- ============================================================== -->*/}
            {/*<!-- End Logo -->*/}
            {/*<!-- ============================================================== -->*/}
            <div className="navbar-collapse">
              {/*<!-- ============================================================== -->*/}
              {/*<!-- toggle and nav items -->*/}
              {/*<!-- ============================================================== -->*/}
              <ul className="navbar-nav mr-auto mt-md-0">
                {/*<!-- This is  -->*/}
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark"
                    href="/#"
                    onClick={(ev) => {
                      ev.preventDefault();

                      return false;
                    }}
                  >
                    <i className="mdi mdi-menu"></i>
                  </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark"
                    href="/#"
                    onClick={(ev) => {
                      ev.preventDefault();

                      return false;
                    }}
                  >
                    <i className="ti-menu"></i>
                  </a>{" "}
                </li>
                {/*<!-- ============================================================== -->*/}
                {/*<!-- Search -->*/}
                {/*<!-- ============================================================== -->*/}
                <li className="nav-item hidden-sm-down search-box">
                  <a
                    className="nav-link hidden-sm-down text-muted waves-effect waves-dark"
                    href="/#"
                    onClick={(ev) => {
                      ev.preventDefault();
                      return false;
                    }}
                  >
                    <i className="ti-search"></i>
                  </a>
                  <form className="app-search">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search & enter"
                    />{" "}
                    <a
                      href="!#"
                      className="srh-btn"
                      onClick={(ev) => {
                        ev.preventDefault();
                        return false;
                      }}
                    >
                      <i className="ti-close"></i>
                    </a>{" "}
                  </form>
                </li>
              </ul>
              {/*<!-- ============================================================== -->*/}
              {/*<!-- User profile and search -->*/}
              {/*<!-- ============================================================== -->*/}
              <ul className="navbar-nav my-lg-0">
                {/*<!-- ============================================================== -->*/}
                {/*<!-- Profile -->*/}
                {/*<!-- ============================================================== -->*/}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-muted waves-effect waves-dark"
                    href="/#"
                    onClick={(ev) => {
                      ev.preventDefault();
                      return false;
                    }}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src={require("assets/images/brand/logo.png")}
                      alt="user"
                      className="profile-pic"
                    />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right scale-up">
                    <ul className="dropdown-user">
                      <li>
                        <div className="dw-user-box">
                          <div className="u-img">
                            <img
                              src={require("assets/images/brand/logo.png")}
                              alt="user"
                            />
                          </div>
                          <div className="u-text">
                            <h4>{user.name}</h4>
                            <p className="text-muted">{user.email}</p>
                            <a
                              href="profile.html"
                              className="btn btn-rounded btn-danger btn-sm"
                            >
                              View Profile
                            </a>
                          </div>
                        </div>
                      </li>

                      <li role="separator" className="divider"></li>
                      <li>
                        <a href="/#" onClick={this.onLogoutClick}>
                          <i className="fa fa-power-off"></i> Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {/*<!-- ============================================================== -->*/}
        {/*<!-- End Topbar header -->*/}
        {/*<!-- ============================================================== -->*/}
      </div>
    );
  }
}

Dheader.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dheader);
