import ShipData from "../services/types/ShipData";

const INITIAL_SHIPS : ShipData[] = [
    {
        id: 1,
        length: 2,
        type: "Destroyer",
        color: "bg-orange-300/60 outline-orange-600",
        currentDirection: "horizontal",
        boardX: 0,
        boardY: 0,
        status: [0, 0],
        error: false
    },
    {
        id: 2,
        length: 3,
        type: "Cruiser",
        color: "bg-yellow-300/60 outline-yellow-600",
        currentDirection: "horizontal",
        boardX: 2,
        boardY: 4,
        status: [0, 0, 0],
        error: false
    },
    {
        id: 3,
        length: 3,
        type: "Submarine",
        color: "bg-green-300/60 outline-green-600",
        currentDirection: "horizontal",
        boardX: 5,
        boardY: 8,
        status: [0, 0, 0],
        error: false
    },
    {
        id: 4,
        length: 4,
        type: "Battleship",
        color: "bg-blue-300/60 outline-blue-600",
        currentDirection: "vertical",
        boardX: 0,
        boardY: 6,
        status: [0, 0, 0, 0],
        error: false
    },
    {
        id: 5,
        length: 5,
        type: "Carrier",
        color: "bg-red-300/60 outline-red-600",
        currentDirection: "vertical",
        boardX: 6,
        boardY: 2,
        status: [0, 0, 0, 0, 0],
        error: false
    }
];

export default INITIAL_SHIPS;