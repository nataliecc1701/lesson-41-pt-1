/** component for getting an oatmeal cookie from the vending machine */

import { Link } from "react-router-dom";

const OatmealCookie = () => {
    return <div>
        <p>Room-temperature oatmeal cookie, with extra preservatives for shelf stability</p>
        <p>Made with extra raisins, just for you!</p>
        <Link to={"/"}>Go Back</Link>
    </div>
}

export default OatmealCookie