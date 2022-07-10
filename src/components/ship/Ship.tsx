import { Rnd } from "react-rnd";
import ShipData from "../../services/types/ShipData";

import HitIcon from './../../assets/images/hit.svg';

type ShipProps = {
    ship: ShipData;
    onClick?: () => void;
    onShipDrop?: () => void;
}

const Ship = ({ship, onClick=() => {}, onShipDrop=() => {}} : ShipProps) => {

    return (
        <Rnd enableResizing={false} 
                dragGrid={[48, 48]} 
                default={{x: ship.boardX * 48, y: ship.boardY * 48, width: 'auto', height: 'auto'}}
                onDragStop={onShipDrop}>
            <div data-testid="ship" className={`${ship.currentDirection === "horizontal" && "flex"}`}>
                {ship.status.map((pos, index) => {
                    return (
                        <div key={index} 
                            className={`w-12 h-12 outline outline-2 bg-${ship.color}-300 outline-${ship.color}-700 opacity-50`}
                            onClick={onClick}
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