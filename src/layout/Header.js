import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const context = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <Link to="/" className="navbar-brand" href="#">
        GitHub Api
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-text">
        {context.user?.email ? context.user.email : ""}
      </div>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="collapsibleNavbar"
      >
        <ul className="navbar-nav">
          {context.user ? (
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => {
                  context.setUser(null);
                }}
              >
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/Signin">
                  Signin
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Signup">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
