import React from "react"

const cardStyle={
    backgroundColor: "#030305",
    color: "#F0F2F7",
    border: "solid 1px #32343F"
}

function PersonalProjectTileWithImage(props){
    return (
        <div class="tile is-parent is-vertical is-8">
            <article class="tile is-child notification" style={cardStyle}>
            <div class="content">
                <p class="title">{props.project.title}</p>
                <p class="subtitle">{props.project.subtitle}</p>
                <div class="content">
                    {props.project.content}
                </div>
            </div>
            <div className="columns">
            <div className="column"></div>
            <div className="column">
            <a href={props.project.repo} className="button is-link is-outlined">Repository</a>
            </div>
            <div className="column"></div>
        </div>
            </article>
            
        </div>
    )
}

export default PersonalProjectTileWithImage