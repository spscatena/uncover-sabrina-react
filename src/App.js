import React, { Component } from 'react'
import Grid from './components/Grid';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Modal from './components/Modal';


export default class App extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <Modal />
            <Grid />
          </div>
        )} />
      </div>
    )
  }
}
