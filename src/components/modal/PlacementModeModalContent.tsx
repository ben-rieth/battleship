import Button from "../button/Button";

type Props = {
    handleBtnPress : () => void;
}

const PlacementModeModalContent = ({handleBtnPress} : Props) => {
    return (
        <>
            <p className="text-center text-lg">If you just finished placement, hand the device over to the next player. No peeking!</p>
            <hr />
            <p className="text-center text-lg">If you've just received the device, press the button when you are ready to place your ships!</p>
            <Button handleClick={handleBtnPress} buttonText="Place Your Ships"/>
        </>
    )
}

export default PlacementModeModalContent;