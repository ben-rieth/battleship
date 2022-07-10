import { useCallback, useEffect, useState } from "react";
import ShipData from "../../services/types/ShipData";
import INITIAL_SHIPS from "../../utils/initialShips";
import Ship from "../ship/Ship";
import BoardSquare from "./BoardSquare";

const INITIAL_BOARD = Array(10).fill(Array(10).fill(0));

const Board = () => {
    const [board, setBoard] = useState<number[][]>(INITIAL_BOARD);
    const [ships, setShips] = useState<ShipData[]>(INITIAL_SHIPS);

    const boardSquareClear = useCallback((row: number, col: number) : boolean => {
        if(board[row][col] === 0) {
            return true;
        }

        return false;
    }, [board]);

    

    

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

    useEffect(() => {
        const placeShipVertical =(x: number, y: number, shipSize: number) => {
            setBoard(b =>
                b.map((boardRow, rowIndex) => {
                    return boardRow.map((space, colIndex) => {
                        if (colIndex === x && rowIndex >= y && rowIndex < y + shipSize) {
                            return 1;
                        }
    
                        return space;
                    })
                })
            )
        }

        const placeShipHorizontal = (x: number, y: number, shipSize: number) => {
            
            setBoard(b => 
                b.map((boardRow, rowIndex) => {
                    return boardRow.map((space, colIndex) => {
                        if (rowIndex === y && colIndex >= x && colIndex < x + shipSize) {
                            return 1;
                        }
    
                        return space;
                    })
                })
            )
        }

        ships.forEach((boat) => {
            if(boat.currentDirection === "horizontal") {
                placeShipHorizontal(boat.boardX, boat.boardY, boat.length)
            } else if (boat.currentDirection === "vertical"){
                placeShipVertical(boat.boardX, boat.boardY, boat.length)
            }
        })

    }, [ships]);

    return (
        <main className="grid grid-cols-10 w-fit">
            {board.map((boardRow, rowIndex) => {
                return boardRow.map((value, colIndex) => {
                    return <BoardSquare key={`${rowIndex}-${colIndex}`} status={value} onClick={() => console.log('click')}/>
                })
            })}
            {ships.map((ship) => <Ship ship={ship} onClick={handleShipClick} key={ship.type}/>)}
        </main>
    );
}

export default Board;

// for (let i = col; i < col+shipSize; i++) {
            //     if (!boardSquareClear(row, i)) {
            //         console.log("Invalid placement");
            //         return;
            //     }
            // }