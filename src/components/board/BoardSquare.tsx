type BoardSquareProps = {
    row: number;
    col: number;
}

const BoardSquare = ({row, col}: BoardSquareProps) => {
    return (
        <div className="w-12 h-12 outline outline-2">
            <p>{row}/{col}</p>
        </div>
    )
}

export default BoardSquare;