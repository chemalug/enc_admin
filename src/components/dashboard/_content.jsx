import React, { Component } from "react";

class Dcontent extends Component {
  render() {
    return (
      <div className="page-wrapper bg-dark">
        <div className="container-fluid">
          <div className="row page-titles">
            <div className="col-md-5 col-8 align-self-center">
              <h3 className="text-themecolor m-b-0 m-t-0">Dashboard</h3>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/#">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
            <div className="col-md-7 col-4 align-self-center">
              <div className="d-flex m-t-10 justify-content-end">
                <div className="d-flex m-r-20 m-l-10 hidden-md-down">
                  <div className="chart-text m-r-10">
                    <h6 className="m-b-0">
                      <small>THIS MONTH</small>
                    </h6>
                    <h4 className="m-t-0 text-info">$58,356</h4>
                  </div>
                  <div className="spark-chart">
                    <div id="monthchart"></div>
                  </div>
                </div>
                <div className="d-flex m-r-20 m-l-10 hidden-md-down">
                  <div className="chart-text m-r-10">
                    <h6 className="m-b-0">
                      <small>LAST MONTH</small>
                    </h6>
                    <h4 className="m-t-0 text-primary">$48,356</h4>
                  </div>
                  <div className="spark-chart">
                    <div id="lastmonthchart"></div>
                  </div>
                </div>
                <div className="">
                  <button className="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10">
                    <i className="ti-settings text-white"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  This is some text within a card block.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dcontent;
