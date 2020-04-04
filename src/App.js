import React from 'react';
import './App.css';
import Hero from "./components/Hero.js"
import JobCard from "./components/JobCard.js"
import MediumHero from "./components/MediumHero.js"
import WorkTimeline from "./components/WorkTimeline.js"
import EducationTimeline from "./components/EducationTimeline.js"
import PersonalProject from "./components/PersonalProject.js"
import Footer from "./components/Footer.js"
// Constants
import { fullName,currentJob, appleJobObj, microsoftJobObj, gradJobObj, capOneJobObj, sasJobObj, dzoneJobObj } from './constants.js';

// Images
// import apple from "./images/apple.jpg"
// import microsoft from "./images/microsoft.png"
// import unc from "./images/unc.png"
// import c1 from "./images/capOne.jpg"
// import sas from "./images/sas.jpg"
// import dzone from "./images/dzone.jpg"

const herostyle = {
  // backgroundColor: "#030305",
  backgroundColor: "#202334",
}
const educationStyle = {
  backgroundColor: "#0E0F19"
}

const personalProjectStyle= {
  marginBottom: "25px"
}

const textstyle={
  color: "#F0F2F7"
}

const footerstyle = {
  backgroundColor: "#12100e"
}

function App() {
  return (
    <div>
    {/* Full length hero splash */}
    <Hero name={fullName} currentJob={currentJob} />
    {/* Experience hero bar */}
    <MediumHero title={"Experience"} style={herostyle}/>
      <WorkTimeline />
    <MediumHero title="Personal Projects" style={educationStyle}/>
      <PersonalProject style={personalProjectStyle}/>
      <MediumHero style={educationStyle} />
    <MediumHero title="Education" style={herostyle}/>
      <EducationTimeline /> 
    <Footer style={footerstyle} textstyle={textstyle}/>
    </div>
    
  );
}

export default App;
