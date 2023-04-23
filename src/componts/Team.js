import react from "react";
import "./team.css"

function Team(){
    const f1 = require('./images/f1.jpg')
    const f2 = require('./images/f2.jpg')
    const Teamitem = ({srs ,title ,name}) =>{
        return(
            <>
            <div className="teamitem">
                <img src={srs} />
                <section>
                <h3>{title}</h3>
                <h2>{name}</h2>
                <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum

</p>
            <a href="https://www.facebook.com/Abdullah.Ayman.Yehya/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/3bdullah_ayman/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                </section>
            </div>
            </>
        )
    }

    return(
        <>
        <div className="teamcoun">
            <h1>Our Team</h1>
            <div className="teamitems">
                <Teamitem 
                srs={f1}
                title="creative leader"
                name="Bob Brown"

                />

                <Teamitem 
                srs={f2}
                title="sales manager"
                name="Mary Smith"

                />

                <Teamitem 
                srs={f1}
                title="manager"
                name="Jonh Rich"

                />
                <Teamitem 
                srs={f2}
                title="
                chief accountant"
                name="Nat Reynolds"

                />

            </div>

        </div>
        </>
    )
}

export default Team