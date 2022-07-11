import { DraggableData, Rnd } from "react-rnd";
import ShipData from "../../services/types/ShipData";

import HitIcon from './../../assets/images/hit.svg';

type ShipProps = {
    ship: ShipData;
    draggable?: boolean;
    doubleClickHandler?: () => void;
    shipDropHandler?: (_e: any, data: DraggableData) => void;
}

const Ship = ({ship, draggable=true, doubleClickHandler, shipDropHandler} : ShipProps) => {

    return (
        <Rnd enableResizing={false}
            disableDragging={!draggable} 
            bounds="parent"
            dragGrid={[48, 48]} 
            position={{x: ship.boardX * 48, y: ship.boardY * 48}}
            onDragStop={shipDropHandler}
        >

            <div data-testid={`ship-${ship.type}`} className={`outline outline-4 outline-offset-[-3px] ${ship.color} ${ship.currentDirection === "horizontal" ? "flex" : ""} ${ship.error ? "animate-shake-no" : ""}`}>
                {ship.status.map((pos, index) => {
                    return (
                        <div key={index} 
                            className={`w-12 h-12 ${ship.color}`}
                            onDoubleClick={doubleClickHandler}
                            data-testid="compartment"
                        >
                            {pos === -1 ? <img src={HitIcon} alt="hit" /> : ""}
                        </div>)
                })}
            </div>
        </Rnd>
    )
}

export default Ship;