import { useRef } from 'react';
import '../Result/Result.scss';
import ScoreCard from '../ScoreCard/ScoreCard';


function result({result, playerMove, compMove}) {

  return (
    <section className='result'>
  
      <div className='result__moves'>
        {playerMove === "rock" && compMove === "scissor" ? (<><div className='result__rock'></div><p>YOU PICKED</p><div className='result__paper'></div><p>COMP PICKED</p></>) :   <></> }
        {playerMove === "paper" && compMove === "rock" ? (<><div className='result__paper'><p>YOU PICKED</p></div><div className='result__rock'></div><p>COMP PICKED</p></>) :   <></> }
        {playerMove === "scissor" && compMove === "paper" ? (<><div className='result__scissor'></div><p>YOU PICKED</p><div className='result__paper'></div><p>COMP PICKED</p></ >) : <></> }
        {playerMove === "rock" && compMove === "rock" ? (<><div className='result__rock'></div><p>YOU PICKED</p><div className='result__rock'></div><p>COMP PICKED</p></>) : <></  > }
        {playerMove === "scissor" && compMove === "scissor" ? (<><div className='result__scissor'></div><p>YOU PICKED</p><div className='result__scissor'></ div><p>COMP PICKED</p></>) : <></> }
        {playerMove === "paper" && compMove === "paper" ? (<><div className='result__paper'></div><p>YOU PICKED</p><div className='result__paper'></div><p>COMP PICKED</p></>) :   <></> }
        {playerMove === "scissor" && compMove === "rock" ? (<><div className='result__scissor'></div><p>YOU PICKED</p><div className='result__rock'></div><p>COMP PICKED</p></>)   : <></> }
        {playerMove === "rock" && compMove === "paper" ? (<><div className='result__rock'></div><p>YOU PICKED</p><div className='result__paper'></div><p>COMP PICKED</p></>) :   <></> }
        {playerMove === "paper" && compMove === "scissor" ? (<><div className='result__paper'></div><p>YOU PICKED</p><div className='result__scissor'></div><p>COMP PICKED</p></ >) : <></> }
      </div>
      <div className='result__result'>

      </div>
      <div className='result__play'>

      </div>
    </section>
  );
}

export default result;
