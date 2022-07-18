type Props = {
    handleClick: () => void;
}

const AttackButton = ({handleClick} : Props) => {

    return (
        <button 
            className={`py-2 px-5 border-4 border-red-500 rounded-xl min-w-fit mx-auto bg-white text-red-500
                        hover:bg-red-500 hover:text-white`}
            onClick={handleClick}
            data-cy="attack-btn"
        >
            <p className={`text-2xl font-semibold`}>Attack!</p>
            
        </button>
    )
}

export default AttackButton;