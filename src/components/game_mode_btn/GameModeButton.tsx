type Props = {
    modeName: string;
    subtitle: string;
    imgURL: string;
}

const GameModeButton = ({modeName, subtitle, imgURL} : Props) => {
    return (
        <div className="flex flex-col items-center">
            <h2>{modeName}</h2>
            <p>{subtitle}</p>
            <img src={imgURL} alt="" />
        </div>
    );
}

export default GameModeButton;