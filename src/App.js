import './App.scss';
import Game from './Components/Game/Game';
import ScoreCard from './Components/ScoreCard/ScoreCard';

function App() {

  return (
    <section className='App'>
      <ScoreCard/>
      <Game/>
    </section>
  );
}

export default App;
