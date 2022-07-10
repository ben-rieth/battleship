import ShipData from "../services/types/ShipData";

const INITIAL_SHIPS : ShipData[] = [
    {
        length: 2,
        type: "Destroyer",
        color: "red",
        currentDirection: "horizontal",
        boardX: 0,
        boardY: 0,
        status: [0, 0]
    },
    {
        length: 3,
        type: "Cruiser",
        color: "orange",
        currentDirection: "horizontal",
        boardX: 2,
        boardY: 4,
        status: [0, 0, 0]
    },
    {
        length: 3,
        type: "Submarine",
        color: "yellow",
        currentDirection: "horizontal",
        boardX: 5,
        boardY: 8,
        status: [0, 0, 0]
    },
    {
        length: 4,
        type: "Battleship",
        color: "green",
        currentDirection: "vertical",
        boardX: 0,
        boardY: 6,
        status: [0, 0, 0, 0]
    },
    {
        length: 5,
        type: "Carrier",
        color: "blue",
        currentDirection: "vertical",
        boardX: 6,
        boardY: 2,
        status: [0, 0, 0, 0, 0]
    }
];

export default INITIAL_SHIPS;