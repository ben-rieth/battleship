import { Player } from "../../services/types/Player";

type Props = {
    winner: Player;
}

const GameWonModalContent = ({winner} : Props) => {
    return (
        <>
            <p className="text-center text-lg">{winner} has won!</p>
            <button>Rematch</button>
            <button>New Game</button>
        </>
    )
}

export default GameWonModalContent;