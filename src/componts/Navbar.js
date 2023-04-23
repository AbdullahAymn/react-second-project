import react, { useState } from "react";
import "./nav.css";

function Navbar(){
    const[click , setClick] =useState(false);
    function showclose(){
        setClick(!click)
    }


    return(
        <>
            <div className="nav-but">
            <i class={click?"del":"fa fa-solid fa-bars"} onClick={showclose}></i>
            </div>
            <div className={click ? "nav-contat active" :"nav-contat"}>
                <section className="icon">
                <i class="fa-solid fa-xmark" onClick={showclose}></i>
                </section>

                <section className="items">
                    <a href="#" onClick={showclose}>Home</a>
                    <a href="#about" onClick={showclose}>About</a>
                    <a href="#contact" onClick={showclose}>Contat</a>
                </section>
            </div>
        </>
    )
}

export default Navbar