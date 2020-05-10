import React, { Component } from "react";
import { HashRouter, Route, Switch, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import configurationStore from "Store";
import setAuthToken from "utils/setAuthToken";
import { setCurrentUser, logoutUser } from "actions/auth.action";

import Landing from "components/layout/Landing";
import AuthLayout from "components/auth/Auth";
import AdminLayout from "components/admin/Admin";

import PrivateRoute from "components/private-route/PrivateRoute";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  configurationStore.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    configurationStore.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/auth/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={configurationStore}>
        <HashRouter>
          <Switch>
            <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
            <Route
              path="/admin"
              render={(props) => <AdminLayout {...props} />}
            />
            <Route exac path="/" render={(props) => <Landing {...props} />} />
            {/*            <Switch>
              <PrivateRoute
                exac
                path="/admin"
                render={(props) => <AdminLayout {...props} />}
              />
</Switch>*/}
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}
export default App;
