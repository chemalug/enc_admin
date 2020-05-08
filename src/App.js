import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";

import configurationStore from "./Store";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/auth.action";

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import { Provider } from "react-redux";

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

function App() {
  return (
    <Provider store={configurationStore}>
      <BrowserRouter>
        <Route path="/" component={Landing} />
        <Route exact path="/auth/register" component={Register} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
