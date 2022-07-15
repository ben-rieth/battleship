type SwitchModalProps = {
    content: JSX.Element;
    isOpen: boolean;
}

const SwitchUserModal = ({content, isOpen}: SwitchModalProps) => {

    return (
        <div className={`fixed z-50 left-0 top-0 w-screen h-screen bg-black/50 ${!isOpen && "hidden"}`}>
            <div className="flex flex-col gap-3 bg-white rounded w-1/3 mx-auto my-16 p-5">
                {content}
            </div>
        </div>
    )
}

export default SwitchUserModal;