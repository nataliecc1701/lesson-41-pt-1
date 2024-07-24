/** component for when you go to the vending machine to get chipped */

import { Link } from "react-router-dom";

const Chip = () => {
    return <div>
        <p>You have been chipped</p>
        <p>Now any veterinarian will be able to send you home</p>
        <Link to={"/"}>Go back</Link>
    </div>
}

export default Chip;