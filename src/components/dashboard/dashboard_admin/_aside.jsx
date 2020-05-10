import React from "react";
import { Link } from "react-router-dom";

class Daside extends React.Component {
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
              {/*-- User profile text-->*/}
              <div className="profile-text">
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
                  <Link
                    className="waves-effect waves-dark"
                    to="/admin/usuarios"
                  >
                    <i className="mdi mdi-account-multiple"></i>
                    <span className="hide-menu">Usuarios </span>
                  </Link>
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
