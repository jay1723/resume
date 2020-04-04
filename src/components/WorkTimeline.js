
import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import TimelineElement from "./TimelineElement"
import 'react-vertical-timeline-component/style.min.css';
import theme from "../theme.js";
import { appleJobObj, microsoftJobObj, gradJobObj, capOneJobObj, sasJobObj, dzoneJobObj } from '../constants';
import StarIcon from '@material-ui/icons/Star';

const backgroundstyle = {
    backgroundColor: "#202334"
}
function WorkTimeline(props){
    return (
    <div style={backgroundstyle} >
    <VerticalTimeline>
        <TimelineElement theme={theme.apple} job={appleJobObj} />
        <TimelineElement theme={theme.unc} job={gradJobObj} />
        <TimelineElement theme={theme.microsoft} job={microsoftJobObj} />
        <TimelineElement theme={theme.capone} job={capOneJobObj} />
        <TimelineElement theme={theme.sas} job={sasJobObj} />
        <TimelineElement theme={theme.dzone} job={dzoneJobObj} />
        <VerticalTimelineElement
                    iconStyle={{ background: '#202334', color: '#fff' }}
            icon={<StarIcon />}
        />
    </VerticalTimeline>
    </div>
    )
}


export default WorkTimeline