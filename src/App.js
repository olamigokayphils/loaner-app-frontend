import React, { Fragment } from "react";
import "./style.css";
import Header from "./layout/Header";
import User from "./layout/User";
import LoanHistory from "./layout/LoanHistory";

function App() {
  return (
    <Fragment>
      <Header />
      <User />
      <LoanHistory />
    </Fragment>
  );
}

export default App;
