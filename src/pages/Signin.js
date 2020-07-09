import React, { useState, useContext } from "react";

import firebase from "firebase/app";
import { UserContext } from "../context/UserContext";
import { Redirect } from "react-router-dom";

const Signin = () => {
  const context = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid });
      })
      .catch((error) => {
        console.log(error);
        document.getElementById("errorMsg").innerHTML = error.message;
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
  };

  if (context.user?.uid) {
    return <Redirect to="/" />;
  } else {
    return (
      <container>
        <br />
        <h1 className="text-center">Sign in</h1>
        <br />
        <br />
        <div className="row">
          <div className="col-md-3" />
          <form
            style={{ width: "100%" }}
            className="col-md-6"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div style={{ color: "red" }} id="errorMsg" />
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </div>
        <br />
      </container>
    );
  }
};

export default Signin;
