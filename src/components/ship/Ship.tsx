import { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import ShipData from "../../services/types/ShipData";

import HitIcon from './../../assets/images/hit.svg';

type ShipProps = {
    ship: ShipData;
    onClick?: () => void;
}

const Ship = ({ship, onClick} : ShipProps) => {
    // const [ship, setShip] = useState<number[]>(Array(length).fill(0))

    // const hitShip = (hitIndex: number) => {
    //     setShip(ship.map((pos, index) => {
    //         if (index === hitIndex) {
    //             return -1;
    //         }
    //         return pos;
    //     }))
    // }

    // useEffect(() => {
    //     const isSunk = () : boolean => {
    //         return ship.every((pos) => pos === -1);
    //     }

    //     if(isSunk()) {
    //         console.log("Ship Sunk");
    //     }

    // }, [ship])

    return (
        <Rnd enableResizing={false} 
                dragGrid={[48, 48]} 
                default={{x: ship.boardX * 48, y: ship.boardY * 48, width: 'auto', height: 'auto'}}>
            <div data-testid="ship" className={`${ship.currentDirection === "horizontal" && "flex"}`}>
                {ship.status.map((pos, index) => {
                    return (
                        <div key={index} 
                            className={`w-12 h-12 outline outline-2 bg-${ship.color}-300 outline-${ship.color}-700`}
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