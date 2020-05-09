import React, { Component } from "react";
import { Router, Route, Switch, HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import { createBrowserHistory } from "history";

import configurationStore from "Store";
import setAuthToken from "utils/setAuthToken";
import { setCurrentUser, logoutUser } from "actions/auth.action";

import Landing from "components/layout/Landing";
import Login from "components/auth/Login";
import Register from "components/auth/Register";
import PrivateRoute from "components/private-route/PrivateRoute";
import Dashboard from "components/dashboard/Dashboard";

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

const hist = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Router history={hist}>
        <Provider store={configurationStore}>
          <Route exact path="/" component={Landing} />
          <Route exact path="/auth/register" component={Register} />
          <Route exact path="/auth/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Provider>
      </Router>
    );
  }
}
export default App;
