type Props = {
    modeName: string;
    subtitle: string;
    imgURL: string;
}

const GameModeButton = ({modeName, subtitle, imgURL} : Props) => {
    return (
        <div className="w-56 flex flex-col items-center border-4 border-sky-800 rounded-lg p-3 hover:bg-sky-600 text-sky-800 hover:text-yellow-500 cursor-pointer">
            <h2 className="text-2xl text-center font-semibold">{modeName}</h2>
            <p className="text-lg text-center font-medium">{subtitle}</p>
            <img src={imgURL} alt="" className="w-24 h-24 my-6"/>
        </div>
    );
}

export default GameModeButton;