import { useState } from "react";
import { DraggableData, Rnd } from "react-rnd";
import ShipData from "../../services/types/ShipData";
import { getGridSizeBasedOnScreenWidth } from "../../utils/ScreenUtils";

import HitIcon from './../../assets/images/hit.svg';

type ShipProps = {
    ship: ShipData;
    draggable?: boolean;
    clickHandler?: () => void;
    shipDropHandler?: (data: DraggableData) => void;
}

const Ship = ({ship, draggable=true, 
                clickHandler=() => { /* empty handler */ }, 
                shipDropHandler=() => {/* empty handler */ }} : ShipProps) => {

    const [isBeingDragged, setIsBeingDragged] = useState<boolean>(false);

    const gridSize = getGridSizeBasedOnScreenWidth();

    const duringDrag = () => {
        setIsBeingDragged(true)
    }

    const dragEnd = (_e: any, data: DraggableData) => {
        setTimeout(() => setIsBeingDragged(false), 0);
        shipDropHandler(data);
    }

    const processClickIfNotDrag = () => {
        if (!isBeingDragged) {
            clickHandler();
        }
    }

    return (
        <Rnd enableResizing={false}
            disableDragging={!draggable} 
            bounds="parent"
            dragGrid={[gridSize, gridSize]} 
            position={{x: ship.boardX * gridSize, y: ship.boardY * gridSize}}
            onDrag={duringDrag}
            onDragStop={dragEnd}
            className={`${!draggable && "pointer-events-none"} ${isBeingDragged && "z-50"}`}
        >

            <div data-testid={`ship-${ship.type}`} 
                className={`outline outline-4 outline-offset-[-3px] ${ship.color}
                                ${ship.currentDirection === "horizontal" ? "flex" : ""} 
                                ${ship.error ? "animate-shake-no" : ""} `}
            >

                {ship.status.map((pos, index) => {
                    return (
                        <div key={index} 
                            className={`w-6 h-6 xs:w-9 xs:h-9 lg:w-12 lg:h-12 flex items-center justify-center ${ship.color}`}
                            onClick={processClickIfNotDrag}
                            onTouchEnd={processClickIfNotDrag}
                            data-testid="compartment"
                        >
                            {pos === -1 ? <img src={HitIcon} alt="hit" className="w-10 h-10"/> : ""}
                        </div>)
                })}

            </div>
        </Rnd>
    )
}

export default Ship;