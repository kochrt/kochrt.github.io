---
layout: default

# Projects
projects: [
    {
        label: "Patterson Bridge", 
        url: "https://www.pattersonbridge.com", 
        details: "Site to help students find other students to work on projects together. Why wait for a startup weekend to find talent and start your business? Written in Angular2 with Google's Firebase as a backend."
    },
    {
        label: "Patterson Bridge iOS app", 
        url: "https://itunes.apple.com/us/app/patterson-bridge/id1178426060?mt=8", 
        details: "Full-featured iOS client for Patterson Bridge. Written in Swift 3 for iPad and iPhone."
    },
    {
        label: "Pîng", 
        url: "robko.ch/ping", 
        details: "Location based discovery app built with Swift and Firebase. Currently in Apple's TestFlight Beta program"
    },
    {
        label: "GaggleInc", 
        details: "Created a hybrid mobile app using the Ionic framework and AngularJS in a three-person Agile development environment"
    },
    {
        label: "Project Dragonfly", 
        url: "https://github.com/kochrt/ProjectDragonfly", 
        details: "Created an iOS app to encourage kids to explore their environment and ask scientific questions"
    }
]

# Work experience
experiences: [
    {
        title: "Cloud Engineering Intern",
        company: "Cardinal Health, Columbus OH",
        time: "2016",
        details: [
            "Redesigned and managed the internal engagement process for requesting Amazon Web Services (AWS) resources, streamlining the process by which resources are provisioned",
            "Automated solutions for logging into VDI, sending customer emails based on data from an Excel spreadsheet, and entering queries into Neo4j graph database all using Python"
        ]
    },
    {
        title: "Teaching Assistant",
        company: "Miami University, Oxford OH",
        time: "2015",
        details: [
            "Proctored a computer lab for object-oriented programming course, focusing on good coding practices, readability, and object-oriented design"
        ]
    },
    {
        title: "English Instructor",
        company: "Shaoxing University, Zhejiang China",
        time: "2013 - 2015",
        details: [
            "Taught comprehensive college-level English course to students while learning Chinese"
        ]
    },
    {
        title: "Research Fellow",
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
    [Java, 98%],
    [Swift, 98%],
    [Python, 92%],
    [Webdev, 85%]
]

---

            
{% include career-profile.html %}
            
{% include projects.html %}

{% include experience.html %}
            
{% include skills.html %}


