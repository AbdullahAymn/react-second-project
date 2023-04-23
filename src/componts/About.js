import react, { useState } from "react";
import "./about.css";

function About(){
    const[over,setOver]=useState(true);
    const[founder,setFounder]=useState();
    const[mission,setMission]=useState();

    const overfun= () =>{
        setOver(true);
        setFounder()
        setMission()


    }
    const founderfun= () =>{
        setOver();
        setFounder(true)
        setMission()


    }
    const missionfun= () =>{
        setOver();
        setFounder()
        setMission(true)


    }


    return(
        <>
        <div className="aboutcont"  id="about">
            <h1>
                About Us
            </h1>
            <button className={over ? "aboutactiv aboutbtn" : "aboutbtn"} onClick={overfun}>Overview</button>
            <button className={founder ? "aboutactiv aboutbtn" : "aboutbtn"} onClick={founderfun}>Founder</button>
            <button className={mission ? "aboutactiv aboutbtn" : "aboutbtn"} onClick={missionfun}>Mission</button>
            {over && <div className="aboutsecondcount overcount">
                <h1>Brave is an innovative web solution, which combines captivating design and flawless functionality in a multipurpose HTML template.</h1>
                <p className="bl">Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p className="nbl">Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                </div>
                }
                {founder && <div className="aboutsecondcount">
                <p className="nbl">Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p className="nbl">Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                </div>
                }
                {mission && <div className="aboutsecondcount">
                <h1>Be The First To Review This Product!</h1>
                <p className="nbl">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                <button>Write Proudct Review</button>

                </div>
                }

        </div>
        </>
    )
}

export default About