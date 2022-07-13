import { useState } from "react";

type SwitchProps = {
    leftBtnText: string;
    rightBtnText: string;
    handleClick?: () => void;
}

const Switch = ({leftBtnText, rightBtnText, 
                    handleClick= () => {/* empty handler */}}: SwitchProps) => {

    const [active, setActive] = useState<string>("left");

    const onLeftClick = () => {
        if (active !== "left") {
            setActive("left");
            handleClick();
        }
    }

    const onRightClick = () => {
        if (active !== "right") {
            setActive("right")
            handleClick();
        }
    }

    return (
        <div className="flex items-center justify-center">
            <button 
                onClick={onLeftClick}
                className={`w-1/2 p-3 text-white text-xl font-semibold 
                            ${active === "left" ? "bg-sky-800" : "bg-slate-400"}`}
            >
                {leftBtnText}
            </button>

            <button 
                onClick={onRightClick}
                className={`w-1/2 p-3 text-white text-xl font-semibold 
                            ${active === "right" ? "bg-sky-800" : "bg-slate-400"}`}
            >
                {rightBtnText}
            </button>
        </div>
    )
}

export default Switch;