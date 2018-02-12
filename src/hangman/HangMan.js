import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// Action
import setGuesses from '../actions/set_guesses'
// Helpers
import { images, wrongGuessCount, gameOver, gameLost, showGuess } from './Helpers.js'
// Components
import ShowGuesses from './ShowGuesses.js'
import GetGuess from './GetGuess'
// Styling
import './HangMan.css'

// const word = 'hangman'
// const guesses = ["a", "b", "c", "d", "e", "f", "g"]
// const guesses = ["z", "y", "x", "w", "v", "h", "a", "n", "g", "q"]

class HangMan extends PureComponent {
  // this.props.setState.guesses
  constructor (props) {
    super(props)
    // this.state = { this.props.guesses }
  }

  addGuess = (letter) => {
    console.log('HangMan - addGuess: Button Guess apparently clicked')
    console.log("Hangman - addGuess: User guessed :", letter)
    const {guesses} = this.props
    const newGuesses = guesses
    newGuesses.push(letter)
    // console.log("Hangman - addGuess: Calling parent ...", "setGuesses")
    // this.props.setGuesses({ guesses }, { newGuesses })
    // this.props.setState( newGuesses )
  }

	render() {
    // const { word, guesses, setGuesses } = this.props
    const { word, guesses } = this.props
    const wrongCount = wrongGuessCount(word, guesses)
    const image = images[ Math.min(wrongCount,6) ]

    let inputBlock = null
    let outputBlock = null
    if (gameOver(word, guesses)) {
      if (!gameLost(word, guesses)) {
        outputBlock = <p className="winner">Game Over. You won!!</p>
      }
      else {
        outputBlock = <p className="loser">Game Over. You lost!!</p>
      }
    } else {
      inputBlock = <GetGuess onClick={this.addGuess} guesses={guesses} />
    }

		return (
			<div className="hangman" style={{backgroundImage: `url(${image})`}}>

        <div className="hang-block">
          <div className="hang-item">
            {inputBlock}
            {outputBlock}
          </div>
        </div>

        <div className="hang-block">
          <div className="hang-item">
            { showGuess(word, guesses) }
          </div>
          <div className="hang-item">
            <ShowGuesses guesses={guesses} />
          </div>
          <div className="hang-item">
            Number of wrong guesses : { wrongCount }
          </div>

				</div>
			</div>
		)
	}
}

const mapStateToProps = ({guesses}) => ({guesses})

export default connect(mapStateToProps)(HangMan)
