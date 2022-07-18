type Props = {
    buttonText: string;
    handleClick: () => void;
}

const AttackButton = ({buttonText, handleClick} : Props) => {

    return (
        <button 
            className={`py-2 px-5 border-4 border-sky-800 rounded-xl min-w-fit mx-auto bg-white text-red-500
                        hover:bg-red-500 hover:text-white`}
            onClick={handleClick}
        >
            <p className={`text-2xl font-semibold`}>{buttonText}</p>
            
        </button>
    )
}

export default AttackButton;