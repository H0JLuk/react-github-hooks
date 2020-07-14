import React, {useContext, useEffect} from 'react';
import {GithubContext} from "../../Context/Github/githubContext";
import {Link} from "react-router-dom";
import {Repos} from "./Repos";

export const Profile = ({match}) => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
  const url_name = match.params.name;

  useEffect(() => {
    getUser(url_name)
    getRepos(url_name)
    // eslint-disable-next-line
  }, [])


  if (loading) {
    return <p className="text-center">Loading...</p>
  }

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    following, public_repos, public_gists
  } = user;

  return (
    <>
      <Link to={'/'} className="btn btn-info mb-3">On main</Link>

      <div className="card mb4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url} alt={name} style={{width: 150}} />
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {bio &&
              <>
                <h3>Bio</h3>
                <p>{bio}</p>
              </>}
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
              >Open profile</a>
              <ul>
                {login &&
                <li>
                  <strong>Username: </strong> {login}
                </li>}
                {company &&
                <li>
                  <strong>Company: </strong> {company}
                </li>}
                {blog &&
                <li>
                  <strong>Website: </strong> {blog}
                </li>}
              </ul>
              <div className="badge badge-primary mx-1">Followers: {followers}</div>
              <div className="badge badge-success mx-1">Following: {following}</div>
              <div className="badge badge-info mx-1">Repositories: {public_repos}</div>
              <div className="badge badge-dark">Logs: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </>
  );
};
