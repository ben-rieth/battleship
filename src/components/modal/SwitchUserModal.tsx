type SwitchModalProps = {
    onClose: () => void;
}

const SwitchUserModal = ({onClose}: SwitchModalProps) => {

    const handleModalClose = () => {
        onClose();
    }

    return (
        <div className="">
            <div className="flex flex-col">
                <p>Press this when you are ready to switch to the next user!</p>
                <button onClick={handleModalClose}></button>
            </div>
        </div>
    )
}

export default SwitchUserModal;