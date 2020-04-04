import React from "react"
import Chip from '@material-ui/core/Chip';
import { spacing } from '@material-ui/system';


const cardStyle={
    backgroundColor: "#030305",
    color: "#F0F2F7",
    border: "solid 1px #32343F"
}

function PersonalProjectTileWithButtons(props){
    let chips = props.project.chips.map(chip => <Chip p={100} color={"primary"} label={chip} style={{marginRight: "5px", marginBottom: "7px"}} />)
    return (
        <div class="tile is-parent">
            <article class="tile is-child notification" style={cardStyle}>
            <div class="content">
                {chips}
                <br></br>
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

export default PersonalProjectTileWithButtons