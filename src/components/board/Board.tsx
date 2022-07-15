import { useCallback, useEffect, useState } from "react";
import { DraggableData } from "react-rnd";
import ShipData from "../../services/types/ShipData";
import INITIAL_SHIPS from "../../utils/initialShips";
import { getGridSizeBasedOnScreenWidth } from "../../utils/ScreenUtils";
import Ship from "../ship/Ship";
import BoardSquare from "./BoardSquare";

const INITIAL_BOARD = Array(10).fill(Array(10).fill(0));

type BoardProps = {
    id: number;
    mode: "place" | "play";
    canInteract: boolean;
    showShips: boolean;
    goToNextTurn?: () => void;
}

const Board = ({id, mode, showShips, canInteract, goToNextTurn= () => {/* empty handler */}} : BoardProps) => {
    const [board, setBoard] = useState<number[][]>([...INITIAL_BOARD]);
    const [ships, setShips] = useState<ShipData[]>([...INITIAL_SHIPS]);

    const boardSquareClear = (row: number, col: number, shipId: number) : boolean => {
        if(board[row][col] === 0 || board[row][col] === shipId) {
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

    const handleShipClickToRotate = (shipId: number, ) => {
        //if the game is not in placing mode, do not handle the double click
        if(mode !== "place" || !canInteract) return;

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
        if (mode === "place") {
            setBoard(b => b.map(row => row.map(_space => 0)));


            ships.forEach((boat) => {
                if(boat.currentDirection === "horizontal") {
                    placeShipHorizontal(boat.boardX, boat.boardY, boat.length, boat.id)
                } else if (boat.currentDirection === "vertical"){
                    placeShipVertical(boat.boardX, boat.boardY, boat.length, boat.id)
                }
            })
        }
    }, [ships, mode, placeShipHorizontal, placeShipVertical]);

    const tryToMoveShip = (
            newX: number, newY: number, 
            shipSize: number, 
            shipId: number, 
            shipDirection: string) => {

        if(spaceForShipClear(newX, newY, shipSize, shipId, shipDirection)) {
            setShips(s => s.map((boat) => {
                if (boat.id === shipId) {
                    return {...boat, boardX: newX, boardY: newY}
                } 
                return boat;
            }))
        } else {
            giveShipErrorTimeout(shipId);
        }
    }

    const onShipDrop = (dragData: DraggableData, ship: ShipData) => {
        const gridSize = getGridSizeBasedOnScreenWidth();

        tryToMoveShip(
            Math.round(dragData.x / gridSize), 
            Math.round(dragData.y / gridSize),
            ship.length,
            ship.id,
            ship.currentDirection
        );
    }

    const getNewBoatStatus = (oldStatus: number[], shipHitIndex: number) => {

        return oldStatus.map((positionStatus, index) => {
            if (index === shipHitIndex) {
                return -1;
            }
            return positionStatus;
        });
    }

    const processShipHit = (hitShipId: number, hitSquareX: number, hitSquareY: number) => {
        setShips(s => s.map((boat) => {
            if (boat.id === hitShipId) {
                return {
                    ...boat,
                    status: boat.currentDirection === "horizontal" ? 
                                getNewBoatStatus(boat.status, hitSquareX - boat.boardX) : 
                                getNewBoatStatus(boat.status, hitSquareY - boat.boardY)
                }
            }
            return boat;
        }));
    }

    const onAttackClick = (x: number, y:number) => {
        if (mode !== "play" || !canInteract) return;

        const attackedSquare = board[y][x];
        let attackResult : -1 | -2;
        if (attackedSquare === 0) {
            console.log("miss");
            attackResult = -1;
        } else if (attackedSquare > 0) {
            console.log("hit")
            attackResult = -2;

            processShipHit(attackedSquare, x, y);  
        } else {
            console.log("Already attacked");
            return;
        }

        setBoard(
            board.map((boardRow, rowIndex) => {
                return boardRow.map((space, colIndex) => {
                    if (rowIndex === y && colIndex === x) {
                        return attackResult;
                    }
                    return space;
                })
            })
        );

        goToNextTurn();
    }

    useEffect(() => {
        if (mode === "play") {
            const allSunk : boolean = ships.every((boat) => boat.status.every((position) => position === -1));

            if(allSunk) {
                console.log("All ships sunk on board ", id);
            }
        }
    }, [ships, mode, id])

    return (
        <main className="grid grid-cols-10 w-fit h-fit relative" key={id}>
            {board.map((boardRow, rowIndex) => {
                return boardRow.map((space, colIndex) => {
                    return <BoardSquare key={`${id}-${rowIndex}-${colIndex}`} squareId={`${id}-${rowIndex}-${colIndex}`} clickHandler={() => onAttackClick(colIndex, rowIndex)} value={space}/>
                })
            })}
            {showShips && ships.map((ship) => {
                return <Ship ship={ship} key={`${id}-${ship.type}`} draggable={mode === "place"}
                            clickHandler={() => handleShipClickToRotate(ship.id)} 
                            shipDropHandler={(data: DraggableData) => onShipDrop(data, ship)}/>
            })}
        </main>
    );
}

export default Board;