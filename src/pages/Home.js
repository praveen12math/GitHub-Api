import React, { useState, useContext } from "react";

import UserCard from "../component/UserCard";
import Repos from "../component/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Axios from "axios";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("praveen12math");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log(user);
    } catch (error) {
      document.getElementById("errorMsg").innerHTML = error.Message;
    }
  };

  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-12">
          <div class="input-group mb-3">
            <form style={{ width: "100%" }}>
              <label style={{ fontFamily: "times new roman" }}>
                Provide a github username
              </label>

              <div className="input-group-append">
                <input
                  type="text"
                  className="form-control"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{ width: "60%" }}
                />
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={fetchDetails}
                >
                  Fetch User &nbsp;
                  <i style={{ color: "black" }} className="fab fa-github"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      {user ? <UserCard user={user} /> : null}

      {user ? <Repos repos_url={user.repos_url} /> : null}

      <div style={{ color: "red" }} id="errorMsg" />
    </div>
  );
};

export default Home;
