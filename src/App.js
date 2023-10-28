import { useState } from 'react';
import './App.scss';
import Game from './Components/Game/Game';
import ScoreCard from './Components/ScoreCard/ScoreCard';

function App() {

  return (
    <section className='App'>
      <ScoreCard score={score} />
      <Game playerMove={playerMove} setPlayerMove={setPlayerMove} pmove={pMove} cpMove={cpMove} rock={rock} paper={paper} scissors={scissors} compMove={compMove} />
    </section>
  );
}

export default App;
