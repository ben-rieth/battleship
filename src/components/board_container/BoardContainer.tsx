type Props = {
    id: number;
    board: JSX.Element;
    isHidden: boolean;
    isEnemyBoard: boolean;
}

const BoardContainer = ({id, board, isHidden, isEnemyBoard} : Props) => {

    const player = id === 1 ? "Player 1" : "Player 2";
    return (
        <div className={`flex flex-col items-center gap-1 ${isHidden? "invisible md:visible order-2" : "order-1"}`}>
            <h2 className="font-bold text-3xl">{isEnemyBoard ? "Enemy's Board" : "Your Board"}</h2>
            <p>{player}</p>
            {board}
        </div>
    )
}

export default BoardContainer;