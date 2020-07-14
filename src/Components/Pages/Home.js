import React, {useContext} from 'react';
import {Search} from "../Search";
import {Card} from "./Card";
import {GithubContext} from "../../Context/Github/githubContext";

export const Home = () => {
  const {loading, users} = useContext(GithubContext)


  return (
    <>
      <Search/>

      <div className="row">
        {loading
          ? <p className="text-center">Loading...</p>
          : users.map((user, index) =>
            <div className="col-sm-4 mb-4" key={user.id}>
              <Card user={user}/>
            </div>
          )
        }
      </div>
    </>
  );
};
