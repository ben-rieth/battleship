import { Message } from "../../services/types/Message";
import LogMessage from "./LogMessage";

type Props = {
    messages: Message[];
}

const Log = ({messages} : Props) => {
    return (
        <div className="border-2 border-black mx-auto min-w-fit w-2/3 max-w-2xl px-3 min-h-16 h-16 overflow-y-scroll">
            {messages.map((message, index) => {
                return <LogMessage key={`log-${index+1}`} id={index + 1} messageObj={message} />
            })}
        </div>
    )
}

export default Log;