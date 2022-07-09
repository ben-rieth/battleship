import { useState } from "react";
import { isConstructorDeclaration } from "typescript";
import BoardSquare from "./BoardSquare";

const INITIAL_BOARD = Array(10).fill(Array(10).fill(0));

const Board = () => {
    const [board, setBoard] = useState<number[][]>(INITIAL_BOARD)

    const boardSquareClear = (row: number, col: number) : boolean => {
        if(board[row][col] === 0) {
            return true;
        }

        return false;
    }

    const placeShip = (row: number, col: number, shipSize: number) => {
        for (let i = col; i < col+shipSize; i++) {
            if (!boardSquareClear(row, i)) {
                console.log("Invalid placement");
                return;
            }
        }

        setBoard(
            board.map((bRow, rIndex) => {
                return bRow.map((space, cIndex) => {
                    if (rIndex === row && cIndex >= col && cIndex < col + shipSize) {
                        return 1;
                    }

                    return space;
                })
            })
        )
    }

    return (
        <main className="grid grid-cols-10 w-fit">
            {board.map((boardRow, rowIndex) => {
                return boardRow.map((value, colIndex) => {
                    return <BoardSquare key={`${rowIndex}-${colIndex}`} status={value} onClick={() => placeShip(rowIndex, colIndex, 3)}/>
                })
            })}
        </main>
    );
}

export default Board;