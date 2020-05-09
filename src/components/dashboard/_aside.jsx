import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Daside extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        {/*-- ============================================================== -->*/}
        {/*-- Left Sidebar - style you can find in sidebar.scss  -->*/}
        {/*-- ============================================================== -->*/}
        <aside className="left-sidebar bg-dark">
          {/*-- Sidebar scroll-->*/}
          <div className="scroll-sidebar">
            {/*-- User profile -->*/}
            <div className="user-profile">
              {/*-- User profile image -->*/}
              <div className="profile-img">
                {" "}
                <img
                  src={require("assets/images/brand/logo.png")}
                  alt="user"
                />{" "}
              </div>
              {/*-- User profile text-->*/}
              <div className="profile-text">
                {" "}
                <Link to="/dashboard" className="" role="button">
                  {user.name}
                </Link>
              </div>
            </div>
            {/*-- End User profile text-->*/}
            {/*-- Sidebar navigation-->*/}
            <nav className="sidebar-nav bg-dark">
              <ul id="sidebarnav">
                <li className="nav-small-cap">PERSONAL</li>
                <li>
                  {" "}
                  <a
                    className="has-arrow waves-effect waves-dark"
                    href="/#"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-gauge"></i>
                    <span className="hide-menu">Dashboard </span>
                  </a>
                  <ul aria-expanded="false" className="collapse">
                    <li>
                      <a href="index.html">Dashboard 1</a>
                    </li>
                    <li>
                      <a href="index2.html">Dashboard 2</a>
                    </li>
                    <li>
                      <a href="index3.html">Dashboard 3</a>
                    </li>
                    <li>
                      <a href="index4.html">Dashboard 4</a>
                    </li>
                    <li>
                      <a href="index5.html">Dashboard 5</a>
                    </li>
                    <li>
                      <a href="index6.html">Dashboard 6</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            {/*-- End Sidebar navigation -->*/}
          </div>
          {/*-- End Sidebar scroll-->*/}
        </aside>
        {/*-- ============================================================== -->*/}
        {/*-- End Left Sidebar - style you can find in sidebar.scss  -->*/}
        {/*-- ============================================================== -->*/}
      </div>
    );
  }
}

export default Daside;
