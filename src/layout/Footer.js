import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark">
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-6">
          <h1 style={{ textAlign: "center", color: "white" }}>
            Footer Content <br />
          </h1>
          <div style={{ color: "white", textAlign: "center" }}>
            GitHub search App with Firebase
          </div>
        </div>
        <div className="col-2" />
        <div className="col">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a style={{ color: "white" }} className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a style={{ color: "white" }} className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a style={{ color: "white" }} className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Footer;
