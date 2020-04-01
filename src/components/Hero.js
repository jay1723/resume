import React from 'react'

const herostyle = {
    backgroundColor: "#030305",
    backgroundImage: "linear-gradient(#030305, #0E0F19)"
}

const textcolor = {
    color: "#F0F2F7"
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
            </div>
        </section>
    );
}

export default Hero;