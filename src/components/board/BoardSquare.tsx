import HitIcon from './../../assets/images/hit.svg';
import MissIcon from './../../assets/images/miss.svg';

type BoardSquareProps = {
    value: number;
    clickHandler?: () => void;
}

const BoardSquare = ({value, clickHandler} : BoardSquareProps) => {
    let insideElement;
    switch(value) {
        case -1:
            insideElement = <img src={MissIcon} alt="miss" className="w-6 h-6"/>
            break;
        case -2:
            insideElement = <img src={HitIcon} alt="hit" className="w-10 h-10" />
            break;
        default:
            insideElement = <div></div>
            break;
    }
    
    return (
        <div className="w-12 h-12 border-2 flex items-center justify-center" data-testid="square" onClick={clickHandler}>
            {insideElement}
        </div>
    )
}

export default BoardSquare;