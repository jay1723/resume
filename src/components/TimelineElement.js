import React from "react"
import {VerticalTimelineElement}  from 'react-vertical-timeline-component';
import Chip from '@material-ui/core/Chip';
import {font} from "../constants.js"


function TimelineElement(props){
  let chips = props.job.chips.map(chip => <Chip label={chip} style={{ marginRight: "5px", marginBottom: "7px" }}/>)
    return (
        <VerticalTimelineElement
        contentStyle={{backgroundColor: "#08090F", color: "#F0F2F7", borderStyle: "solid", borderWidth: "1px", borderColor: "#32343F"}}
        contentArrowStyle={{ borderRight: `7px solid #F0F2F7` }}
        date={`${props.job.startDate} - ${props.job.endDate}`}
        iconStyle={{ background: props.theme.style.circleColor, color: '#fff', display: "flex",
        justifyContent: "center",
        alignItems: "center"}}
        icon={props.theme.icon}
      >
        {chips}
        <h2 className="is-title" style={font}>{props.job.companyName}</h2>
        <h3 className="is-title" style={font}>{props.job.jobTitle}</h3>
        <h4 className="vertical-timeline-element-subtitle" style={font}>{props.job.jobLocation}</h4>
        <p>{props.job.jobContent}</p>
      </VerticalTimelineElement>
    );
}

export default TimelineElement