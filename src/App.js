import React, { Component } from 'react';
import logo from './HangMan.png';

import HangMan from './hangman/HangMan.js'

import './App.css';

const guesses = ["a", "b"]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hangman</h1>
        </header>
          <HangMan guesses={guesses}/>
          <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
