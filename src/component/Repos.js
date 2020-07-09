import React, { useState, useEffect } from "react";
import Axios from "axios";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <>
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Repositories</h1>
      <br />
      <div className="row">
        <br />

        {repos.map((repo) => (
          <div className=" col-lg-4 col-sm-12 mb-3">
            <div className="card border-dark h-100 ">
              <div className="card-body text-dark">
                <div className="card-header">
                  <h6>Project Name - {repo.name}</h6>
                </div>
                <div className="card-title">
                  <h6>Project Language - {repo.language}</h6>
                </div>
                <div className="card-text">
                  Last Updated At - {repo.updated_at}
                </div>
                <div className="card-text">{repo.description}</div>
                <div className="card-footer border-dark text-center">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    Goto Repositories
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Repos;
