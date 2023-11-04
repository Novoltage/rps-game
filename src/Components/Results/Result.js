import '..result/result.scss';
import ScoreCard from '../ScoreCard/ScoreCard';


function result() {

  return (
    <section className='result'>
      <ScoreCard score={score}/>
      <div className='result__moves'>
        
      </div>
      <div className='result__result'>

      </div>
      <div className='result__play'>

      </div>
      <div className='result__rules'>
                <button className='game__rules-button'>RULES</button>
            </div>
    </section>
  );
}

export default result;
