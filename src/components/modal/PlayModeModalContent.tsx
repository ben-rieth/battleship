import AttackButton from "../button/AttackButton";

type Props = {
    handleBtnPress : () => void;
}

const PlayModeModalContent = ({handleBtnPress} : Props) => {
    return (
        <>
            <p className="text-center text-lg">If you just finished your turn, hand the device over to the next player. No peeking!</p>
            <hr />
            <p className="text-center text-lg">If you've just received the device, press the button when you are ready to attack!</p>
            <AttackButton handleClick={handleBtnPress} />
        </>
    );
}

export default PlayModeModalContent;