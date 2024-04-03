import React, { useState } from "react";
import Homepage from "./Homepage";
import App from "./App";

const Decider = () => {
    const [home, setHome] = useState(true);
    return(
        <div>
            {
                (home)?
                <Homepage home = {home} setHome = {setHome} />:
                <App home = {home} setHome = {setHome}/>
            }
        </div>
    )
}

export default Decider;