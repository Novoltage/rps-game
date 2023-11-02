import '../Game/Game.scss';
import { useEffect, useState} from 'react';
import ScoreCard from '../ScoreCard/ScoreCard';

function Game() {
    let [score, setScore] = useState(0);
    const [compMove, setCompMove] = useState('');
    const [playerMove, setPlayerMove] = useState('');
    const [result, setResult] = useState('')

    const outcome = ['rock', 'paper', 'scissor'];

    function cpMove() {
        const computerChoice = Math.floor(Math.random() * outcome.length);

        if (computerChoice == "0" ) {
            setCompMove('paper');

        } else if (computerChoice == "1") {
            setCompMove('rock');

        } else if (computerChoice == "2") {
            setCompMove('scissor');
            }
        };

    function handleLogic() {
        //player move is rock
        if (playerMove === 'rock' && compMove === 'scissor') {
            setResult('win');
        } else if (playerMove !== 'rock') {
            setResult('lost');
        } else {
            setResult('tied');
        }
        

        // //player move is scissor
        if (playerMove === 'scissor' && compMove === 'paper') {
            setResult('win');
        } else if (playerMove !== 'scissor') {
            setResult('lost');
        } else {
            setResult('tied');
        }
        

        //player move is paper
        if (playerMove === 'paper' && compMove === 'rock') {
            setResult('win');
        } else if (playerMove !== 'paper') {
            setResult('lost');
        } else {
            setResult('tied');
        }

        if (result === "win") {
            setScore(score+1)
        }
        console.log("player chose " + playerMove)
            console.log("comp chose " + compMove)
            console.log(score)
            console.log("you " + result)
    };

    function handleChoice(playerchoice) {
        setPlayerMove(playerchoice);
        cpMove();
    };


    useEffect(() => {
        handleLogic();
    },[playerMove, compMove])

    return (
        <section className='display'>
            <ScoreCard score={score}/>
            <div className='game'>
                <div className='game__top-div'>
                    <div className='game__button-paper' onClick={() => handleChoice('paper')}></div>
                    <div className='game__button-scissor' onClick={() => handleChoice('scissor')} ></div>
                </div>
                <div className='game__button-rock' onClick={() => handleChoice('rock')}></div>
            </div>
            <div className='game__rules'>
                <button className='game__rules-button'>RULES</button>
            </div>
        </section>
    )
};

export default Game;