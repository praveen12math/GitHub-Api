import React, { useState } from "react";
import "./App.css";

import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotPage from "./pages/PageNotFound";
import { UserContext } from "./context/UserContext";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import firebaseConfig from "./Config/FirebaseConfig";
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Signin" component={Signin} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Header" component={Header} />
          <Route path="/Footer" component={Footer} />
          <Route component={PageNotPage} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
