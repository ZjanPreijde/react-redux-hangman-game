import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class ShowGuesses extends PureComponent {
  static propTypes = {
		guesses: PropTypes.array.isRequired,
	}
  render () {
    const joinedGuesses = this.props.guesses.join(', ')
    return (
      <p>
        Guesses : {joinedGuesses}
      </p>
    )
  }
}

const mapStateToProps = ({guesses}) => ({guesses})

export default connect(mapStateToProps)(ShowGuesses)
