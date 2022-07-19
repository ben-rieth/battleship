import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./home/HomePage";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;