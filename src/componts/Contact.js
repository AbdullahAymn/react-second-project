import react from "react";
import "./contact.css"

function Contact(){

    return(
        <>
        <div className="contactcont" id="contact">
            
            <div className="contactitems">
            <h1>Contact Us</h1>
                <form>
                    <section>
                        <label>Address</label>
                        <input type="text" placeholder=" " ></input>

                    </section>
                    <section>
                        <label>Name</label>
                        <input type="text" placeholder="Enter your Name" ></input>

                    </section>
                    <section>
                        <label>Phone</label>
                        <input type="text" placeholder="Enter your Phone Num" ></input>

                    </section>
                    <section>
                        <label>Date</label>
                        <input type="date" placeholder="mm/dd/yy" ></input>

                    </section>
                    <section className="mess">
                        <label>Message</label>
                        <textarea placeholder="Enter your meesge" ></textarea>

                    </section>

                    <button>Send</button>

                </form>

            </div>

        </div>
        
        </>
    )
}

export default Contact