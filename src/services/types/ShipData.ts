type ShipData = {
    length: number;
    type: "Carrier" | "Battleship" | "Cruiser" | "Submarine" | "Destroyer";
    color: "red" | "orange" | "yellow" | "green" | "blue";
    currentDirection: "horizontal" | "vertical";
    boardX: number;
    boardY: number;
}

export default ShipData;