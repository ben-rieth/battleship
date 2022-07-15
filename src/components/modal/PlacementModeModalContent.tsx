type Props = {
    handleBtnPress : () => void;
}

const PlacementModeModalContent = ({handleBtnPress} : Props) => {
    return (
        <>
            <p className="text-center text-lg">If you just finished placement, hand the device over to the next player. No peeking!</p>
            <hr />
            <p className="text-center text-lg">If you've just received the device, press the button when you are ready to place your ships!</p>
            <button 
                className="border-2 text-2xl font-bold text-sky-800 w-fit mx-auto py-2 px-8 rounded-lg hover:bg-sky-800 hover:text-white hover:"
                onClick={handleBtnPress}>Place Your Ships</button>
        </>
    )
}

export default PlacementModeModalContent;