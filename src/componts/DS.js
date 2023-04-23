import react from "react";
import "./ds.css" ;

function Ds(){
    const p1 = require('./images/p1.jpg')
    const p2 = require('./images/p2.jpg')
    const p3 = require('./images/p3.jpg')

    function Us({srs , title , text}){
        return(
            <>
            <div className="dsitem">
                <img src={srs} />
                <h2>{title}</h2>
                <p>{text}</p>
                <button>More</button>

            </div>
            </>
        )
    }
    return(
        <>
        <div className="dscont">
            <div className="top">
                <h1>Development Services</h1>
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            </div>
            <div className="dsitems">
                <Us
                    srs={p1}
                    title="App Development"
                    text="Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident."
                />
                <Us
                    srs={p2}
                    title="Mobility Services"
                    text="Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident."
                />
                <Us
                    srs={p3}
                    title="Consulting"
                    text="Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident."
                />
                <Us
                    srs={p1}
                    title="App Team Extension
                    Sample text. Click to select the text"
                    text="Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident."
                />
                <Us
                    srs={p2}
                    title="Applications"
                    text="Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident."
                />
                <Us
                    srs={p3}
                    title="24/7 Support"
                    text="Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident."
                />

            </div>

        </div>
        </>
    )
}

export default Ds