import React from "react"

const textcolor = {
    color: "#F0F2F7"
}

function MediumHero(props){
    return (
    <section className="hero" style={props.style}>
    <div className="hero-body">
        <div className="container">
        <h1 className="title" style={textcolor}>
            {props.title}
        </h1>
        <h2 className="subtitle" style={textcolor}>
            {props.subtitle}
      </h2>
    </div>
  </div>
</section>
    )
}

export default MediumHero