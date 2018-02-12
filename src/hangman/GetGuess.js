import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

export default class GetGuess extends PureComponent {
  static propTypes = {
		guesses: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
	}

  handleClick(event) {
    event.preventDefault()
    let letter = document.getElementById("uguess").value
    console.log('GetGuess : Button Guess clicked')
    console.log("GetGuess : User guessed :", letter)
    if (/^([a-z])$/.test(letter)) {
      console.log("GetGuess : Calling parent ...", "onClick")
      this.props.onClick(letter)
    } else {
      console.log("GetGuess : Invalid input")
    }
  }

  render () {
    return (
      <form className="get-guess">
        <label
          htmlFor="uguess"
        >
        Your guess :
        </label>
        <input
          type="text"
          id="uguess"
          name="guess"
          size="1"
          maxLength="1"
          pattern="[a-z]"
          required
        />
        <button
          className="guess"
          onClick={this.handleClick.bind(this)}
        >
        Guess
        </button>
      </form>
    )
  }
}
