import react from "react";
import "./coma.css";

function Coma(){
    const i1 = require('./images/1.png')
    const i2 = require('./images/2.png')
    const i3 = require('./images/3.png')
    const i4 = require('./images/4.png')
    const i5 = require('./images/5.png')
    const i6 = require('./images/6.png')

    return(

        <>
        <div className="comacont">
            <img src={i1} />
            <img src={i2} />
            <img src={i3} />
            <img src={i4} />
            <img src={i5} />
            <img src={i6} />

        </div>
        </>
    )
}

export default Coma