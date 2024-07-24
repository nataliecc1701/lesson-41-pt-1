/** The vending machine home page */

import { Link } from "react-router-dom"

const VendingMachine = () => {
    return <div>
        <p>Vending Machine</p>
        <p>Please make your selection</p>
        <ul>
            <li><Link to="/chip">Chip</Link></li>
            <li><Link to="/monster">Monster</Link></li>
            <li><Link to="/cookie">Oatmeal Cookie</Link></li>
        </ul>
    </div>
}

export default VendingMachine