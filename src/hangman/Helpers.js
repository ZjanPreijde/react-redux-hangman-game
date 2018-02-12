import HangMan0 from '../images/Hangman-0.png'
import HangMan1 from '../images/Hangman-1.png'
import HangMan2 from '../images/Hangman-2.png'
import HangMan3 from '../images/Hangman-3.png'
import HangMan4 from '../images/Hangman-4.png'
import HangMan5 from '../images/Hangman-5.png'
import HangMan6 from '../images/Hangman-6.png'

export const images = [HangMan0,
  HangMan1, HangMan2, HangMan3,
  HangMan4, HangMan5, HangMan6
]

// Functions from hangman javascript exercise
export function gameOver(word, guesses) {
  return gameWon(word, guesses) || gameLost(word, guesses)
}
export function gameWon(word, guesses) {
  return wordGuessed(word, guesses)
}
export function gameLost(word, guesses) {
  return wrongGuessCount(word, guesses) > 5
}
export function wordGuessed(word, guesses) {
  return showGuess(word, guesses).indexOf("_") === -1
}

// .map, .filter
export function showGuess(word, guesses) {
  return word
    .split("")
    .map(letter => guesses.includes(letter) ? letter : "_")
    .join(" ")
}
export function wrongGuessCount(word, guesses) {
  return guesses
    .filter(letter => word.indexOf(letter) === -1)
    .length
}
