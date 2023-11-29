
import '../Rules/Rules.scss'
import rule from '../../Assets/images/image-rules.svg';
function Rules({rules, setRules}) {

    

    if (rules ===false) return null;
    
    function closeRules(){
        setRules(false)
    };
    return (
        <div className="rules-overlay">
            <div className='rules-overlay__content' >
            <img className='rules-img' alt='rules' src={rule}></img>
            </div>
                <span className="rules-overlay__close" onClick={() => closeRules()}>
                </span>
        </div>
    )
};

export default Rules;
