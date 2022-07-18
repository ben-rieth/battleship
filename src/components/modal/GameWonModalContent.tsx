import { Player } from "../../services/types/Player";

type Props = {
    winner: Player;
}

const GameWonModalContent = ({winner} : Props) => {
    return (
        <>
            <p>{winner} has won!</p>
        </>
    )
}

export default GameWonModalContent;