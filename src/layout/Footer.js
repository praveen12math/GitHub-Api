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
          <ul className="navbar-nav text-white">
            <li className="nav-item">Home</li>
            <li className="nav-item">Link</li>
            <li className="nav-item">Link</li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <h5
        style={{
          fontFamily: "times new roman",
          color: "white",
          textAlign: "center",
        }}
      >
        This App developed by Praveen Yadav with Reactjs &nbsp;
        <img
          className="logoimg"
          src="logo192.png"
          alt=""
          style={{ width: "2%" }}
        />
      </h5>
      <br />
    </div>
  );
};

export default Footer;
