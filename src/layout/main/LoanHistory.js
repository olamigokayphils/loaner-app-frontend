import React, { Fragment, useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
const Lodar = require("../../assets/126.gif");

export default function LoanHistory() {
  const [userLoanHistory, setLoanHistory] = useState([]);
  const [displaySpinner, setDisplaySpinner] = useState(true);
  const [requestLoanModalOpen, setRequestLoanModalOpen] = useState(false);
  const [withdrawalModalOpen, setWithdrawalModalOpen] = useState(false);

  // useEffect(() => {
  //   if (dashboard) {
  //     setDisplaySpinner(false);
  //     console.log("Yikes", dashboard.loans);
  //     setLoanHistory(dashboard.loans);
  //   }
  // }, [dashboard]);

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const dashboard = useSelector((state) => state.dashboard.userDashboard);
  const prevDashBoard = usePrevious(dashboard);

  useEffect(() => {
    if (prevDashBoard) {
      if (prevDashBoard !== dashboard) setDisplaySpinner(false);
      console.log("Yikes", dashboard.loans);
      setLoanHistory(dashboard.loans);
    }
  });

  const closeRequestLoanModal = () => {
    setRequestLoanModalOpen(false);
  };

  const closeWithdrawalModal = () => {
    setWithdrawalModalOpen(false);
  };

  const renderLoanHistory = () => {
    return (
      <div>
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
  };

  const renderNoLoanHistory = () => {
    return (
      <div>
        <p>
          <h5 className="font-weight-bold">You currently do not have any Loan History</h5>
        </p>
      </div>
    );
  };
  return (
    <Fragment>
      <Modal show={requestLoanModalOpen} onHide={() => closeRequestLoanModal()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Request New Loan</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4 style={{ color: "gray" }} className="text-center">
              Maximum Loan Amount <b>₦50,000</b>
            </h4>
            <br />
            <form>
              <div className="form-group">
                <label>Loan Amount</label>
                <input placeholder="Enter request Amount" className="form-control" type="number" />
              </div>
              <div className="form-group">
                <button className="btn btn-success btn-block">Submit</button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={withdrawalModalOpen} onHide={() => closeWithdrawalModal()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Withdraw Funds</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form>
              <div className="form-group">
                <label>Amount</label>
                <input placeholder="Enter Amount" className="form-control" type="number" />
              </div>
              <div className="form-group">
                <label>VetroPay UID</label>
                <input placeholder="Enter VetroPay UID" className="form-control" type="number" />
              </div>
              <div className="form-group">
                <button className="btn btn-success btn-block">Withdraw</button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      <div className="container">
        <div className="text-center">
          <button onClick={() => setRequestLoanModalOpen(true)} className="btn btn-success">
            Request New Loan
          </button>
          <button onClick={() => setWithdrawalModalOpen(true)} className="btn btn-secondary ml-2">
            Withdraw Funds
          </button>
        </div>
        <br />
        Loan History:
        {displaySpinner && (
          <div className="text-center">
            <img src={Lodar} />
          </div>
        )}
        {!displaySpinner && <div className="text-center mt-5">{userLoanHistory.length > 0 ? renderLoanHistory() : renderNoLoanHistory()}</div>}
      </div>
    </Fragment>
  );
}
