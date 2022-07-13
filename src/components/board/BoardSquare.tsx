import HitIcon from './../../assets/images/hit.svg';
import MissIcon from './../../assets/images/miss.svg';

type BoardSquareProps = {
    squareId: string;
    value: number;
    clickHandler?: () => void;
}

const BoardSquare = ({squareId, value, clickHandler} : BoardSquareProps) => {
    let insideElement;
    switch(value) {
        case -1:
            insideElement = <img src={MissIcon} alt="miss" className="w-2 h-2 md:w-6 md:h-6" data-testid={`miss-${squareId}`}/>
            break;
        case -2:
            insideElement = <img src={HitIcon} alt="hit" className="w-3 h-3 md:w-10 md:h-10" data-testid={`hit-${squareId}`}/>
            break;
        default:
            insideElement = <div></div>
            break;
    }
    
    return (
        <div className="w-6 h-6 md:w-12 md:h-12 border-2 border-slate-500 flex items-center justify-center" data-testid={`square-${squareId}`} onClick={clickHandler}>
            {insideElement}
        </div>
    )
}

export default BoardSquare;