import { useEffect, useState } from "react";
import Board from "../board/Board";

type GameMode = "place" | "play";

const Game = () => {
    const [turn, setTurn] = useState<number>(1);
    const [mode, setMode] = useState<GameMode>("place");

    useEffect(() => {
        if(turn > 2) {
            setMode("play");
        }
    }, [turn])

    const onShipAttack = () => {
        setTurn(turn + 1);
    }

    return (
        <div className="flex flex-col">
            <div className="flex justify-around">
                <div className="flex flex-col items-center gap-5">
                    <h2 className="font-bold text-3xl">Player 1's Board</h2>
                    <Board mode={mode} showShips={turn % 2 === 1} id={1} goToNextTurn={onShipAttack}/>
                </div>
                <div className="flex flex-col items-center gap-5"> 
                    <h2 className="font-bold text-3xl">Player 2's Board</h2>
                    <Board mode={mode} showShips={turn % 2 === 0} id={2}/>
                </div>
            </div>
            <h3 className="text-xl text-center">Information Box</h3>
            <button onClick={() => setTurn(turn + 1)}>Next Turn</button>
            <p className="text-xl text-center">Turns: {turn}</p>
        </div>
    )
}

export default Game;