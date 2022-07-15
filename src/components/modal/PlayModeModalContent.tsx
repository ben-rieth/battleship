type Props = {
    handleBtnPress : () => void;
}

const PlayModeModalContent = ({handleBtnPress} : Props) => {
    return (
        <>
            <p className="text-center text-lg">If you just finished your turn, hand the device over to the next player. No peeking!</p>
            <hr />
            <p className="text-center text-lg">If you've just received the device, press the button when you are ready to attack!</p>
            <button 
                className="border-2 text-2xl font-bold text-red-500 w-fit mx-auto py-2 px-8 rounded-lg hover:bg-red-500 hover:text-white hover:"
                onClick={handleBtnPress}>Attack!</button>
        </>
    );
}

export default PlayModeModalContent;