import { useState } from "react";
import BoardSquare from "./BoardSquare";

const INITIAL_BOARD = Array(10).fill(Array(10).fill(0));

const Board = () => {
    const [board, setBoard] = useState<number[][]>(INITIAL_BOARD)

    return (
        <main className="grid grid-cols-10 w-fit">
            {board.map((boardRow, rowIndex) => {
                return boardRow.map((_, colIndex) => {
                    return <BoardSquare key={`${rowIndex}-${colIndex}`} row={rowIndex} col={colIndex}/>
                })
            })}
        </main>
    );
}

export default Board;