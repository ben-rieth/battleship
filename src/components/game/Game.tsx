import { useEffect, useState } from "react";
import Board from "../board/Board";

type GameMode = "place" | "play";

const Game = () => {
    const [turn, setTurn] = useState<number>(1);
    const [mode, setMode] = useState<GameMode>("place");
    const [board1Clickable, setBoard1Clickable] = useState<boolean>(false);
    const [board2Clickable, setBoard2Clickable] = useState<boolean>(false);

    useEffect(() => {
        if(turn > 2) {
            setMode("play");
        }
    }, [turn]);

    useEffect(() => {
        switch(turn) {
            case 1:
                setBoard1Clickable(true);
                setBoard2Clickable(false);
                break;
            case 2:
                setBoard1Clickable(false);
                setBoard2Clickable(true);
                break;
            default:
                setBoard1Clickable(turn % 2 === 0);
                setBoard2Clickable(turn % 2 === 1);
                break;  
        }
    }, [turn]);

    const onShipAttack = () => {
        setTurn(turn + 1);
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row justify-around">
                <div className="flex flex-col items-center gap-5">
                    <h2 className="font-bold text-3xl">Player 1's Board</h2>
                    <Board id={1} 
                        mode={mode} 
                        showShips={turn % 2 === 1} 
                        canInteract={board1Clickable}
                        goToNextTurn={onShipAttack}/>
                </div>
                <div className="flex flex-col items-center gap-5"> 
                    <h2 className="font-bold text-3xl">Player 2's Board</h2>
                    <Board id={2} 
                        mode={mode} 
                        showShips={turn % 2 === 0} 
                        canInteract={board2Clickable}
                        goToNextTurn={onShipAttack}/>
                </div>
            </div>
            {/* <h3 className="text-xl text-center">Information Box</h3>
            <button onClick={() => setTurn(turn + 1)}>Next Turn</button>
            <p className="text-xl text-center">Turns: {turn}</p> */}
        </div>
    )
}

export default Game;