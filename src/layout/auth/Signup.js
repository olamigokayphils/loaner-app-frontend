import React, { Fragment } from "react";
import Header from "../common/Header";

export default function Signup() {
  return (
    <Fragment>
      <Header />
      <div className="container mt-5">
        <div className="col-sm-6 offset-3 card card-body shadow">
          <form>
            <h3 className="text-center">Signup</h3>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter Phone Number" className="form-control" />
            </div>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Full Name" className="form-control" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter Password" className="form-control" />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="re-Enter Password" className="form-control" />
            </div>

            <div className="form-group">
              <button className="btn btn-success btn-block" type="submit">
                Next
              </button>
            </div>

            <p className="text-center">
              Already registered? <a href="#">Sign in</a>
            </p>
            <p className="text-center">Copyright (c) Tech Bridge MATC Cohort 20'G1</p>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
