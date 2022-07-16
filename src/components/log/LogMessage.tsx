import { Message } from "../../services/types/Message";


type Props = {
    id: number;
    messageObj: Message;
}

const LogMessage = ({id, messageObj} : Props) => {
    return (
        <p>
            ({id})&nbsp;
            <span className="font-bold">{messageObj.player}</span>
            :&nbsp;{messageObj.text}
        </p>
    )
}

export default LogMessage;