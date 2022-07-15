type SwitchModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const SwitchUserModal = ({isOpen, onClose}: SwitchModalProps) => {

    const handleModalClose = () => {
        onClose();
    }

    return (
        <div className={`fixed z-50 left-0 top-0 w-screen h-screen bg-black/50 ${!isOpen && "hidden"}`}>
            <div className="flex flex-col gap-3 bg-white rounded w-1/3 mx-auto my-16 p-5">
                <p className="text-center text-lg">If you just attacked, hand the device over to the next player. No peeking!</p>
                <hr />
                <p className="text-center text-lg">If you've just received the device, press the button when you are ready for your turn!</p>
                <button 
                    className="border-2 text-2xl font-bold text-red-500 w-fit mx-auto py-2 px-8 rounded-lg hover:bg-red-500 hover:text-white hover:"
                    onClick={handleModalClose}>Attack!</button>
            </div>
        </div>
    )
}

export default SwitchUserModal;