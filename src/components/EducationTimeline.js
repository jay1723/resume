import React from "react"
import EducationTimelineElement from "./EducationTimelineElement"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import TimelineElement from "./TimelineElement"
import theme from "../theme.js"
import {uncGrad, uncUndergrad} from "../constants.js"
import StarIcon from '@material-ui/icons/Star';

const backgroundStyle = {
    backgroundColor: "#202334"
}
function EducationTimeline(props){
    return (
        <div style={backgroundStyle}>
    <VerticalTimeline animate={false}>
        <EducationTimelineElement theme={theme.unc} job={uncGrad} />
        <TimelineElement theme={theme.unc} job={uncUndergrad} />
        <VerticalTimelineElement
                    iconStyle={{ background: '#202334', color: '#fff' }}
            icon={<StarIcon />}
        />
    </VerticalTimeline>
    </div>
    )
}

export default EducationTimeline