import React from "react"
import {VerticalTimelineElement}  from 'react-vertical-timeline-component';

function EducationTimelineElement(props){
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
        <h2 className="is-title" style={{color: "#F0F2F7"}}>{props.job.companyName}</h2>
        <h3 className="is-title">{props.job.jobTitle}</h3>
        <h4 className="vertical-timeline-element-subtitle">{props.job.jobLocation}</h4>
        <p>{props.job.jobContent}</p>
        <br></br>
        <div className="columns">
            <div className="column"></div>
            <div className="column">
            <a href={props.job.whitepaper} className="button is-link is-outlined">White-Paper</a>
            </div>
            <div className = "column" >
            <a href={props.job.repo} className="button is-link is-outlined">Code Repository</a>
            </div>
            <div className="column"></div>
        </div>
        </VerticalTimelineElement>
    )
}

export default EducationTimelineElement