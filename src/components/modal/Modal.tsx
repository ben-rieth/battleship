type ModalProps = {
    content: JSX.Element;
    isOpen: boolean;
}

const Modal = ({content, isOpen}: ModalProps) => {

    return (
        <div className={`fixed z-50 left-0 top-0 w-screen h-screen bg-black/50 ${!isOpen && "hidden"}`}>
            <div className="flex flex-col gap-3 bg-white rounded w-1/2 min-w-fit sm:min-w-0 max-w-xl mx-auto my-16 p-5">
                {content}
            </div>
        </div>
    )
}

export default Modal;