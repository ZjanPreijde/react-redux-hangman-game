export const SET_GUESSES = 'SET_GUESSES'

export default (setGuesses) => {
  return {
    type: SET_GUESSES,
    payload: setGuesses
  }
}
