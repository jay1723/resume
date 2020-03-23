import React from 'react'

function Hero(props){
    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                <h1 className="title">
                    {props.name}
                </h1>
                <h2 className="subtitle">
                    {props.currentJob}
                </h2>
                </div>
            </div>
        </section>
    );
}

export default Hero;