import { useEffect, useState } from "react";
import { Rnd } from "react-rnd";

import HitIcon from './../../assets/images/hit.svg';

type ShipProps = {
    length: number;
    color: "red" | "orange" | "yellow" | "green" | "blue";
}

const Ship = ({length, color,} : ShipProps) => {
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
        <Rnd enableResizing={false} 
                dragGrid={[48, 48]} 
                default={{x: 0, y: 0, width: 'auto', height: 'auto'}}>
            <div data-testid="ship" className="flex">
                {ship.map((pos, index) => {
                    return (
                        <div key={index} 
                            className={`w-12 h-12 outline outline-2 bg-${color}-300 outline-${color}-700`}
                            //onClick={() => hitShip(index)}
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