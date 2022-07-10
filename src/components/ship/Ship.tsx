import { DraggableData, Rnd } from "react-rnd";
import ShipData from "../../services/types/ShipData";

import HitIcon from './../../assets/images/hit.svg';

type ShipProps = {
    ship: ShipData;
    doubleClickHandler?: () => void;
    shipDropHandler?: (_e: any, data: DraggableData) => void;
}

const Ship = ({ship, doubleClickHandler=() => {}, shipDropHandler=() => {}} : ShipProps) => {

    return (
        <Rnd enableResizing={false} 
                bounds="parent"
                dragGrid={[48, 48]} 
                position={{x: ship.boardX * 48, y: ship.boardY * 48}}
                onDragStop={shipDropHandler}>
            <div data-testid="ship" className={`${ship.currentDirection === "horizontal" && "flex"}`}>
                {ship.status.map((pos, index) => {
                    return (
                        <div key={index} 
                            className={`w-12 h-12 outline outline-2 bg-${ship.color}-300 outline-${ship.color}-700 opacity-50`}
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