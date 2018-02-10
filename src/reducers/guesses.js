import {SET_GUESSES} from '../actions/set_guesses'

const guesses = []

export default function (state = guesses, { type, payload } = {}) {
	switch (type) {
	  case SET_GUESSES:
			return payload

	  default:
	    return state
	}
}
