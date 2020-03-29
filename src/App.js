import React from 'react';
import './App.css';
import Hero from "./components/Hero.js"
import JobCard from "./components/JobCard.js"
import MediumHero from "./components/MediumHero.js"
import WorkTimeline from "./components/WorkTimeline.js"


// Constants
import { fullName,currentJob, appleJobObj, microsoftJobObj, gradJobObj, capOneJobObj, sasJobObj, dzoneJobObj } from './constants.js';

// Images
// import apple from "./images/apple.jpg"
// import microsoft from "./images/microsoft.png"
// import unc from "./images/unc.png"
// import c1 from "./images/capOne.jpg"
// import sas from "./images/sas.jpg"
// import dzone from "./images/dzone.jpg"



function App() {
  return (
    <div>
    {/* Full length hero splash */}
    <Hero name={fullName} currentJob={currentJob} />
    {/* Experience hero bar */}
    <MediumHero title={"Experience"}/>
    <WorkTimeline />
    {/* Column of cards of experience */}
    {/* <div className="columns is-multiline is-dark-background">
      <div className="column is-one-fifth is-narrow"></div>
      <div className="column" id="column1">
        <JobCard 
          jobImage={apple} 
          companyName={appleJobObj.companyName} 
          jobTitle={appleJobObj.jobTitle} 
          jobContent={appleJobObj.jobContent} 
          startDate={appleJobObj.startDate} 
          endDate={appleJobObj.endDate}
          jobLocation={appleJobObj.jobLocation}/>
        
        <JobCard 
          jobImage={sas} 
          companyName={sasJobObj.companyName} 
          jobTitle={sasJobObj.jobTitle} 
          jobContent={sasJobObj.jobContent} 
          startDate={sasJobObj.startDate} 
          endDate={sasJobObj.endDate}
          jobLocation={sasJobObj.jobLocation}/>
        
        </div>
        <div className="column" id="column2">
          <JobCard
            jobImage={microsoft}
            companyName={microsoftJobObj.companyName}
            jobTitle={microsoftJobObj.jobTitle}
            jobContent={microsoftJobObj.jobContent}
            startDate={microsoftJobObj.startDate}
            endDate={microsoftJobObj.endDate}
            jobLocation={microsoftJobObj.jobLocation}/>

          <JobCard
            jobImage={dzone}
            companyName={dzoneJobObj.companyName}
            jobTitle={dzoneJobObj.jobTitle}
            jobContent={dzoneJobObj.jobContent}
            startDate={dzoneJobObj.startDate}
            endDate={dzoneJobObj.endDate}
            jobLocation={dzoneJobObj.jobLocation}/>

          
        </div>
        
        <div className="column" id="column3">
          <JobCard
            jobImage={unc}
            companyName={gradJobObj.companyName}
            jobTitle={gradJobObj.jobTitle}
            jobContent={gradJobObj.jobContent}
            startDate={gradJobObj.startDate}
            endDate={gradJobObj.endDate}
            jobLocation={gradJobObj.jobLocation}
          />
          <JobCard
            jobImage={c1}
            companyName={capOneJobObj.companyName}
            jobTitle={capOneJobObj.jobTitle}
            jobContent={capOneJobObj.jobContent}
            startDate={capOneJobObj.startDate}
            endDate={capOneJobObj.endDate}
            jobLocation={capOneJobObj.jobLocation}
          />
        </div>
        <div className="column is-one-fifth is-narrow"></div>     

    </div> */}
    <MediumHero title="Personal Projects"/>
    </div>
    
  );
}

export default App;
