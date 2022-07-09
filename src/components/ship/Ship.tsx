import { useEffect, useState } from "react";

import HitIcon from './../../assets/images/hit.svg';

type ShipProps = {
    length: number;
}

const Ship = ({length} : ShipProps) => {
    const [ship, setShip] = useState<number[]>(Array(length).fill(0))

    const hitShip = (hitIndex: number) => {
        setShip(ship.map((pos, index) => {
            if (index === hitIndex) {
                return -1;
            }
            return pos;
        }))
    }

    useEffect(() => {
        const isSunk = () : boolean => {
            return ship.every((pos) => pos === -1);
        }

        if(isSunk()) {
            console.log("Ship Sunk");
        }

    }, [ship])

    return (
        <div data-testid="ship">
            {ship.map((pos, index) => {
                return (
                    <div key={index} 
                        className="w-12 h-12 bg-green-300 outline outline-[3px] outline-green-700 mt-px ml-px"
                        onClick={() => hitShip(index)}
                        data-testid="compartment"
                    >
                        {pos === -1 ? <img src={HitIcon} alt="hit" /> : ""}
                    </div>)
            })}
        </div>
    )
}

export default Ship;