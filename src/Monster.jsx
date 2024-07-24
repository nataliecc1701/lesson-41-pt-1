/** Component for when a monster comes out of the vending machine */

import { Link } from "react-router-dom";

const Monster = () => {
    return <div>
        <p>A monster emerges from the vending machine!</p>
        <p>It swipes at you with its claws for {Math.floor(Math.random()*8)+2} damage</p>
        <p><Link to={"/"}>Run away!</Link></p>
    </div>
}

export default Monster;