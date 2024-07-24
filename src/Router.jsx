/** container for all routes */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Chip from "./Chip"
import Monster from "./Monster"
import OatmealCookie from "./OatmealCookie"
import VendingMachine from "./VendingMachine"

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<VendingMachine />} />
            <Route path="/chip" element={<Chip />} />
            <Route path="/monster" element={<Monster />}/>
            <Route path="/cookie" element={<OatmealCookie />}/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
}

export default Router