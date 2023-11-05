import { useRef } from 'react';
import '../Result/Result.scss';
import ScoreCard from '../ScoreCard/ScoreCard';


function result({ playerMove, compMove }) {

  // switch (playerMove + compMove) {
  //   case "rockscissor":
  //       return <div className='result__moves'><div className='result__rock'></div><p>YOU PICKED</p><div className='result__scissor'></div><p>COMP PICKED</p></div>;
  //   case "paperrock":
  //     return <div className='result__moves'><div className='result__paper'><p>YOU PICKED</p></div><div className='result__rock'></div><p>COMP PICKED</p></div>;
  //   case "scissorpaper":
  //     return <div className='result__moves'><div className='result__scissor'></div><p>YOU PICKED</p><div className='result__paper'></div><p>COMP PICKED</p></div>;
  //   break;
  //   case "scissorrock":
  //       return <div className='result__moves'><div className='result__scissor'></div><p>YOU PICKED</p><div className='result__rock'></div><p>COMP PICKED</p></div>;
  //   case "rockpaper":
  //     return <div className='result__moves'><div className='result__rock'><p>YOU PICKED</p></div><div className='result__paper'></div><p>COMP PICKED</p></div>;
  //   case "paperscissor":
  //     return <div className='result__moves'><div className='result__paper'></div><p>YOU PICKED</p><div className='result__scissor'></div><p>COMP PICKED</p></div>;
  //     break;
  //   case "scissorscissor":
  //       return <div className='result__moves'><div className='result__scissor'></div><p>YOU PICKED</p><div className='result__scissor'></div><p>COMP PICKED</p></div>;
  //   case "rockrock":
  //     return <div className='result__moves'><div className='result__rock'><p>YOU PICKED</p></div><div className='result__rock'></div><p>COMP PICKED</p></div>;
  //   case "paperpaper":
  //     return <div className='result__moves'><div className='result__paper'></div><p>YOU PICKED</p><div className='result__paper'></div><p>COMP PICKED</p></div>;
  // }

  return (
    <section className='result'>
      <div className='result__moves'>
        {playerMove === "rock" && compMove === "scissor" ?
          (<>
            <div className='result__div'>
              <div className='result__rock'></div>
              <p className='result__text'>YOU PICKED</p>
            </div>
            <div className='result__div'>
              <div className='result__scissor'></div>
              <p className='result__text'>THE HOUSE PICKED</p>
            </div>
          </>)
          : <></>}
        {playerMove === "paper" && compMove === "rock" ? (
          <>
            <div className='result__div'>
              <div className='result__paper'></div>
              <p className='result__text'>YOU PICKED</p>
            </div>
            <div className='result__div'>
              <div className='result__rock'></div>
              <p className='result__text'>THE HOUSE PICKED</p>
            </div>
          </>) : <></>}
        {playerMove === "scissor" && compMove === "paper" ? (
          <>
            <div className='result__div'>
              <div className='result__scissor'></div>
              <p className='result__text'>YOU PICKED</p>
            </div>
            <div className='result__div'>
              <div className='result__paper'></div>
              <p className='result__text'>THE HOUSE PICKED</p>
            </div>
          </>) : <></>}
        {playerMove === "rock" && compMove === "rock" ? (
          <>
            <div className='result__div'>
              <div className='result__rock'></div>
              <p className='result__text'>YOU PICKED</p>
            </div>
            <div className='result__div'>
              <div className='result__rock'></div>
              <p className='result__text'>THE HOUSE PICKED</p>
            </div>
          </>) : <></>}
        {playerMove === "scissor" && compMove === "scissor" ? (
          <>
            <div className='result__div'>
              <div className='result__scissor'></div>
              <p className='result__text'>YOU PICKED</p>
            </div>
            <div className='result__div'>
              <div className='result__scissor'></div>
              <p className='result__text'>THE HOUSE PICKED</p>
            </div>
          </>) : <></>}
        {playerMove === "paper" && compMove === "paper" ? (
          <>
            <div className='result__div'>
              <div className='result__paper'></div>
              <p className='result__text'>YOU PICKED</p>
            </div>
            <div className='result__div'>
              <div className='result__paper'></div>
              <p className='result__text'>THE HOUSE PICKED</p>
            </div>
          </>) : <></>}
        {playerMove === "scissor" && compMove === "rock" ? (
          <>
            <div className='result__div'>
              <div className='result__scissor'></div>
              <p className='result__text'>YOU PICKED</p>
            </div>
            <div className='result__div'>
              <div className='result__rock'></div>
              <p className='result__text'>THE HOUSE PICKED</p>
            </div>
          </>) : <></>}
        {playerMove === "rock" && compMove === "paper" ? (
          <>
            <div className='result__div'>
              <div className='result__rock'></div>
              <p className='result__text'>YOU PICKED</p>
            </div>
            <div className='result__div'>
              <div className='result__paper'></div>
              <p className='result__text'>THE HOUSE PICKED</p>
            </div>
          </>) : <></>}
        {playerMove === "paper" && compMove === "scissor" ? (
          <>
            <div className='result__div'>
              <div className='result__paper'></div>
              <p className='result__text'>YOU PICKED</p>
            </div>
            <div className='result__div'>
              <div className='result_scissor'></div>
              <p className='result__text'>THE HOUSE PICKED</p>
            </div>
          </>) : <></>}
      </div>
    </section>
  );
}

export default result;
