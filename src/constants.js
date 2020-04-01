export const firstName = "Jay"
export const lastName = "Rao"
export const fullName = `${firstName} ${lastName}`

export const currentJob = "Incoming SWE @ Apple Siri"


export const appleJobObj = {
    companyName: "Apple",
    jobTitle: "Software Engineer in Siri",
    jobContent: "Part of Siri AI/ML Rotational Program Summer class which is an 18 month software engineering rotational program within the Siri and AI/ML organizations at Apple",
    startDate: "April 2020",
    endDate: "Present",
    jobLocation: "Cupertino, CA",
    chips: []
}

export const microsoftJobObj = {
    companyName: "Microsoft",
    jobTitle: "Software Engineering Intern", 
    jobContent: `Interned in the Corporate Services Engineering and Operations organization. Worked with another intern to build and deploy an internal HR website to allow HR employees to easily award bonuses to employees. Built backend API using C#/SQLServer and the frontend using React/TypeScript. Project was completed before end of internship and was pushed into production after final quality checks.`,
    startDate: "May 2019",
    endDate: "August 2019",
    jobLocation: "Redmond, WA",
    chips: ["ReactJS", "C#", "SQLServer", "TypeScript"]
}

export const gradJobObj = {
    companyName: "UNC Chapel Hill Computer Science",
    jobTitle: "Graduate Research Assistant in Computational Genomics",
    jobContent: "Developed API for the Graphical Genome, a novel data structure written in Python to store multiple strands of DNA. Achieved compression rate of 50% using directed graph data structure as basis of structure. Completed a separate project called FASTAnnotation which proposed an extension to an existing Genomic file format used to store gene sequences for computational genetics. The extended file format leverages JSON to provide extensible annotations to be added to the gene sequences and I provide a lightweight parser for this new format.",
    startDate: "August 2018",
    endDate: "December 2019",
    jobLocation: "Chapel Hill, NC",
    chips: ["python", "jupyter", "sqlite3"]
}

export const capOneJobObj = {
    companyName: "Capital One",
    jobTitle: "Software Engineering Intern",
    jobContent: "Prototyped Docker containerization of major frontend project to simplify its complex build process. Prototype built the project and downloaded all dependencies with a single command. Showcased project to senior leadership and talked further with them about deploying the project for future use. Also updated data dashboard using Javascript/HTML/CSS with Chart.js used as the frontend graphics library to allow multiple teams to track progress of migration processes.",
    startDate: "June 2018",
    endDate: "August 2018",
    jobLocation: "McLean, VA",
    chips: ["Javascript", "HTML", "CSS", "Chart.js", "Docker"]
}

export const sasJobObj = {
    companyName: "SAS",
    jobTitle: "Software Engineering Intern",
    jobContent: "Created a suite of automated performance tests for SAS’s JMP statistical analysis product in order to track the stability of statistical functions through iterative builds. Assisted in the development and testing of an internal performance testing framework, called TimeIT!, which was deployed to the majority of automated tests within the JMP division. Presented project to development team of JMP including department head and SAS co-founder, John Sall.",
    startDate: "May 2017",
    endDate: "May 2018",
    jobLocation: "Cary, NC",
    chips: ["JMP", "JSL"]
}

export const dzoneJobObj = {
    companyName: "DZone Inc",
    jobTitle: "Software Engineering Intern",
    jobContent: "Used Spring/Java/Selenium framework to create over 90 automated tests to ensure the stability of RESTful API endpoints and frontend UI through various builds and releases. Overhauled technical API documentation to better reflect returned data and usage of individual endpoints.",
    startDate: "June 2016",
    endDate: "April 2017",
    jobLocation: "Cary, NC",
    chips: ["Spring", "Java", "Selenium Web Driver"] 
}


// Education
export const uncUndergrad = {
    companyName: "University of North Carolina - Chapel Hill",
    jobTitle: "B.S. Computer Science",
    jobContent: "Completed B.S. in Computer Science in 3 years and was accepted into the accelerated MS/BS Computer Science Masters program within the CS department.",
    startDate: "August 2015",
    endDate: "May 2018",
    jobLocation: "Chapel Hill, NC",
    chips: [],
    coursework: [ "Data Structures"," Computer Architecture", "Digital Logic and Design", "Programming Languages and Concepts", "Bioalgorithms", "Internet Services and Protocols", "Discrete Structures", "Algorithms", "Automata", "Databases"]
}

export const uncGrad = {
    companyName: "University of North Carolina - Chapel Hill",
    jobTitle: "M.S. Computer Science",
    jobContent: "Completed M.S. in Computer Science in 1.5 years as a part of the MS/BS Computer Science Masters program within the CS department. Worked as a research assistant for Leonard McMillan in the Computational Genetics lab working on novel data-structures to store and analyze DNA/RNA sequences. Completed a tangentially related writing requirement for the masters program where I propose an extension to a commonly used genetic file format and provide a lightweight parser in Python. This file format was one I developed in the course of my main research work.",
    startDate: "August 2018",
    endDate: "December 2019",
    jobLocation: "Chapel Hill, NC",
    repo: "https://github.com/jay1723/fastannotation",
    whitepaper: "https://github.com/jay1723/fastannotation/blob/master/Jay_FastAnnotation.pdf",
    coursework: ["Operating Systems", "Mobile Computing Systems", "Machine Learning", "Data Compression", "Robotics", "Software Engineering Lab"]
}

// Font constants

export const font = { 
    color: "#F0F2F7"
}

// Personal Projects


// export const template = {
//     title: "",
//     subtitle: "",
//     content:
// }

export const graphicalGenome = {
    title: "Graphical Genome",
    subtitle: "Collaborative Cross Graphical Genome",
    content: "Worked in an inter-disciplinary team comprised of the Genetics department and the Computer Science department at UNC Chapel Hill in the construction of a Directed Graph representation of a genome. I was responsible for the API and the underlying code behind the theory developed by the Genetics department. Paper forthcoming...",
    repo: "https://github.com/jay1723/GraphicalGenome",
    chips: ["python"]
}

export const fastannotation = {
    title: "FASTAnnotation",
    subtitle: "A generalized FASTA file format parser",
    content: "Built during the development of the Graphical Genome API in Leonard McMillan's lab at UNC. Defines an extension of the commonly used FASTA genetic file format that uses JSON to extend header lines within the file to provide the ability to add and remove annotations to specific portions of the genetic code stored in the file. I provide a simple Python wrapper that provides a parser and annotation creation/deletion functionality that is backwards compatible with existing FASTA parsers and file formats to allow for a seamless transition to the new format. Whitepaper available in the GitHub repository.",
    repo: "https://github.com/jay1723/fastannotation",
    chips:["python"]
}

export const rrt = {
    title: "RRT Path Planning Simulation",
    subtitle: "RRT path planning for a holonomic point robot",
    content: "Built a simulation of the commonly used RRT path planning algorithm using PyGame and python for a Robotics class. Added ability to add obstacles and define start and end positions within the board. Robot is defined as an infinitely small point robot so it does not require complex collision checks but is a good abstraction for even simple real world robots.",
    repo: "https://github.com/jay1723/RRT-Simulation",
    chips: ["python", "PyGame"]
}

export const resume = {
    title: "Personal Site",
    subtitle: "Personal portfolio website",
    content: "Built my personal portfolio using React (as an excuse to learn React). Used an open source vertical-timeline component for the experience and education sections of the site. Used Bulma.io for the styling for the website as well as its tile layout cards for the personal project section of the site. The scaffolding for the site was built using create-react-app ",
    repo: "https://github.com/jay1723/resume",
    chips: ["ReactJS", "Bulma.io", "CSS", "HTML"]
}

export const prerequisite = {
    title: "UNC CS Prerequisite Viewer",
    subtitle: "Visualize your path through the CS curriculum at UNC Chapel Hill",
    content: "Worked in a team of 4 as a part of the Software Engineering Lab class at UNC. Developed a way for students to visualize their path through the complicated CS curriculum. I was responsible for the backend API creation and route management and handled all of the data ingestion and retrieval for users who created profiles. App was not deployed but is fully functional in the local state.",
    repo: "https://github.com/jay1723/prerequisite-viewer-backend",
    chips: ["JavaScript", "JQuery"]
}

export const googlecalendar = {
    title: "Google Calendar Alarm Clock",
    subtitle: "Programmable alarm system using Google Calendar",
    content: "Worked in assitive technologies advised by Gary Bishop. Worked to create a Google Calendar alarm clock system that used specific trigger words to help a student with Autism go through is morning routine. When paired with a bluetooth speaker this alarm system can play custom MP3's at set intervals triggered by keyword phrases used in each calendar event. The project was deployed in the student's house at the end of the semester.",
    repo: "https://github.com/jay1723/GoogleCalendarAlarm",
    chips: ["python", "Google Calendar API"]
}