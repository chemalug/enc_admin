import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Dashboard from "components/dashboard/admin/Dashboard";

class Admin extends Component {
  render() {
    const { user } = this.props.auth;
    if (user.rol === "admin") {
      return (
        <div>
          <Dashboard />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Nada</h1>
        </div>
      );
    }
  }
}

Admin.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(Admin);
