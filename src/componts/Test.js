import react from "react";
import "./test.css";




function Test(){

    const img1 = require('./images/im2.jpeg')

    
    return(
        <>
        <div className="testcont">
            <div className="testfirst">
                <h1>Testimonials</h1>
                <p>We offer many weekly exercise classes including Aqua Fitness, Body Sculpting, Boot Camps, Pilates, Group Cycle, Tai Chi, Yoga, and Zumba.</p>
                <img src={img1} />
            </div>
            <div className="testsecond">
            <i class="fa-brands fa-creative-commons"></i>
            <p>Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. A lacus vestibulum sed arcu non. Dolor magna eget est lorem ipsum dolor sit amet consectetur.</p>

            </div>

        </div>
        </>
    )
}

export default Test