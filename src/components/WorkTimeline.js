
import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import TimelineElement from "./TimelineElement"
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from "@material-ui/icons/Work"
import Apple from "@material-ui/icons/Apple"
import theme from "../theme.js";

import "./WorkTimeline.css"
import { fullName,currentJob, appleJobObj, microsoftJobObj, gradJobObj, capOneJobObj, sasJobObj, dzoneJobObj } from '../constants';


function WorkTimeline(props){
    return (
    <VerticalTimeline>
        <TimelineElement theme={theme.apple} job={appleJobObj} />
        <TimelineElement theme={theme.unc} job={gradJobObj} />
        <TimelineElement theme={theme.microsoft} job={microsoftJobObj} />
        <TimelineElement theme={theme.capone} job={capOneJobObj} />
        <TimelineElement theme={theme.sas} job={sasJobObj} />
        <TimelineElement theme={theme.dzone} job={dzoneJobObj} />
    </VerticalTimeline>
    )
}


export default WorkTimeline