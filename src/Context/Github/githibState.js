import React, {useReducer} from "react";
import axios from 'axios';
import {GithubContext} from "./githubContext";
import {githubReducer} from "./githubReducer";
import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../type";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const creds = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`

export const GithubState = ({children}) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: [],
  };
  const url = 'https://api.github.com'

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const search = async (value) => {
    setLoading()

    const response = await axios.get(
      `${url}/search/users?q=${value}&${creds}`
    )

    console.log('search', response.data.items)

    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    })
  };

  const getUser = async (name) => {
    setLoading()

    const response = await axios.get(
      `${url}/users/${name}?${creds}`
    )

    console.log('getUser', response.data)

    dispatch({
      type: GET_USER,
      payload: response.data,
    })
  }

  const getRepos = async (name) => {
    setLoading()

    const response = await axios.get(
      `${url}/users/${name}/repos?per_page=5&${creds}`
    )
    console.log('getRepos', response.data)

    dispatch({
      type: GET_REPOS,
      payload: response.data,
    })
  }

  const clearUsers = () => dispatch({type: CLEAR_USERS})

  const setLoading = () => dispatch({type: SET_LOADING})

  const {user, users, repos, loading} = state

  return (
    <GithubContext.Provider value={{
      setLoading, search, getUser, getRepos, clearUsers, user, users, repos, loading
    }}>
      {children}
    </GithubContext.Provider>
  );
};
