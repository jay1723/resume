import React from "react"
import EducationTimelineElement from "./EducationTimelineElement"
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import TimelineElement from "./TimelineElement"
import theme from "../theme.js"
import {uncGrad, uncUndergrad} from "../constants.js"

const backgroundStyle = {
    backgroundColor: "#202334"
}
function EducationTimeline(props){
    return (
        <div style={backgroundStyle}>
    <VerticalTimeline animate={false}>
        <EducationTimelineElement theme={theme.unc} job={uncGrad} />
        <TimelineElement theme={theme.unc} job={uncUndergrad} />
    </VerticalTimeline>
    </div>
    )
}

export default EducationTimeline