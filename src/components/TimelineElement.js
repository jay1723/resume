import React from "react"
import {VerticalTimelineElement}  from 'react-vertical-timeline-component';
import Chip from '@material-ui/core/Chip';

function TimelineElement(props){
    let chips = props.job.chips.map(chip => <Chip label={chip} />)
    return (
        <VerticalTimelineElement
        contentStyle={{ borderTopColor: props.theme.style.background , borderTopStyle: "solid"}}
        contentArrowStyle={{ borderRight: `7px solid  ${props.theme.style.background}` }}
        date={`${props.job.startDate} - ${props.job.endDate}`}
        iconStyle={{ background: props.theme.style.circleColor, color: '#fff', display: "flex",
        justifyContent: "center",
        alignItems: "center"}}
        icon={props.theme.icon}
      >
        {chips}
        <h2 className="is-title">{props.job.companyName}</h2>
        <h3 className="is-title">{props.job.jobTitle}</h3>
        <h4 className="vertical-timeline-element-subtitle">{props.job.jobLocation}</h4>
        <p>{props.job.jobContent}</p>
      </VerticalTimelineElement>
    );
}

export default TimelineElement