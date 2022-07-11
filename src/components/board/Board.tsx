import { useCallback, useEffect, useState } from "react";
import { DraggableData } from "react-rnd";
import ShipData from "../../services/types/ShipData";
import INITIAL_SHIPS from "../../utils/initialShips";
import Ship from "../ship/Ship";
import BoardSquare from "./BoardSquare";

const INITIAL_BOARD = Array(10).fill(Array(10).fill(0));

type BoardProps = {
    mode: "place" | "play";
}

const Board = ({mode} : BoardProps) => {
    const [board, setBoard] = useState<number[][]>(INITIAL_BOARD);
    const [ships, setShips] = useState<ShipData[]>(INITIAL_SHIPS);

    const boardSquareClear = (row: number, col: number, id: number) : boolean => {
        if(board[row][col] === 0 || board[row][col] === id) {
            return true;
        }

        return false;
    }

    const spaceForShipClear = (x: number, y: number, shipSize: number, shipId: number, directionToCheck: string) => {
        if (directionToCheck === "horizontal") {
            for (let i = x; i < x+shipSize; i++) {
                if (!boardSquareClear(y, i, shipId)) {
                    return false;
                }
            }

            return true;
        } else {
            for (let i = y; i < y+shipSize; i++) {
                if (!boardSquareClear(i, x, shipId)) {
                    return false;
                }
            }

            return true;
        }
    }

    const giveShipErrorTimeout = (shipId: number) => {
        setShips(s => s.map((boat) => {
            if (boat.id === shipId) {
                boat.error = true;
            } 
            return boat;
        }));

        setTimeout(
            () => {setShips(s => s.map((boat) => {
                if (boat.id === shipId) {
                    boat.error = false;
                } 
                return boat;
            }))}
            , 500
        );
    }

    const tryToRotateShipHorToVert = (x: number, y: number, shipSize: number, shipId: number) => {
        if (spaceForShipClear(x, y, shipSize, shipId, "vertical")) {

            setShips(s => s.map((boat) => {
                if (boat.id === shipId) {
                    boat.currentDirection = "vertical";
                } 
                return boat;
            }))
        } else {
            giveShipErrorTimeout(shipId);
        }
        
    }

    const tryToRotateShipVertToHor = (x: number, y: number, shipSize: number, shipId: number) => {
        if (spaceForShipClear(x, y, shipSize, shipId, "horizontal")) {
            setShips(s => s.map((boat) => {
                if (boat.id === shipId) {
                    boat.currentDirection = "horizontal";
                } 
                return boat;
            }))
        } else {
            giveShipErrorTimeout(shipId);
        }
        
    }

    const handleShipDoubleClick = (shipId: number, ) => {
        //if the game is not in placing mode, do not handle the double click
        if(mode !== "place") return;

        const clickedShip = ships.find(ship => ship.id === shipId);

        if (clickedShip!.currentDirection === "horizontal") {
            tryToRotateShipHorToVert(
                clickedShip!.boardX, 
                clickedShip!.boardY, 
                clickedShip!.length, 
                clickedShip!.id
            );
        } else if (clickedShip!.currentDirection === "vertical") {
            tryToRotateShipVertToHor(
                clickedShip!.boardX, 
                clickedShip!.boardY, 
                clickedShip!.length, 
                clickedShip!.id
            );
        }
    }

    const placeShipVertical = useCallback((x: number, y: number, shipSize: number, shipId: number) => {
        setBoard(b =>
            b.map((boardRow, rowIndex) => {
                return boardRow.map((space, colIndex) => {
                    if (colIndex === x && rowIndex >= y && rowIndex < y + shipSize) {
                        return shipId;
                    }

                    return space;
                })
            })
        )
    }, [])

    const placeShipHorizontal = useCallback((x: number, y: number, shipSize: number, shipId: number) => {
            
        setBoard(b => 
            b.map((boardRow, rowIndex) => {
                return boardRow.map((space, colIndex) => {
                    if (rowIndex === y && colIndex >= x && colIndex < x + shipSize) {
                        return shipId;
                    }

                    return space;
                })
            })
        )
    }, [])

    //place ships when the ships array changes
    useEffect(() => {
        //clear the board
        setBoard(b => b.map(row => row.map(_space => 0)));

        ships.forEach((boat) => {
            if(boat.currentDirection === "horizontal") {
                placeShipHorizontal(boat.boardX, boat.boardY, boat.length, boat.id)
            } else if (boat.currentDirection === "vertical"){
                placeShipVertical(boat.boardX, boat.boardY, boat.length, boat.id)
            }
        })

    }, [ships, placeShipHorizontal, placeShipVertical]);

    const tryToMoveShip = (
            newX: number, newY: number, 
            shipSize: number, 
            shipId: number, 
            shipDirection: string) => {

        if(spaceForShipClear(newX, newY, shipSize, shipId, shipDirection)) {
            console.log("clear");
            setShips(s => s.map((boat) => {
                if (boat.id === shipId) {
                    boat.boardX = newX;
                    boat.boardY = newY;
                } 
                return boat;
            }))
        } else {
            giveShipErrorTimeout(shipId);
        }
    }

    const onShipDrop = (dragData: DraggableData, ship: ShipData) => {
        tryToMoveShip(
            Math.round(dragData.x / 48), 
            Math.round(dragData.y / 48),
            ship.length,
            ship.id,
            ship.currentDirection
        );
    }

    return (
        <main className="grid grid-cols-10 w-fit h-fit relative">
            {board.map((boardRow, rowIndex) => {
                return boardRow.map((_, colIndex) => {
                    return <BoardSquare key={`${rowIndex}-${colIndex}`}/>
                })
            })}
            {ships.map((ship) => {
                return <Ship ship={ship} key={ship.type} draggable={mode === "place"}
                            doubleClickHandler={() => handleShipDoubleClick(ship.id)} 
                            shipDropHandler={(_e: any, data: DraggableData) => onShipDrop(data, ship)}/>
            })}
        </main>
    );
}

export default Board;