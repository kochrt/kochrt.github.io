---
layout: default

# About me
about: [
    "Software engineer and general tinkerer - I like to code and play with new technology. I'm currently a senior at Miami University, and most recently was a Cloud Engineering Intern at Cardinal Health in Columbus, Ohio, where I had the opportunity to work with AWS and do a lot of python scripting. I can be bribed with good Chinese food."
]

# Projects
projects: [
    {
        label: "Patterson Bridge", 
        img: "pb",
        url: "https://www.pattersonbridge.com", 
        details: "Site to help students find other students to work on projects together. Why wait for a startup weekend to find talent and start your business? Written in Angular2 with Google's Firebase as a backend."
    },
    {
        label: "Patterson Bridge iOS app", 
        img: "pb",
        url: "https://itunes.apple.com/us/app/patterson-bridge/id1178426060?mt=8", 
        details: "Full-featured iOS client for Patterson Bridge. Written in Swift 3 for iPad and iPhone."
    },
    {
        label: "Pîng",
        img: "ping",
        url: "/ping", 
        details: "Location based discovery app built with Swift and Firebase. Currently in Apple's TestFlight Beta program"
    },
    {
        label: "GaggleInc", 
        img: "gaggle",
        details: "Hybrid mobile app using the Ionic framework and Angular2 in a three-person Agile development environment"
    },
    {
        label: "Project Dragonfly", 
        img: "Project Dragonfly",
        url: "https://github.com/kochrt/ProjectDragonfly", 
        details: "Swift 3 iOS app to encourage kids to explore their environment and ask scientific questions"
    }
]

# Work experience
experiences: [
    {
        title: "Cloud Engineering Intern",
        img: "cardinal.png",
        company: "Cardinal Health, Columbus OH",
        time: "2016",
        details: [
            "Redesigned and managed the internal engagement process for requesting Amazon Web Services (AWS) resources, streamlining the process by which resources are provisioned",
            "Automated solutions for logging into VDI, sending customer emails based on data from an Excel spreadsheet, and entering queries into Neo4j graph database all using Python"
        ]
    },
    {
        title: "Teaching Assistant",
        img: "miami.png",
        company: "Miami University, Oxford OH",
        time: "2015",
        details: [
            "Proctored a computer lab for object-oriented programming course, focusing on good coding practices, readability, and object-oriented design"
        ]
    },
    {
        title: "English Instructor",
        img: "shaoxing.png",
        company: "Shaoxing University, Zhejiang China",
        time: "2013 - 2015",
        details: [
            "Taught comprehensive college-level English course to students while learning Chinese"
        ]
    },
    {
        title: "Research Fellow",
        img: "proctergamble.png",
        company: "Procter & Gamble, Cincinnati OH",
        time: "2012",
        details: [
            "As part of the biometrics group, conducted product research and consumer testing using various biometric tools and human factors, including facial expression coding, eye tracking using Tobii, implicit cognition studies, and Facial Action Coding System (FACS)",
            "Led work on developing new technical methods for evaluating product performance based on sensory feedback from consumers (Pantene)"
        ]
    }
]

# Skills
skills: [
    ["Swift, XCode, iOS", 98%],
    [Java, 98%],
    ["Angular2, Typescript", 92%],
    ["HTML, CSS, Javascript", 92%],
    [Python, 92%],
    ["Android, Android Studio", 88%]
]

---

{% include career-profile.html %}
            
{% include projects.html %}

{% include experience.html %}
            
{% include skills.html %}

