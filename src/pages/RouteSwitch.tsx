import { BrowserRouter, Route, Routes } from "react-router-dom"
import Game from "../components/game/Game";
import HomePage from "./home/HomePage";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<HomePage />}/>
                <Route path="/game/one-device" element={<Game />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;