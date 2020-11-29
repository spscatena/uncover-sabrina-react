import React, { Component } from 'react'
import Grid from './components/Grid';
import { Link, Route } from 'react-router-dom';
import './App.css';


export default class App extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <Grid />
          </div>
        )} />
      </div>
    )
  }
}
