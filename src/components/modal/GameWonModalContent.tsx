import { Player } from "../../services/types/Player";
import Button from "../button/Button";

type Props = {
    winner: Player;
}

const GameWonModalContent = ({winner} : Props) => {
    return (
        <>
            <p className="text-center text-2xl">{winner} has won!</p>
            <Button 
                buttonText="Rematch" 
                handleClick={()=> console.log("click")} />
            <Button 
                buttonText="New Game" 
                handleClick={()=> console.log("click")} />
        </>
    )
}

export default GameWonModalContent;