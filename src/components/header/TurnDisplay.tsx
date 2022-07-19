import {Player} from './../../services/types/Player';

type Props = {
    player: Player
}

const TurnDisplay = ({player} : Props) =>  {
    return <h2 className="text-center text-xl">It is {player}'s turn!</h2>;
}

export default TurnDisplay;