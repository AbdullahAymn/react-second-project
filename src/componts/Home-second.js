import react from "react";
import "./home-second.css";
import {img1} from "./img1.jpeg";



function HomeSecond(){

    const logo = require('./img1.jpeg')

    
    return(
        <>
        <div className="cont">
            <div className="first itemcont">
                <h1>Preparing For Your Success Provide Best IT Solutions.</h1>
                <button>More</button>
            </div>
            <div className="second itemcont">
            <img src={logo} />
            <h3>
            Top Ranked Program
            </h3>
            <p>
            In mollis nunc sed id semper risus in hendrerit gravida. Aliquet enim tortor at auctor urna nunc id cursus. Risus at ultrices mi tempus imperdiet. Sapien pellentesque habitant morbi tristique senectus et netus. Id cursus metus aliquam eleifend mi in. Quis commodo odio aenean sed.
            </p>
            </div>

        </div>
        </>
    )
}

export default HomeSecond