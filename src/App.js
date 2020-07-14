import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import {Navbar} from './Components/Navbar';
import {About} from './Components/Pages/About.js';
import {Profile} from './Components/Pages/Profile.js';
import {Home} from './Components/Pages/Home.js';
import {Alert} from "./Components/Alert";
import {AlertState} from "./Context/Alert/alertState";
import './App.scss';
import {GithubState} from "./Context/Github/githibState";

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className="container pt-4">
            <Alert alert={{text: 'Test alert'}}/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/profile/:name" component={Profile}/>
              <Redirect to="/"/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
