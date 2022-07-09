import BoardSquare from "./BoardSquare";

const Board = () => {
    const boardGrid : JSX.Element[][] = [];
    for(let row = 0; row < 10; row++) {
        boardGrid.push([]);
        for (let col=0; col < 10; col++) {
            boardGrid[row].push(<BoardSquare key={`${row}-${col}`}/>)
        }
    }

    return (
        <main className="grid grid-cols-10 gap-0 w-fit">
            {boardGrid}
        </main>
    );
}

export default Board;