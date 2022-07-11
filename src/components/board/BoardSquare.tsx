type BoardSquareProps = {
    value: number;
    clickHandler?: () => void;
}

const BoardSquare = ({value, clickHandler} : BoardSquareProps) => {
    let insideElement;
    switch(value) {
        case -1:
            insideElement = <p>M</p>
            break;
        case -2:
            insideElement = <p>H</p>
            break;
        default:
            insideElement = <div></div>
            break;
    }
    
    return (
        <div className="w-12 h-12 border-2" data-testid="square" onClick={clickHandler}>
            {insideElement}
        </div>
    )
}

export default BoardSquare;