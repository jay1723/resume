import React from "react"
import Chip from '@material-ui/core/Chip';
import { spacing } from '@material-ui/system';
import "./PersonalProjectTileWithButtons.css"


const cardStyle={
    backgroundColor: "#030305",
    color: "#F0F2F7",
    border: "solid 1px #32343F"
}

function PersonalProjectTileWithButtons(props){
    let chips = props.project.chips.map(chip => <Chip p={100} color={"primary"} label={chip} style={{marginRight: "5px", marginBottom: "7px"}} />)
    return (
        <div className="tile is-parent">
            <article className="tile is-child notification shadow" style={cardStyle}>
            <div className="content">
                {chips}
                <br></br>
                <p className="title">{props.project.title}</p>
                <p className="subtitle">{props.project.subtitle}</p>
                <div className="content">
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

export default PersonalProjectTileWithButtons