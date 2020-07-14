import React from "react";

export const Repos = ({repos}) => {
  // console.log('repos in component', repos)
  return <>
    {repos.map(repo => (
      <div className="card my-2" key={repo.id}>
        <div className="card-body">
          <h5>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" >{repo.name}</a>
          </h5>
        </div>
      </div>
    ))}
  </>
  }

