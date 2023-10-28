import '../Game/Game.scss';
import { useState } from 'react';

function Game() {
    let [score, setScore] = useState(0);
    const [playerMove, setPlayerMove] = useState("");
    const [compMove, setCompMove] = useState("");
    const [result, setResult] = useState("")

    function pMove() {
        cpMove();
        if (playerMove === 'rock') {
            if (compMove === 'scissor')
                setResult("win");
            else if (compMove === 'rock')
                setResult("tie")
            else {
                setResult("lost")
            }
        }

        //player move is scissor
        if (playerMove === 'scissor') {
            if (compMove === 'paper')
                setResult("win")
            else if (compMove === 'scissor')
                setResult("tie")   
            else {
                setResult("lost")
            }
        }
        //player move is paper
        if (playerMove === 'paper') {
            if (compMove === 'rock')
                setResult("win")
            else if (compMove === 'paper')
                setResult("tie")
            else {
                setResult("lost")
            }
        }
        if (result === "win") {
            console.log(score)
            setScore(score ++)
        }
    }
    //computer move
    function cpMove() {
        const randomNumber = Math.random();

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
            setCompMove('paper');

        } else if (randomNumber >= 2 / 3) {
            setCompMove('rock');

        } else {
            setCompMove('scissor');
        }
        console.log(compMove)
        return compMove;
    }


    return (
        <>
            <img className=''></img>
        </>
    )
};

export default Game;