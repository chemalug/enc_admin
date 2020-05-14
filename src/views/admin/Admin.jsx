import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";

// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar";

import Sidebar from "components/Sidebars/Sidebar";

import routes from "utils/routes.js";

const AdminDashboard = (props) => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Admin";
  };

  if (!props.auth.isAuthenticated) {
    return <Redirect to="/auth/login" />;
  }
  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("assets/images/brand/enc_single_text.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content">
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>{getRoutes(routes)}</Switch>
        <Container fluid></Container>
      </div>
      {/*<Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("assets/images/brand/enc_single_text.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content bg-dark" ref="mainContent">
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>{getRoutes(routes)}</Switch>
        <Container fluid></Container>
      </div>*/}
    </>
  );
};

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, {})(AdminDashboard);
