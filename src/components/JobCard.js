import React from 'react'

function JobCard(props){
    return (
    <div className="box">
    <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={props.jobImage}/>
          </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                <p className="title is-4">{props.companyName}</p>
                <p className="subtitle is-6">{props.jobLocation}</p>
                <p className="subtitle is-8">{props.jobTitle}</p>
                </div>
            </div>
      
            <div className="content">
                {props.jobContent}
                <br/>
                <br/>
                <div>
                <time><b>{props.startDate}</b> - <b>{props.endDate}</b></time>
                </div>
            </div>
        </div>
    </div> 
    </div>
    );
}

export default JobCard
