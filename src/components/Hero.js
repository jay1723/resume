import React from 'react'
import jay from "../images/jay.jpg"
const herostyle = {
    backgroundColor: "#030305",
    backgroundImage: "linear-gradient(#030305, #0E0F19)"
}

const textcolor = {
    color: "#F0F2F7",
    marginLeft: "15%"
}

const imgdivstyle={
    position: "relative",
    width: "450px",
    height: "450px",
    overflow: "hidden",
    borderRadius: "50%",
    marginRight: "15%"
}

const imgstyle={
    width:"100%",
    height: "auto",
    
}
function Hero(props){
    return (
        <section className="hero is-fullheight black-background" style={herostyle}>
            <div className="hero-body">
                <div className="container">
                <h1 className="title" style={textcolor}>
                    {props.name}
                </h1>
                <h2 className="subtitle" style={textcolor}>
                    {props.currentJob}
                </h2>
                </div>
                <div style={imgdivstyle}>
                    <img src={jay} style={imgstyle} />
                </div>
            </div>
        </section>
    );
}

export default Hero;