type ShipData = {
    id: number;
    length: number;
    type: "Carrier" | "Battleship" | "Cruiser" | "Submarine" | "Destroyer";
    color: string;
    currentDirection: "horizontal" | "vertical";
    boardX: number;
    boardY: number;
    status: number[];
    error: boolean;
}

export default ShipData;