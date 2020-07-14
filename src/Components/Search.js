import React, {useContext, useState} from 'react';
import {AlertContext} from "../Context/Alert/alertContext";
import {GithubContext} from "../Context/Github/githubContext";
import './Search.scss';

export const Search = () => {
  const [value, setValue] = useState('');
  const {show, hide} = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = (event) => {
    if (event.key !== 'Enter') {
      return
    }

    if (value.trim()) {
      hide();
      github.search(value.trim())
    } else {
      github.clearUsers()
      show('Type valid user data!');
    }
  }

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Type username..."
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
      <button type="button" className="close" aria-label="Close" onClick={() => setValue('')}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
