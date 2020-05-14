import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Users from "views/admin/Schools/index.school";
class Dcontent extends Component {
  render() {
    let year = new Date();
    return (
      <div className="page-wrapper bg-dark">
        <div className="container-fluid">
          <div className="row page-titles" id="messages"></div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <Switch>
                    <Route
                      exact
                      path="/admin/usuarios"
                      render={(props) => <Users />}
                    />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            © {year.getFullYear()} Encodely | Educator
          </footer>
        </div>
      </div>
    );
  }
}

export default Dcontent;
