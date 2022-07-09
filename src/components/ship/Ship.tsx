type ShipProps = {
    length: number;
}

const Ship = ({length} : ShipProps) => {
    return (
        <div data-testid="ship">
            {Array(length).fill("0").map((_, index) => {
                return <div key={index} className="w-12 h-12 bg-green-300 outline outline-2 outline-green-700 mt-px ml-px"/>
            })}
        </div>
    )
}

export default Ship;