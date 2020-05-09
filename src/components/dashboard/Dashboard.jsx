import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser } from "actions/auth.action";
import Dheader from "./_header";
import Daside from "./_aside";
import Dcontent from "./_content";

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    //    const { user } = this.props.auth;

    return (
      <div className="main-wrapper">
        <Dheader user={this.props.auth.user} />
        <Daside user={this.props.auth.user} />
        <Dcontent />
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
