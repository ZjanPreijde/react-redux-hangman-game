import {SET_GUESSES} from '../actions/set_guesses'

const guesses = []

// {
// type: 'SET_GUESSES',
// payload: ["a", "b"]
// }

export default function (state = guesses, { type, payload } = {}) {
	switch (type) {
	  case SET_GUESSES:
			return payload

	  default:
	    return state
	}
}
