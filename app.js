'use strict'

const startGameBtn = document.getElementById('start-game-btn');
const useMessage = document.getElementById('message')

let selection;
const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'

const getPlayerChoice = function() {
  selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase()
  if(selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice we choose ${ROCK} for you!`)
    return ROCK
  }
  return selection
}


function computerChoice() {
  const number = Math.random()
  // paper
  if (number <= 333) {
if (number <= .333 && selection === SCISSORS ) {
  console.log('You Won! computer picked paper')
    $('#message').text('You Won computer picked paper!')
  } else if (number <= .333 && selection === ROCK) {
    console.log('You Lost computer picked paper')
    $('#message').text('You lost computer picked paper!')
  } else if (number <= .333 && selection === PAPER) {
    console.log('its a tie play again!')
    $('#message').text('its a tie computer picked paper')
  }
} if (number > .333 && number <= .666) {
  // rock
  if (number > .333 && number <= .666 && selection === PAPER) {
  console.log('you won computer picked rock')
  $('#message').text('You Won computer picked rock!')
  } else if (number > .333 && number <= .666 && selection === SCISSORS) {
    console.log('You lost computer picked rock!')
    $('#message').text('You lost computer picked rock!')
  } else if (number > .333 && number <= .666 && selection === ROCK) {
    console.log('Its a tie play again!')
    $('#message').text('Its a tie computer picked rock')
  }
} if ( number > .666) {
  // scissors
  if (number > .666 && selection === ROCK) {
    console.log('You WON! computer picked scissors')
    $('#message').text('You won computer picked scissors')
  } else if (number > .666 && selection === PAPER) {
    console.log('You Lost computer picked scissors')
    $('#message').text('You lost computer picked scissors')
  } else if (number > .666 && selection === SCISSORS) {
    console.log('its a tie play again!')
    $('#message').text('Its a tie computer picked scissors')
  }
}
}

startGameBtn.addEventListener('click', function() {
  console.log('game is starting...')
  const playerSelection = getPlayerChoice();
  console.log(playerSelection)
  const computerSelection = computerChoice();
})