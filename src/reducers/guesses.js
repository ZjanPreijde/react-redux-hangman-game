import {SET_GUESSES} from '../actions/set_guesses'

export default (state = [], { type, payload } = {}) => {
	switch (type) {
	  case SET_GUESSES:
			return payload

	  default:
	    return state
	}
}
