import React from "react";

export default function LoanHistory() {
  return (
    <div className="container">
      <div className="text-center">
        <button className="btn btn-success">Request New Loan</button>
        <button className="btn btn-secondary ml-2">Withdraw Funds</button>
      </div>
      <br />
      Loan History:
      <div className="card card-body shadow mt-3">
        <div className="loan-history-card">
          <div>
            Request Date: Aug 2, 2020 <br />
            Amount: ₦15,000
          </div>
          <div>
            Status: <span className="badge badge-warning">Running</span> <br />
            Interest: 10%
          </div>
        </div>
      </div>
      <div className="card card-body shadow mt-3">
        <div className="loan-history-card">
          <div>
            Request Date: Jul 1, 2020 <br />
            Amount: ₦10,000
          </div>
          <div>
            Status: <span className="badge badge-success">Paid</span> <br />
            Interest: 10%
          </div>
        </div>
      </div>
      <div className="card card-body shadow mt-3">
        <div className="loan-history-card">
          <div>
            Request Date: Jan 10, 2020 <br />
            Amount: ₦35,000
          </div>
          <div>
            Status: <span className="badge badge-success">Paid</span> <br />
            Interest: 10%
          </div>
        </div>
      </div>
    </div>
  );
}
