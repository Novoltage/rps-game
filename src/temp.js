//win condition
const pmove = input.element;
let result ='';

//player move is rock
if (pmove === 'rock'){
    if(computerMove ==='scissor')
    result = 'win';
    else if (computerMove === 'rock')
    result = 'tie'
    else {
        result ='lost'
    }
}
//player move is scissor
if (pmove === 'scissor'){
    if(computerMove ==='paper')
    result = 'win';
    else if (computerMove === 'scissor')
    result = 'tie'
    else {
        result ='lost'
    }
}
//player move is paper
if (pmove === 'paper'){
    if(computerMove ==='rock')
    result = 'win';
    else if (computerMove === 'paper')
    result = 'tie'
    else {
        result ='lost'
    }
}
//computer move
function cpmove(){
const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'paper';
  
    } else if (randomNumber >= 2 / 3) {
      computerMove = 'rock';

    } else {
        computerMove ='scissor'
    }

    return computerMove;
  }

  