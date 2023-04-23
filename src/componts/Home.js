import react from "react";
import "./home.css"

function Home(){

    return(
        <>
        <div className="home-first">
            
            <h1>
            IT Services
            </h1>
            <h3>
            We Provide Outsourced<br/>
            for Small &amp; Mid-sized Businesses
            </h3>
        </div>
        <div className="home-second">
            <section className="cont">
            <i class="fa-solid fa-copyright"></i>
            <h2>Copywriting</h2>
            <h4>
            Sample text. Click to select the text box. Click again or double click to start editing the text.
            </h4>

            </section>
            <section className="cont">
            <i class="fa-solid fa-lightbulb"></i>
            <h2>Graphic Design</h2>
            <h4>
            Sample text. Click to select the text box. Click again or double click to start editing the text.
            </h4>

            </section>
            <section className="cont">
            <i class="fa-solid fa-wifi"></i>
            <h2>Development</h2>
            <h4>
            Sample text. Click to select the text box. Click again or double click to start editing the text.
            </h4>

            </section>
            <section className="cont">
            <i class="fa-solid fa-user-group"></i>
            <h2>Logistics</h2>
            <h4>
            Sample text. Click to select the text box. Click again or double click to start editing the text.
            </h4>

            </section>
        </div>

        </>
    )
}

export default Home