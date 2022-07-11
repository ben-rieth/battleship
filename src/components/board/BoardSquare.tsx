type BoardSquareProps = {
    clickHandler?: () => void;
}

const BoardSquare = ({clickHandler} : BoardSquareProps) => {
    return (
        <div className="w-12 h-12 border-2" data-testid="square" onClick={clickHandler}/>
    )
}

export default BoardSquare;