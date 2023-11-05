import '../Game/Game.scss';
import { useEffect, useState} from 'react';
import ScoreCard from '../ScoreCard/ScoreCard';
import Result from '../Result/Result';

function Game() {
    const [score, setScore] = useState(0);
    const [compMove, setCompMove] = useState('');
    const [playerMove, setPlayerMove] = useState('');
    const [result, setResult] = useState('')

    const outcome = ['rock', 'paper', 'scissor'];

    function cpMove() {
        const computerChoice = Math.floor(Math.random() * outcome.length);
        //console.log(computerChoice)

        if (computerChoice == "0" ) {
            setCompMove('rock');

        } else if (computerChoice == "1") {
            setCompMove('paper');

        } else if (computerChoice == "2") {
            setCompMove('scissor');
            }
        };

    function handleLogic() {
        //player move is rock
        // if (playerMove === 'rock' && compMove === 'scissor') {
        //     setResult('win');
        // } else if (playerMove !== 'rock') {
        //     setResult('lost');
        // } else {
        //     setResult('tied');
        // }
            if(playerMove === 'rock'){
                if(compMove === 'scissor'){
                    setResult('win');
                } else if(playerMove === compMove){
                    setResult('tied');
                }else {
                    setResult('lost')
                }
            }

        // //player move is scissor
        // if (playerMove === 'scissor' && compMove === 'paper') {
        //     setResult('win');
        // } else if (playerMove !== 'scissor') {
        //     setResult('lost');
        // } else {
        //     setResult('tied');
        // }
        if(playerMove === 'scissor'){
            if(compMove === 'paper'){
                setResult('win');
            } else if(playerMove === compMove){
                setResult('tied');
            }else {
                setResult('lost')
            }
        }

        // //player move is paper
        // if (playerMove === 'paper' && compMove === 'rock') {
        //     setResult('win');
        // } else if (playerMove !== 'paper') {
        //     setResult('lost');
        // } else {
        //     setResult('tied');
        // }
        if(playerMove === 'paper'){
            if(compMove === 'rock'){
                setResult('win');
            } else if(playerMove === compMove){
                setResult('tied');
            }else {
                setResult('lost')
            }
        }
        if (result === "win") {
            const newscore = score +1
            setScore(newscore)
        }
        console.log("player chose " + playerMove)
            console.log("comp chose " + compMove)
            console.log(score)
            console.log("you " + result)
    };

    function handleChoice(playerchoice) {
        cpMove();
        setPlayerMove(playerchoice);
        
    };


    useEffect(() => {
        handleLogic();
    },[playerMove,compMove,result])

    return (
        <section className='display'>
            <ScoreCard score={score}/>
            { result && (<Result result={result} playerMove={playerMove} compMove={compMove}/>)}
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