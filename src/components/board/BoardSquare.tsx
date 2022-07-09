type BoardSquareProps = {
    status: number;
    onClick?: () => void;
}

const BoardSquare = ({status, onClick}: BoardSquareProps) => {
    return (
        <div className="w-12 h-12 outline outline-2" onClick={onClick}>
            <p>{status}</p>
        </div>
    )
}

export default BoardSquare;