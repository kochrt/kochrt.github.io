---
layout: resume

# Projects
projects: [
    {
        label: "Pîng iOS app",
        img: "ping",
        url: "https://itunes.apple.com/us/app/p%C3%AEng-color-tag/id1251194813?ls=1&mt=8", 
        details: "Location based discovery app built with Swift and a <a href=\"https://www.perfect.org\">Swift Perfect</a> REST API on AWS.",
        stack: [
            ["iOS.png", "iOS"],
            ["Swift.jpeg", "Swift"],
            ["mongo.jpg", "MongoDB"],
            ["aws.png", "Amazon Web Services"]
        ]
    },
    {
        label: "JobsBox",
        img: "briefcase",
        url: "https://github.com/kochrt/jobsbox",
        details: "Python webscraper for <a href=\"https://whoishiring.io\">whoishiring.io</a> based on keywords",
        stack: [
            ["Python.png", "Python"]
        ]
    },
    {
        label: "Patterson Bridge", 
        img: "pb",
        url: "https://www.pattersonbridge.com", 
        details: "Site to help students find other students to work on projects together. Why wait for a startup weekend to find talent and start your business? Written in Angular2 with Google's Firebase as a backend.",
        stack: [
            ["Angular2.png", "Angular2"], 
            ["Firebase.jpeg", "Firebase"]
        ]
    },
    {
        label: "Patterson Bridge iOS app", 
        img: "pb",
        url: "https://itunes.apple.com/us/app/patterson-bridge/id1178426060?mt=8", 
        details: "Full-featured iOS client for Patterson Bridge. Written in Swift 3 for iPad and iPhone.",
        stack: [
            ["iOS.png", "iOS"], 
            ["Swift.jpeg", "Swift"], 
            ["Firebase.jpeg", "Firebase"]
        ]
    },
    {
        label: "GaggleInc", 
        img: "gaggle",
        details: "Hybrid mobile app using the Ionic framework and Angular2 in a three-person Agile development environment",
        stack: [
            ["Angular2.png", "Angular2"],
            ["Ionic.png", "Ionic"]
        ]
    },
    {
        label: "Project Dragonfly iOS app", 
        img: "Project Dragonfly",
        url: "https://github.com/kochrt/ProjectDragonfly", 
        details: "Swift 3 iOS app to encourage kids to explore their environment and ask scientific questions",
        stack: [
            ["iOS.png", "iOS"], 
            ["Swift.jpeg", "Swift"]
        ]
    }
]

# Work experience
experiences: [
    {
        title: "Software Engineer",
        img: "cladwell.png",
        company: "Cladwell",
        url: "https://cladwell.com",
        location: "Cincinnati, OH",
        time: "2017 - Current",
        details: [
            "All-aspect iOS Development - quickly iterated features in response to market demands in a fast-paced startup environment",
            "Reduced instances of crashing by a factor of 10, while continuously adding new features",
            "Instrumental in raising app rating from 3.x to 4.4+"
        ]
    },
    {
        title: "Software Engineer",
        img: "cfs.png",
        company: "Cash Flow Solutions",
        url: "https://followthefrog.com",
        location: "Oxford, OH",
        time: "2016 - 2017",
        details: [ 
            "Created an embeddable javascript plugin (for use by clients to accept payments) as a one-line alternative to interacting directly with our API",
            "Migrated company website from Wordpress to independent HTML/CSS/JS"
        ]
    },
    {
        title: "Cloud Engineering Intern",
        img: "cardinal.png",
        company: "Cardinal Health",
        url: "https://cardinalhealth.com",
        location: "Columbus, OH",
        time: "2016",
        details: [
            "Redesigned and managed the internal engagement process for requesting Amazon Web Services (AWS) resources, streamlining the resource provisioning process",
            "Automated solutions for logging into VDI, sending customer emails based on data from an Excel spreadsheet, and entering queries into Neo4j graph database all using Python"
        ]
    },
    {
        title: "Teaching Assistant",
        img: "miami.png",
        company: "Miami University",
        url: "https://miamioh.edu",
        location: "Oxford, OH",
        time: "2015, 2017",
        details: [
            "Proctored a computer lab for object-oriented programming course, focusing on good coding practices, readability, and object-oriented design"
        ]
    },
    {
        title: "English Instructor",
        img: "shaoxing.png",
        company: "Shaoxing University",
        url: "https://en.wikipedia.org/wiki/Shaoxing_University",
        location: "Shaoxing, China",
        time: "2013 - 2015",
        details: [
            "Taught comprehensive college-level English course to students while learning Chinese"
        ]
    },
    {
        title: "Research Fellow",
        img: "proctergamble.png",
        company: "Procter & Gamble",
        url: "https://us.pg.com",
        location: "Cincinnati, OH",
        time: "2012",
        details: [
            "As part of the biometrics group, conducted product research and consumer testing using various biometric tools and human factors, including facial expression coding, eye tracking using Tobii, implicit cognition studies, and Facial Action Coding System (FACS)",
            "Led work on developing new technical methods for evaluating product performance based on sensory feedback from consumers (Pantene)"
        ]
    }
]

# Skills
skills: [
    # ["Swift, XCode, iOS", 98%],
    # [Java, 98%],
    # ["Angular2, Typescript", 92%],
    # ["HTML, CSS, Javascript", 92%],
    # [Python, 92%],
    # ["Android, Android Studio", 88%],
    # ["AWS", 88%]
]
---
{% include experience.html %}
{% include projects.html %}
{% if site.light %}

{% else %}
    {% if site.skills.size > 0 %}
        {% include skills.html %}
    {% endif %}
{% endif %}

