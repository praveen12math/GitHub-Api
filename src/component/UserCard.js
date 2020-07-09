import React from "react";

const UserCard = ({ user }) => {
  return (
    <div
      className="row"
      style={{ backgroundColor: "#DAE0E2", borderRadius: "1rem" }}
    >
      <div className="col-md-4 col-sm-12">
        <br />
        <img
          src={user.avatar_url}
          className="rounded"
          style={{ width: "100%" }}
          alt=""
        />
        <br />
        <br />
      </div>
      <div
        className="container col-md-6 col-sm-12"
        style={{ fontFamily: "times new roman" }}
      >
        <br />
        <br />
        <div>
          <h1> {user.name} </h1>
        </div>

        <div style={{ fontSize: "20px" }}>
          <div>{user.email}</div>
          <div>Location : {user.location}</div>
          <div>Repositories : {user.public_repos}</div>
          <div>Followers : {user.followers}</div>
          <div>Following : {user.following}</div>
          <div>Started on : {user.created_at}</div>
          <div>Hireable: {user.hireable ? "Yes" : "No"}</div>
          <a
            className="float-right"
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Goto Profile
          </a>
        </div>

        <br />
        <br />
      </div>
    </div>
  );
};

export default UserCard;
