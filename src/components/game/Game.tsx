import { useEffect, useState } from "react";
import { Message } from "../../services/types/Message";
import { Player } from "../../services/types/Player";
import Board from "../board/Board";
import Header from "../header/Header";
import Log from "../log/Log";
import PlacementModeModalContent from "../modal/PlacementModeModalContent";
import PlayModeModalContent from "../modal/PlayModeModalContent";
import Modal from "../modal/Modal";
import Switch from "../switch/Switch";
import GameWonModalContent from "../modal/GameWonModalContent";
import Button from "../button/Button";

type GameMode = "place" | "play";

const Game = () => {
    const [turn, setTurn] = useState<number>(1);
    const [usersSwitching, setUsersSwitching] = useState<boolean>(false);
    const [mode, setMode] = useState<GameMode>("place");
    const [winner, setWinner] = useState<Player | undefined>();

    const [board1Clickable, setBoard1Clickable] = useState<boolean>(false);
    const [board2Clickable, setBoard2Clickable] = useState<boolean>(false);
    const [boardVisible, setBoardVisible] = useState<1 | 2>(1);

    const [logMessages, setLogMessages] = useState<Message[]>([]);

    //switch to play mode after 
    useEffect(() => {
        if(turn > 2) {
            setMode("play");
        }
    }, [turn]);

    //determine when boards are clickable and visible
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

    const goToSwitchScreen = () => {
        setTimeout(() => {
            setTurn(turn + 1);
            setUsersSwitching(true);
        }, 0);
        
    }

    const nextTurn = () => {  
        setUsersSwitching(false);
    }

    const switchVisibleBoard = () => {
        setBoardVisible(boardVisible === 1 ? 2 : 1);
        
    }

    const finishPlacingShips = () => {
        const currentPlayer = turn % 2 === 1 ? "Player 1" : "Player 2";
        addNewLogMessage("Finished placing their ships!", currentPlayer);
        goToSwitchScreen()
    }

    const handleAttack = (attackX: number, attackY: number, result: string) => {
        console.log('attack');
        const currentPlayer = turn % 2 === 1 ? "Player 1" : "Player 2";
        addNewLogMessage(`${result} at (x=${attackX}, y=${attackY})`, currentPlayer);
        goToSwitchScreen();
    }  
    
    const handleSunkShip = (shipType: string) => {
        const currentPlayer = turn % 2 === 1 ? "Player 1" : "Player 2";
        const attackedPlayer = turn % 2 === 1 ? "Player 2" : "Player 1";

        addNewLogMessage(`Sunk ${attackedPlayer}'s ${shipType}!`, currentPlayer);
        goToSwitchScreen();
    }

    const handleGameOver = () => {
        const currentPlayer = turn % 2 === 1 ? "Player 1" : "Player 2";
        setWinner(currentPlayer);

        addNewLogMessage('is the Winner!', currentPlayer);
    }

    const addNewLogMessage = (newMessage: string, playerType: Player) => {
        setLogMessages(
            logMessages.concat([{text: newMessage, player: playerType}])
        );
    }

    const getModalContent = () : JSX.Element => {
        if (winner) {
            return <GameWonModalContent 
                        winner={winner}
                        handleRematchClick={() => console.log("")}
                        handleNewGameClick={() => console.log("")} />
        } else if (mode === "place") {
            return <PlacementModeModalContent handleBtnPress={nextTurn}/>;
        } else {
            return <PlayModeModalContent handleBtnPress={nextTurn} />;
        }
    }

    return (
        <div>
            <Modal 
                isOpen={usersSwitching || Boolean(winner)} 
                content={getModalContent()}
            />
            <div className="flex flex-col items-center gap-2">
                <Header />
                <h2 className="text-center text-xl">It is {turn % 2 === 1 ? "Player 1's" : "Player 2's"} turn!</h2>
                <div className="flex flex-col md:flex-row gap-4 justify-around">
                    <div className={`block md:hidden ${mode === "place" && "invisible"}`}>
                        <Switch leftBtnText="Enemy's Board" rightBtnText="Your Board" handleClick={switchVisibleBoard}/>
                    </div>
                    <div className={`flex flex-col items-center gap-1 ${boardVisible !== 1 ? "invisible md:visible order-2" : "order-1"}`}>
                        <h2 className="font-bold text-3xl">{turn % 2 === 1 ? "Your Board" : "Enemy's Board"}</h2>
                        <p>Player 1's Board</p>
                        <Board id={1} 
                            mode={mode} 
                            showShips={turn % 2 === 1 && !usersSwitching} 
                            canInteract={board1Clickable}
                            reportAttack={handleAttack}
                            reportShipSunk={handleSunkShip}
                            reportAllSunk={handleGameOver}/>
                    </div>
                    <div className={`flex flex-col items-center gap-1 ${boardVisible !== 2 ? "invisible md:visible order-2" : "order-1"}`}> 
                        <h2 className="font-bold text-3xl">{turn % 2 === 0 ? "Your Board" : "Enemy's Board"}</h2>
                        <p>Player 2's Board</p>
                        <Board id={2} 
                            mode={mode} 
                            showShips={turn % 2 === 0 && !usersSwitching} 
                            canInteract={board2Clickable}
                            reportAttack={handleAttack}
                            reportShipSunk={handleSunkShip}
                            reportAllSunk={handleGameOver}/>
                    </div>
                </div>
                <div className={`${mode === "play" && "hidden"}`}>
                    <Button buttonText="Done Placing Ships" handleClick={finishPlacingShips}/>
                </div>
                <Log messages={logMessages}/>
            </div>
        </div>
    )
}

export default Game;