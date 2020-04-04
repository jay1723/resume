import React from "react"
import PersonalProjectTileWithButtons from "./PersonalProjectTileWithButtons"
import {graphicalGenome, fastannotation, rrt, resume, prerequisite, googlecalendar} from "../constants.js"
import PersonalProjectTileWithImage from "./PersonalProjectTileWithImage"
const style={
    backgroundColor: "#0E0F19"
}

const cardStyle={
    backgroundColor: "#030305",
    color: "#F0F2F7",
    border: "solid 1px #32343F"
}
function PersonalProject(props){
    return (
        <div style={style}>
            <div className="columns">
                {/* <div className="column is-one-fifth"></div> */}
                <div className="column">
                <div class="tile is-ancestor" style={{marginLeft: "10%", marginRight: "10%"}}>
                    <div class = "tile is-vertical">
                    <PersonalProjectTileWithButtons project={graphicalGenome} />
                    <PersonalProjectTileWithButtons project={fastannotation} />
                    </div>
                    <div class = "tile is-vertical">
                    <PersonalProjectTileWithButtons project={rrt} />
                    <PersonalProjectTileWithButtons project={resume} />
                    </div>
                    <div class = "tile is-vertical">
                    <PersonalProjectTileWithButtons project={prerequisite} />
                    <PersonalProjectTileWithButtons project={googlecalendar} />
                    </div>
                    </div>
                </div>
                {/* <div className="column is-one-fifth"></div> */}
            </div>
        </div>
    )
}

export default PersonalProject