import { useEffect, useState } from "react";
import Board from "../board/Board";
import Switch from "../switch/Switch";

type GameMode = "place" | "play";

const Game = () => {
    const [turn, setTurn] = useState<number>(1);
    const [mode, setMode] = useState<GameMode>("place");
    const [board1Clickable, setBoard1Clickable] = useState<boolean>(false);
    const [board2Clickable, setBoard2Clickable] = useState<boolean>(false);
    const [boardVisible, setBoardVisible] = useState<1 | 2>(1);

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
                setBoardVisible(1);
                break;
            case 2:
                setBoard1Clickable(false);
                setBoard2Clickable(true);
                setBoardVisible(2);
                break;
            default:
                setBoard1Clickable(turn % 2 === 0);
                setBoard2Clickable(turn % 2 === 1);
                setBoardVisible(turn % 2 === 0 ? 1 : 2);
                break;  
        }
    }, [turn]);

    const nextTurn = () => {
        setTurn(turn + 1);
    }

    const switchVisibleBoard = () => {
        setBoardVisible(boardVisible === 1 ? 2 : 1);
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-4 justify-around">
                <div className={`block md:hidden ${mode === "place" && "invisible"}`}>
                    <Switch leftBtnText="Enemy's Board" rightBtnText="Your Board" handleClick={switchVisibleBoard}/>
                </div>
                <div className={`flex flex-col items-center gap-5 ${boardVisible !== 1 ? "invisible md:visible order-2" : "order-1"}`}>
                    <h2 className="font-bold text-3xl">Player 1's Board</h2>
                    <Board id={1} 
                        mode={mode} 
                        showShips={turn % 2 === 1} 
                        canInteract={board1Clickable}
                        goToNextTurn={nextTurn}/>
                </div>
                <div className={`flex flex-col items-center gap-5 ${boardVisible !== 2 ? "invisible md:visible order-2" : "order-1"}`}> 
                    <h2 className="font-bold text-3xl">Player 2's Board</h2>
                    <Board id={2} 
                        mode={mode} 
                        showShips={turn % 2 === 0} 
                        canInteract={board2Clickable}
                        goToNextTurn={nextTurn}/>
                </div>
            </div>
            <button 
                onClick={nextTurn}
                className={`${mode === "play" && "hidden"} p-3 border-4 border-sky-800 rounded w-1/4 min-w-fit mx-auto`}
            >
                Done Placing Ships
            </button>
        </div>
    )
}

export default Game;