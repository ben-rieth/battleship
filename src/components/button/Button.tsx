type Props = {
    buttonText: string;
    handleClick: () => void;
}

const Button = ({buttonText, handleClick} : Props) => {

    return (
        <button 
            className={`py-2 px-5 border-4 border-sky-800 rounded-xl min-w-fit mx-auto bg-sky-800 text-white
                        hover:bg-white hover:text-sky-800`}
            onClick={handleClick}
        >
            <p className={`text-2xl font-semibold`}>{buttonText}</p>
            
        </button>
    )
}

export default Button;