import '../Game/Game.scss';
import { useState } from 'react';

function Game() {
    let [score, setScore] = useState(0);
    // const [playerMove, setPlayerMove] = useState('');
    const [compMove, setCompMove] = useState('');
    const [result, setResult] = useState('')

    // const randomNumber = Math.random();
        
    //     setCompMove(randomNumber)

    //     if (randomNumber >= 0 && randomNumber < 1 / 3) {
    //         setCompMove('paper');

    //     } else if (randomNumber >= 2 / 3) {
    //         setCompMove('rock');

    //     } else {
    //         setCompMove('scissor');
    //     };



    //computer move
    // function cpMove() {
    //     const randomNumber = Math.random();

    //     if (randomNumber >= 0 && randomNumber < 1 / 3) {
    //         setCompMove('paper');

    //     } else if (randomNumber >= 2 / 3) {
    //         setCompMove('rock');

    //     } else {
    //         setCompMove('scissor');
    //     }
    // }
    function pMove(playerMove) {
        const randomNumber = Math.random();

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
            setCompMove('paper');

        } else if (randomNumber >= 2 / 3) {
            setCompMove('rock');

        } else {
            setCompMove('scissor');
        };

        //player move is rock
        if (playerMove === 'rock' && compMove === 'scissor') {
            setResult('win')
            if (playerMove === compMove) {
                setResult('tie')
            } else {
                setResult('lost')
            }
        }

        //player move is scissor
        if (playerMove === 'scissor' && compMove === 'paper') {
            setResult('win')
            if (playerMove === compMove) {
                setResult('tie')
            } else {
                setResult('lost')
            }
        }

        //player move is paper
        if (playerMove === 'paper' && compMove === 'scissor') {
            setResult('win')
            if (playerMove === compMove) {
                setResult('tie')
            } else {
                setResult('lost')
            }
        };

        if (result === 'win') {
            setScore(score ++)
        };
        console.log( "player chose " + playerMove)
        console.log("comp chose " + compMove)
        console.log( "you " + result)
        console.log(score)
    };


    return (
        <section className='display'>
            <div className='game'>
                <div className='game__top-div'>
                    <div className='game__button-paper' onClick={() => pMove('paper')}></div>
                    <div className='game__button-scissor' onClick={() => pMove('scissor')} ></div>
                </div>
                <div className='game__button-rock' onClick={() => pMove('rock')}></div>
            </div>
            <div className='game__rules'>
                <button className='game__rules-button'>RULES</button>
            </div>
        </section>
    )
};

export default Game;