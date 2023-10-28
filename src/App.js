
import { useState } from 'react';
import './App.scss';
import Game from './Components/Game/Game';
import ScoreCard from './Components/ScoreCard/ScoreCard';

function App() {
  const [score, setScore] = useState(0);
  const [playerMove, setPlayerMove] = useState("");
  const [compMove, setCompMove] = useState("");

  function pMove({ playerMove }) {
    cpmove();
    if (playerMove === 'rock') {
      if (compMove === 'scissor')
        result = 'win';
      else if (compMove === 'rock')
        result = 'tie'
      else {
        result = 'lost'
      }
    }

    //player move is scissor
    if (playerMove === 'scissor') {
      if (compMove === 'paper')
        result = 'win';
      else if (compMove === 'scissor')
        result = 'tie'
      else {
        result = 'lost'
      }
    }
    //player move is paper
    if (playerMove === 'paper') {
      if (compMove === 'rock')
        result = 'win';
      else if (compMove === 'paper')
        result = 'tie'
      else {
        result = 'lost'
      }
    }
    if (result === "win") {
      setScore(score++)
    }
  }

  //computer move
  function cpmove() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      setCompMove('paper');

    } else if (randomNumber >= 2 / 3) {
      setCompMove('rock');

    } else {
      setCompMove('scissor');
    }

    return compMove;
  }

  return (
    <section className='App'>
      <ScoreCard score={score} />
      <Game playerMove={playerMove} compMove={compMove} />
    </section>
  );
}

export default App;
