import React, { Fragment } from "react";
import Header from "../common/Header";

export default function Login() {
  return (
    <Fragment>
      <Header />
      <div className="container mt-5">
        <div className="col-sm-6 offset-3 card card-body shadow">
          <form>
            <h3 className="text-center">Login</h3>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter Phone Number" className="form-control" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter Password" className="form-control" />
            </div>
            <div className="form-group">
              <button className="btn btn-success btn-block" type="submit">
                Login
              </button>
            </div>

            <p className="text-center">
              Forgot Password? <a href="#">Click here</a>
            </p>
            <p className="text-center">Copyright (c) Tech Bridge MATC Cohort 20'G1</p>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
