import { useState } from "react";
import ShipData from "../../services/types/ShipData";
import INITIAL_SHIPS from "../../utils/initialShips";
import Ship from "../ship/Ship";
import BoardSquare from "./BoardSquare";

const INITIAL_BOARD = Array(10).fill(Array(10).fill(0));

const Board = () => {
    const [board, setBoard] = useState<number[][]>(INITIAL_BOARD);
    const [ships, setShips] = useState<ShipData[]>(INITIAL_SHIPS);

    const boardSquareClear = (row: number, col: number) : boolean => {
        if(board[row][col] === 0) {
            return true;
        }

        return false;
    }

    const placeShipHorizontal = (row: number, col: number, shipSize: number) => {
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

    const placeShipVertical = (row: number, col: number, shipSize: number) => {
        for (let i = row; i < row+shipSize; i++) {
            if (!boardSquareClear(i, col)) {
                console.log("Invalid placement");
                return;
            }
        }
        setBoard(
            board.map((bRow, rIndex) => {
                return bRow.map((space, cIndex) => {
                    if (cIndex === col && rIndex >= row && rIndex < row + shipSize) {
                        return 1;
                    }

                    return space;
                })
            })
        )
    }

    // const attack = (row: number, col: number) => {
    //     if(board[row][col] === -1 || board[row][col] === -2) {
    //         return;
    //     }

    //     let result : number;
    //     if(board[row][col] === 1) {
    //         //a ship is hit
    //         result = -1;
    //     } else {
    //         //a miss
    //         result = -2;
    //     }

    //     setBoard(
    //         board.map((boardRow, rowIndex) => {
    //             return boardRow.map((space, colIndex) => {
    //                 if(rowIndex === row && colIndex === col) {
    //                     return result;
    //                 }
    //                 return space;
    //             });
    //         })
    //     );
    // }

    const handleShipClick = () => {
        console.log('click')
    }

    return (
        <main className="grid grid-cols-10 w-fit">
            {board.map((boardRow, rowIndex) => {
                return boardRow.map((value, colIndex) => {
                    return <BoardSquare key={`${rowIndex}-${colIndex}`} status={value} onClick={() => console.log('click')}/>
                })
            })}
            {ships.map((ship) => <Ship ship={ship} onClick={handleShipClick}/>)}
        </main>
    );
}

export default Board;