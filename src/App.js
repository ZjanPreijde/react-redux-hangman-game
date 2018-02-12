import React, { Component } from 'react';
// import { connect } from 'react-redux'
// Logo
import logo from './images/HangMan.png';
// Component
import HangMan from './hangman/HangMan.js'
// Styling
import './App.css';

const word = "supercomplexpassword"
const guesses = []

class App extends Component {

  // setGuesses = (newGuesses) => {
  //   console.log('App - setGuesses: Button Guess apparently clicked')
  //   console.log("App - setGuesses: New Guesses", newGuesses)
  //   console.log("App - setGuesses: Now what???")
  //   // this.setState({ guesses: newGuesses })
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hangman</h1>
        </header>
        <HangMan word={ word } guesses={ guesses }/>
      </div>
    );
  }
}

export default App;
