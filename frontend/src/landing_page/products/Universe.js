import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/Images/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img  style={{height:"30%" ,width: "50%"}} src="media/Images/streakLogo.png" />
          <p className="text-small text-muted">Algo& strategy Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/Images/sensibullLogo.svg" />
          <p className="text-small text-muted">Optios trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{height:"80%" ,width: "80%"}} src="media/Images/zerodhaFundhouse.png" />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/Images/goldenpiLogo.png" />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{height:"20%" ,width: "40%"}} src="media/Images/dittoLogo.png" />
          <p className="text-small text-muted">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;