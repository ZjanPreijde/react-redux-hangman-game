import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
// import RsvpItem from './RsvpItem'

class HangMan extends PureComponent {
	static propTypes = {
		guesses: PropTypes.array.isRequired
	}

	render() {
		return (
			<div className="hangman" style={{width: 500, float: 'left'}}>
				<header>
					<h1>Play Hangman</h1>
				</header>

				<main>
          <div>
          Show correct guesses - underscores
          </div>
          <div>
          Get input from user
          </div>
          <div>
          Show hanging man
          </div>
				</main>
			</div>
		)
	}
}

export default HangMan
