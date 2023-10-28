import '../ScoreCard/ScoreCard.scss';
import logo from '../../Assets/images/logo.svg';

function ScoreCard({score}) {

    return (
        <section className='scorecard'>
            <div className='scorecard__banner'>
                <div className='scorecard__title-div'>
                    <img className='scorecard__title' src={logo}></img>
                </div>
                <div className='scorecard__card'>
                    <p className='scorecard__label'>SCORE</p>
                    <p className='scorecard__score'>{score}</p>
                </div>
            </div>
        </section>
    )
};

export default ScoreCard;