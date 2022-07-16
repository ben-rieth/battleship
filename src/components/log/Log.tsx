import LogMessage from "./LogMessage";

const Log = () => {
    return (
        <div className="border-2 border-black mx-auto min-w-fit w-2/3 max-w-2xl px-3 min-h-16 h-16 overflow-y-scroll">
            <LogMessage id={1} messageObj={{player: "Sys", text: "Game has begun"}}/>
            <LogMessage id={2} messageObj={{player: "Sys", text: "Game has begun"}}/>
            <LogMessage id={3} messageObj={{player: "Sys", text: "Game has begun"}}/>
        </div>
    )
}

export default Log;